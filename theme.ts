import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Avenir Next",
    body: "Avenir Next",
  },
  colors: {
    positive: "#4CD791",
    neutral: "#6C69E9",
    darkgray: "#3E3E3E",
    lightgray: "#909090",
  },
  components: {
    Button: {
      baseStyle: {
        color: "white",
        backgroundColor: "positive",
      },
      variants: {
        neutral: {
          backgroundColor: "neutral",
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            fontWeight: "bold",
            borderColor: "darkgray",
            _hover: {
              borderColor: "lightgray",
            },
            _focus: {
              borderColor: "lightgray",
              boxShadow: "none",
            },
          },
        },
      },
    },
    // https://github.com/chakra-ui/chakra-ui/issues/2347#issuecomment-917375118
    defaultProps: {
      variant: "outline",
    },
  },
});

export default theme;
