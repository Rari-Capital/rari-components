import theme from "../theme.ts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "darkmatte",
    values: [
      {
        name: "darkmatte",
        value: "#101010",
      },
      {
        name: "lightmatte",
        value: "#F0F0F0",
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
};
