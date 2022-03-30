import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";

type HeadingProps = ChakraHeadingProps;

/**
 * A basic text heading component which supports contextual colors (e.g.
 * `variant="success"`) and gradient text (`variant="gradient"`).
 */
const Heading: React.FC<HeadingProps> = ({ variant, ...restProps }) => {
  // If `variant` is not "gradient", it refers to a color. Otherwise, pass
  // through the variant so Chakra can style it.
  const color = variant !== "gradient" ? variant : undefined;

  return <ChakraHeading variant={variant} color={color} {...restProps} />;
};

export default Heading;
export type { HeadingProps };
