## Rari Components

Run `npm start` to start the Storybook development server.

## Usage

Run `npm install git+https://github.com/Rari-Capital/rari-components#[tag or commit hash]` to install the component library off of GitHub.

Then, import fonts:

```ts
import "rari-components/assets/fonts/avenir-next/avenir.css";
```

and set up theme:

```tsx
import theme from "rari-components/theme";

// ...

function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>{/* ... */}</ChakraProvider>;
}
```

Note that the modules are not transpiled. To transpile them with Next.js, add or edit the `webpack` entry in your `next.config.js`:

```js
module.exports = {
  webpack: (config, options) => {
    // Transpile rari-components, even though it is in node_modules
    config.module.rules.push({
      test: /\.tsx?/,
      include: [/node_modules\/rari-components/],
      use: "next-swc-loader",
    });

    return config;
  },
};
```

See https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config for more information.

### Troubleshooting

Sometimes, Next.js caches previous versions of the component library, since we are using commit hashes to version rather than `package.json` versions. If you install a new version of the component library but your Next.js app does not seem to reflect the latest changes, try running `rm -rf .next` to clear the Next cache and then restart the app.

In production, a manual re-deploy on Vercel should force a build with no cache.
