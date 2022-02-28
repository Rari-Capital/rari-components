import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";

/**
 * A basic input component.
 */
const Input: React.FC<ChakraInputProps> = (props) => {
  return <ChakraInput {...props} />;
};

export default Input;
