import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Avenir Next",
    body: "Avenir Next",
  },
  colors: {
    positive: "#4CD791",
    neutral: "#6C69E9",
    // Used for text/foreground elements
    darkgray: "#3E3E3E",
    lightgray: "#909090",
    // Used for cards
    cardmatte: "#303030",
    activematte: "#EFF5FF",
    // Used for backgrounds
    darkmatte: "#202020",
    lightmatte: "#F0F0F0",
    // Used for borders
    activeborder: "#3683F6",
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
    Card: {
      baseStyle: {
        color: "white",
        backgroundColor: "cardmatte",
      },
      variants: {
        light: {
          color: "black",
          backgroundColor: "lightmatte",
        },
        active: {
          color: "black",
          borderColor: "activeborder",
          borderWidth: "1px",
          backgroundColor: "activematte",
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
