import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import React from "react";

/**
 * A basic button component.
 */
const Button: React.FC<ChakraButtonProps> = (props) => {
  return <ChakraButton variant="default" {...props} />;
};

export default Button;
