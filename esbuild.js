const esbuild = require("esbuild");
const copyStaticFiles = require("esbuild-copy-static-files");

esbuild.build({
  entryPoints: ["./src/index.ts"],
  outfile: "./dist/index.js",
  bundle: true,
  minify: true,
  sourcemap: false,
  watch: process.env.WATCH !== undefined,
  plugins: [
    copyStaticFiles({
      src: "static",
      dest: "dist",
    }),
  ],
});
