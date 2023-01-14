# FXHASH Generative Token TypeScript Boilerplate

Files in `static/` get copied to the bundle. Files in `src/` are run through esbuild.

To create a zip file for upload:

```
yarnpkg build
yarnpkg zip
```

Viewing locally:

```
brew install serve
serve -port=5000 -dir=dist
```
