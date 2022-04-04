import React, { forwardRef } from "react";
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
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, disabled, children, ...restProps }, ref) => {
    return (
      // If there is an explicit `disabled` prop provided, use that. Otherwise,
      // the button should be disabled while loading.
      <ChakraButton ref={ref} disabled={disabled ?? loading} {...restProps}>
        {loading && (
          <Center mr={3}>
            <Spinner size="sm" />
          </Center>
        )}
        {children}
      </ChakraButton>
    );
  }
);
Button.displayName = "Button";

export default Button;
export type { ButtonProps };
