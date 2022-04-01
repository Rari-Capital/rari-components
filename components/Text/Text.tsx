import { forwardRef } from "react";
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";

type TextProps = ChakraTextProps;

/**
 * A basic text component which supports contextual colors (e.g.
 * `variant="success"`) and gradient text (`variant="gradient"`).
 */
const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant, ...restProps }, ref) => {
    // If `variant` is not "gradient" or "secondary", it refers to a color.
    // Otherwise, pass through the variant so Chakra can style it.
    const color =
      variant !== "gradient" && variant !== "secondary" ? variant : undefined;

    return (
      <ChakraText ref={ref} variant={variant} color={color} {...restProps} />
    );
  }
);
Text.displayName = "Text";

export default Text;
export type { TextProps };
