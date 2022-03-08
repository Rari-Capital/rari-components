import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";

type InputProps = Omit<ChakraInputProps, "onChange"> & {
  onChange(newValue: string): void;
};

/**
 * A basic input component.
 */
const Input: React.FC<InputProps> = ({ onChange, ...restProps }) => {
  return (
    <ChakraInput onChange={(e) => onChange(e.target.value)} {...restProps} />
  );
};

export default Input;
