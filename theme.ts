import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Avenir Next",
    body: "Avenir Next",
  },
  colors: {
    positive: "#4CD791",
    neutral: "#6C69E9",
  },
  components: {
    Button: {
      baseStyle: {
        color: "white",
      },
      variants: {
        default: {
          backgroundColor: "positive",
        },
        neutral: {
          backgroundColor: "neutral",
        },
      },
    },
  },
});

export default theme;
