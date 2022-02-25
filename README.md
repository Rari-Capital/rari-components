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
