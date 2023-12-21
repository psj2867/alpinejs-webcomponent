const es = require("esbuild");

es.build({
      entryPoints: ["scripts/browser.js"],
      outfile: 'dist/component.min.js',
      bundle: true,
      platform: "browser",
      minify: true,
    });
es.build({
    entryPoints: ["scripts/browser.js"],
    outfile: 'dist/component.js',
    bundle: true,
    platform: "browser",
  });