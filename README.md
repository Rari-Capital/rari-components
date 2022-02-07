## Rari Components

Run `npm start` to start the Storybook development server.

## Usage

NOTE: THIS IS IN PROGRESS

Run `npm install rari-components`. The modules are not transpiled. To transpile them with Next.js, add a `webpack` entry to your `next.config.js`:

```js
// Example config for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/vercel/next.js/tree/canary/packages/next-mdx
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ts/,
      include: [/node_modules\/rari-components/],
      use: "next-babel-loader",
    });

    return config;
  },
};
```

See https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config for more information.
