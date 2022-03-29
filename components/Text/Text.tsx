import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";

type TextProps = ChakraTextProps;

/**
 * A basic text component which supports contextual colors (e.g.
 * `variant="success"`) and gradient text (`variant="gradient"`).
 */
const Text: React.FC<TextProps> = ({ variant, ...restProps }) => {
  // If `variant` is not "gradient" or "secondary", it refers to a color.
  // Otherwise, pass through the variant so Chakra can style it.
  const color =
    variant !== "gradient" && variant !== "secondary" ? variant : undefined;

  return <ChakraText variant={variant} color={color} {...restProps} />;
};

export default Text;
export type { TextProps };
