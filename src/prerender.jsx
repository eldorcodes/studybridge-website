import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { notFoundPage, pages, siteOrigin } from "./pages";

const template = await readFile("dist/index.html", "utf8");
const escape = (value) => value.replace(/[&<>"]/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;",
}[character]));

async function writePage(path, page, files) {
  const markup = renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>,
  );
  const canonical = page.canonical ?? path;
  const html = template
    .replace(/<title>.*?<\/title>/, () => `<title>${escape(page.title)}</title>`)
    .replace(/(<meta (?:name="description"|property="og:description") content=")[^"]*"/g,
      (_, start) => `${start}${escape(page.description)}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/,
      (_, start) => `${start}${escape(page.title)}"`)
    .replace(/(<meta property="og:url" content="|<link rel="canonical" href=")[^"]*"/g,
      (_, start) => `${start}${siteOrigin + canonical}"`)
    .replace(/(<meta name="robots" content=")[^"]*"/,
      (_, start) => `${start}${page.robots ?? "index, follow"}"`)
    .replace('<div id="root"></div>', () => `<div id="root" data-page="${path}">${markup}</div>`);

  for (const file of files) {
    const output = join("dist", file);
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, html);
  }
}

for (const [path, page] of Object.entries(pages)) {
  const slug = path.slice(1);
  // Amplify uses the flat file for clean URLs and the directory index for slash URLs.
  await writePage(path, page, slug ? [`${slug}.html`, `${slug}/index.html`] : ["index.html"]);
}
await writePage("/404", notFoundPage, ["404.html"]);

const indexablePaths = Object.entries(pages)
  .filter(([path, page]) => !page.robots && (!page.canonical || page.canonical === path))
  .map(([path]) => `  <url><loc>${siteOrigin + path}</loc></url>`);
await writeFile("dist/sitemap.xml", [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...indexablePaths,
  '</urlset>',
  '',
].join("\n"));
