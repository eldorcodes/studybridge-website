# StudyBridge LLC website

The company site for StudyBridge’s mobile utilities, education apps, and AI tools.

## Local development

Run `npm ci` and `npm run dev`. Run `npm run build` to generate the production site in `dist`. The build renders the React routes to HTML, then the browser hydrates those pages for interactive navigation.

Page components and metadata are registered in `src/pages.js`. To add an app to the featured catalog, update `src/pages/Projects.jsx`.

## Amplify Hosting

The GitHub-connected Amplify deployment uses `amplify.yml` to build and publish all files in `dist`. Each route is emitted as both a flat HTML file and a directory index so Amplify can serve clean URLs with or without a trailing slash. For example, `/privacy` can use `privacy.html` and `/privacy/` can use `privacy/index.html`. Both contain the policy in the HTML and declare `/privacy` as the canonical URL. The legacy `/privacy-policy` URL also serves the policy.

After the production branch finishes deploying, verify both privacy URLs and the terms page with a fresh HTTP GET:

```sh
curl -fsSL https://www.studybridgeapps.com/privacy | grep -o '<h1[^>]*>Privacy Policy</h1>'
curl -fsSL https://www.studybridgeapps.com/privacy/ | grep -o '<h1[^>]*>Privacy Policy</h1>'
curl -fsSL https://www.studybridgeapps.com/privacy-policy | grep -o '<h1[^>]*>Privacy Policy</h1>'
curl -fsSL -o /dev/null -w '%{http_code}\n' https://www.studybridgeapps.com/terms
```

If Amplify serves a different page after a successful build, check the app’s **Rewrites and redirects** for a catch-all 200 rule or an explicit rule that intercepts the affected route. Amplify’s built-in clean URL routing can serve these generated files directly.
