## Rari Components

Run `npm start` to start the Storybook development server.

## Usage

NOTE: IN PROGRESS

Run `npm install rari-components`. The modules are not transpiled. To transpile them with Next.js, add or edit the `webpack` entry in your `next.config.js`:

```js
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.tsx?/,
      // Transpile rari-components, even though it is in node_modules
      include: [/node_modules\/rari-components/],
      use: "next-swc-loader",
    });

    return config;
  },
};
```

See https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config for more information.
