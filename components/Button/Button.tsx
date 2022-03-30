import React from "react";
import {
  Center,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Spinner,
} from "@chakra-ui/react";

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
const Button: React.FC<ButtonProps> = ({
  loading,
  disabled,
  children,
  ...restProps
}) => {
  return (
    // If there is an explicit `disabled` prop provided, use that. Otherwise,
    // the button should be disabled while loading.
    <ChakraButton disabled={disabled || loading} {...restProps}>
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
export type { ButtonProps };
