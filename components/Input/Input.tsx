import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";

type InputProps = Omit<ChakraInputProps, "onChange"> & {
  onChange?(newValue: string): void;
};

/**
 * A basic input component.
 */
const Input: React.FC<InputProps> = ({ onChange = () => {}, ...restProps }) => {
  return (
    // Wrap `onChange` to abstract the `event.target.value` access and allow
    // consumers to get the new input value immediately.
    <ChakraInput onChange={(e) => onChange(e.target.value)} {...restProps} />
  );
};

export default Input;
