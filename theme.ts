import { extendTheme } from "@chakra-ui/react";
import { mapValues } from "lodash";

const colors = {
  primary: "#3687FF",
  success: "#4CD791",
  neutral: "#6C69E9",
  warning: "#FFBE5E",
  // Used for text/foreground elements
  darkgray: "#3E3E3E",
  // Avoid "gray" so we don't conflict with a default Chakra color
  // See https://github.com/chakra-ui/chakra-ui/issues/5709
  mediumgray: "#909090",
  lightgray: "#E0E0E0",
  // Used for cards
  cardmatte: "#303030",
  activematte: "#EFF5FF",
  lightmatte: "#F0F0F0",
  // Used for background
  darkmatte: "#101010",
  // Used for borders
  activeborder: "#3683F6",
};

const components = {
  Button: {
    baseStyle: {
      _focus: {
        boxShadow: "none",
      },
      color: "white",
      background: "primary",
      // This is necessary to override a default Chakra style for
      // `:hover:disabled` with higher specificity
      _hover: {
        _disabled: {
          background: "primary",
        },
        opacity: 0.75,
      },
      _disabled: {
        opacity: 0.75,
      },
    },
    variants: {
      // Create button variants for all colors
      ...mapValues(colors, (_, key) => ({
        background: key,
        _hover: {
          _disabled: {
            background: key,
          },
        },
      })),
    },
    defaultProps: {
      // Chakra sets a default `Button` variant, clear that
      variant: "nonexistent",
    },
  },
  Card: {
    baseStyle: {
      color: "white",
      // Even though `Card` has a default border width of 0, some components
      // which use `Card` internally (e.g. `StatisticTable`) rely on the
      // border-color being set.
      borderColor: "darkgray",
      backgroundColor: "cardmatte",
    },
    variants: {
      light: {
        color: "black",
        borderColor: "lightgray",
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
  Divider: {
    baseStyle: {
      borderColor: "darkgray",
    },
  },
  Heading: {
    variants: {
      gradient: {
        background: "linear-gradient(87.87deg, #9C39FF 5%, #366EFF 95%)",
        backgroundClip: "text",
        textFillColor: "transparent",
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
            color: "mediumgray",
          },
        },
      },
      outline: {
        field: {
          color: "white",
          borderColor: "darkgray",
          backgroundColor: "darkmatte",
          _hover: {
            borderColor: "mediumgray",
          },
          _focus: {
            borderColor: "mediumgray",
            boxShadow: "none",
          },
        },
      },
    },
  },
  Progress: {
    baseStyle: {
      track: {
        background: "cardmatte",
      },
      label: {
        color: "white",
      },
    },
    variants: {
      light: {
        track: {
          background: "lightmatte",
        },
        label: {
          color: "black",
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
  Tabs: {
    baseStyle: {
      tab: {
        borderRadius: "lg",
        fontWeight: 600,
        color: "white",
        bg: "primary",
        opacity: 0.5,
        minWidth: 48,
        mr: 4,
        _focus: {
          boxShadow: "none",
        },
        _selected: {
          bg: "primary",
          opacity: 1,
        },
      },
      tabpanel: {
        paddingX: 0,
      },
    },
    defaultProps: {
      // Nonexistent variant to clear other base styles
      variant: "default",
    },
  },
  Text: {
    variants: {
      secondary: {
        opacity: 0.5,
      },
      gradient: {
        background: "linear-gradient(87.87deg, #9C39FF 5%, #366EFF 95%)",
        backgroundClip: "text",
        textFillColor: "transparent",
      },
    },
  },
  // https://github.com/chakra-ui/chakra-ui/issues/2347#issuecomment-917375118
  defaultProps: {
    variant: "outline",
  },
};

/**
 * Theme object to pass to `<ChakraProvider/>` to enable rari-component styles.
 */
const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Avenir Next",
    body: "Avenir Next",
  },
  colors,
  components,
});

export default theme;
