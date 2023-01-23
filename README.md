# FXHASH Generative Token TypeScript Boilerplate

Files in `static/` get copied to the bundle. Files in `src/` are run through esbuild.

To create a zip file for upload:

```
yarnpkg build
yarnpkg zip
```

Viewing locally:

Install serve:
```
brew install serve
```

In one session run `yarnpkg watch` and in another run `serve -port=5000 -dir=dist`.
