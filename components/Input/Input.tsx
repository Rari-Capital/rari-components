import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";

const Input: React.FC<ChakraInputProps> = (props) => {
  return <ChakraInput {...props} />;
};

export default Input;
