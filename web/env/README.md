## What's this?

This is an environment related build profiles. It's used by vite, replacing the `import.meta.env.XXX` at the build time.
`.env.development` is used for local development while `.env.production` is used for production building.

This variable is replaced at the building time. If you modified the files in this directory, remember to restart your
vite daemon.

### How to add new config options?

First, add the config option in `.env.development` and `.env.production`. The option name should in **UPPER_CASE** and
start with `BK_`. Vite requires a fixed prefix for making sure we don't accidentally expose some unwanted configs.

Then, you should modify `vite-env.d.ts` for adding this newly added config option. This would enable IntelliSense for TypeScript. 

You can access this config option now by using `import.meta.env.OPTION_NAME` variable. But this could be too long to use,
and we may switch to another build tools. So we defined all the config options in `config/build-config.ts`.
Remember to add your config option here, and `import { BuildConfig } from '@/config/build-config';` to use it elsewhere.
