import { Input as ChakraInput } from "@chakra-ui/react";
import React from "react";

const Input: React.FC<React.ComponentProps<typeof ChakraInput>> = (props) => {
  return <ChakraInput {...props} />;
};

export default Input;
