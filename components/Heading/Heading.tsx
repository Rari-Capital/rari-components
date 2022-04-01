import { forwardRef } from "react";
import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";

type HeadingProps = ChakraHeadingProps;

/**
 * A basic text heading component which supports contextual colors (e.g.
 * `variant="success"`) and gradient text (`variant="gradient"`).
 */
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ variant, ...restProps }, ref) => {
    // If `variant` is not "gradient", it refers to a color. Otherwise, pass
    // through the variant so Chakra can style it.
    const color = variant !== "gradient" ? variant : undefined;

    return (
      <ChakraHeading ref={ref} variant={variant} color={color} {...restProps} />
    );
  }
);
Heading.displayName = "Heading";

export default Heading;
export type { HeadingProps };
