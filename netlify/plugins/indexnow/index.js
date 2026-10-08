// Netlify build plugin: after a PRODUCTION deploy, submit the pages that changed to IndexNow.
// onPostBuild (before publish) compares the new build with what is live; onSuccess (after publish,
// when the new pages and the key file are being served) submits the difference.
// Deploy previews and branch deploys never submit. Never fails a deploy.
import { changedUrls, submit } from "../../../scripts/indexnow.mjs";

let pending = [];

export const onPostBuild = async ({ constants }) => {
  if (process.env.CONTEXT !== "production") return;
  try {
    pending = await changedUrls(constants.PUBLISH_DIR);
    console.log(`IndexNow: ${pending.length} changed page(s) found${pending.length ? `:\n  ${pending.join("\n  ")}` : ""}`);
  } catch (e) {
    console.log(`IndexNow: could not compare with the live site (${e.message}); nothing will be submitted.`);
    pending = [];
  }
};

export const onSuccess = async () => {
  if (process.env.CONTEXT !== "production") return;
  try { await submit(pending); } catch (e) { console.log(`IndexNow: submit failed (${e.message}); deploy unaffected.`); }
};
