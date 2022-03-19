# Rari Components

Run `npm start` to start the Storybook development server.

## Usage

Run `npm install git+https://github.com/Rari-Capital/rari-components#[tag or commit hash]` to install the component library off of GitHub.

Then, import fonts into your app:

```ts
import "rari-components/assets/fonts/avenir-next/avenir.css";
```

and set up the theme:

```tsx
import theme from "rari-components/theme";

// ...

function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>{/* ... */}</ChakraProvider>;
}
```

Note that the `rari-components` package that is `npm install`ed is not transpiled. To tell Next.js to transpile the code, add or edit the `webpack` entry in your `next.config.js`:

```js
// next.config.js

module.exports = {
  webpack: (config, options) => {
    // Transpile files matching `rari-components`, even though it is in
    // `node_modules` (Next excludes `node_modules` by default).
    config.module.rules.push({
      test: /\.tsx?/,
      include: [/node_modules\/rari-components/],
      use: "next-swc-loader",
    });

    return config;
  },
};
```

See https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config for more information about modifying `next.config.js`.

Finally, use the `rari-components` in your app:

```tsx
import { Card } from "rari-components";
```

### Standalone Usage

If you're incrementally adding `rari-components` to an existing dapp with a different `theme` already set and you don't want to conflict with it, consider the standalone entry point at `rari-components/standalone`:

```tsx
import { Card } from "rari-components/standalone";
```

If you use this entry point, you can skip setting up the `ChakraProvider` with the `theme` imported from `rari-components/theme`. However, you should still import the fonts and make changes to your `next.config.js` as outlined above if the existing dapp doesn't have them already.

Note that the `standalone` entrypoint adds extra performance overhead since each standalone component is wrapped with its own `ChakraProvider`. For best performance, set up the theme and import from the main `rari-components` entrypoint as described above.

## Adding New Components

To create a new component for `rari-components`:

1. Create a directory for the component named `ComponentName` in the `components/` directory.
2. Write an implementation of the component at `components/ComponentName/ComponentName.tsx`.
3. Write Storybook stories for the component at `components/ComponentName/ComponentName.stories.tsx`.
4. Export the component to package consumers in `index.ts` and `standalone.ts`.

## Troubleshooting

Since we are using commit hashes to version this package rather than `package.json` versions, Next.js sometimes caches previous versions of the component library between builds.

If you install a new version of `rari-components` but your Next.js app does not seem to reflect the latest changes, try running `rm -rf .next` to clear the Next cache and then restart the app.

In production, a manual re-deploy on Vercel should force a build with no cache.
