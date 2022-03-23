import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Center,
  Spinner,
} from "@chakra-ui/react";
import React from "react";

type ButtonProps = ChakraButtonProps & {
  /**
   * Whether the button should display a loading state. `true` displays a
   * spinner next to the button children.
   */
  loading?: boolean;
};

/**
 * A basic button component.
 */
const Button: React.FC<ButtonProps> = ({ loading, children, ...restProps }) => {
  return (
    <ChakraButton {...restProps}>
      {loading && (
        <Center mr={3}>
          <Spinner size="sm" />
        </Center>
      )}
      {children}
    </ChakraButton>
  );
};

export default Button;
