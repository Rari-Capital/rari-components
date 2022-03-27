import React, { forwardRef } from "react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = Omit<ChakraInputProps, "onChange"> & {
  onChange?(newValue: string): void;
};

/**
 * A basic input component. Forwards `ref` to the underlying HTML `<input/>`.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange = () => {}, ...restProps }, ref) => {
    return (
      // Wrap `onChange` to abstract the `event.target.value` access and allow
      // consumers to get the new input value immediately.
      <ChakraInput
        onChange={(e) => onChange(e.target.value)}
        ref={ref}
        {...restProps}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
