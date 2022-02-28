import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Avenir Next",
    body: "Avenir Next",
  },
  colors: {
    primary: "#3687FF",
    success: "#4CD791",
    neutral: "#6C69E9",
    // Used for text/foreground elements
    darkgray: "#3E3E3E",
    gray: "#909090",
    lightgray: "#E0E0E0",
    // Used for cards
    cardmatte: "#303030",
    activematte: "#EFF5FF",
    // Used for backgrounds
    darkmatte: "#101010",
    lightmatte: "#F0F0F0",
    // Used for borders
    activeborder: "#3683F6",
  },
  components: {
    Button: {
      baseStyle: {
        color: "white",
        backgroundColor: "primary",
        _focus: {
          boxShadow: "none",
        },
        _hover: {
          opacity: 0.75,
        },
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
      baseStyle: {
        field: {
          fontWeight: 600,
          borderWidth: 1,
        },
      },
      variants: {
        light: {
          field: {
            color: "black",
            backgroundColor: "white",
            borderColor: "transparent",
            _hover: {
              borderColor: "lightgray",
            },
            _focus: {
              borderColor: "lightgray",
            },
            _placeholder: {
              color: "gray",
            },
          },
        },
        outline: {
          field: {
            color: "white",
            borderColor: "darkgray",
            backgroundColor: "darkmatte",
            _hover: {
              borderColor: "gray",
            },
            _focus: {
              borderColor: "gray",
              boxShadow: "none",
            },
          },
        },
      },
    },
    Statistic: {
      baseStyle: {
        color: "white",
      },
      variants: {
        dark: {
          color: "black",
        },
      },
    },
    Text: {
      variants: {
        secondary: {
          opacity: 0.5,
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
