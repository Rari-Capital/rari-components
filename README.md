# Rari Components

A component library for Rari Capital's frontend properties.

[Slides](https://docs.google.com/presentation/d/1FTuIFPPQWBgbdSxOMAsBg6u0MWRMieF_RP15n5Ky_HQ/edit?usp=sharing) | [Demo](https://rari-components.vercel.app/)

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

In addition to all the `rari-components` exported in the main entry point, the `rari-components/standalone` entry point also exports a theme-aware standalone `Box`:

```tsx
import { Box as RariBox } from "rari-components/standalone";

const MyComponent = () => (
  // This `Box` will have the correct `cardmatte` color from the theme!
  // Note, however, that all children of this `Box` will also read from the
  // theme exported by this repo.
  <RariBox backgroundColor="cardmatte" />
);
```

If you use the `rari-components/standalone` entry point, you can skip setting up the `ChakraProvider` with the `theme` imported from `rari-components/theme`. However, you should still import the fonts and make changes to your `next.config.js` as outlined above if the existing dapp doesn't have them already.

The `standalone` entry point adds extra performance overhead since each standalone component is wrapped with its own `ChakraProvider`. For best performance, set up the theme and import from the main `rari-components` entry point as described above.

## Adding New Components

To create a new component for `rari-components`:

1. Create a directory for the component named `ComponentName` in the `components/` directory.
1. Write an implementation of the component at `components/ComponentName/ComponentName.tsx`.
1. Write Storybook stories for the component at `components/ComponentName/ComponentName.stories.tsx`.
1. Export the component from `components/index.ts`: `export { default } from "./Component";`, etc.
1. Start the Storybook development server and test the component's stories: `npm run start`.
1. Export the component to package consumers in `index.ts` and `standalone.ts`.

## Troubleshooting

### Updates Not Reflected in Next.js App

Since we are using commit hashes to version this package rather than `package.json` versions, Next.js sometimes caches previous versions of the component library between builds.

If you install a new version of `rari-components` but your Next.js app does not seem to reflect the latest changes, try running `rm -rf .next` to clear the Next cache and then restart the app.

In production, a manual re-deploy on Vercel should force a build with no cache.

### Type Errors

Run `npm run typecheck` to typecheck `components/`.
