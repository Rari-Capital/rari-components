import React, { useRef } from "react";
import {
  InputGroup,
  InputGroupProps,
  InputRightElement,
  useStyleConfig,
  useToken,
} from "@chakra-ui/react";
import Button from "../Button";
import Input from "../Input";
import Text from "../Text";
import TokenIcon from "../TokenIcon";
import TokenSymbol from "../TokenSymbol";

type TokenAmountInputProps = Omit<InputGroupProps, "value" | "onChange"> & {
  /**
   * Event handler which is triggered when the "MAX" button is clicked. If
   * `undefined`, the "MAX" button is not shown.
   */
  onClickMax?(): void;
  tokenAddress: string;
  value?: string;
  onChange?(newValue: string): void;
};

/**
 * An augmented input component for inputting token amounts. Shows the token
 * symbol and logo as well as a "Max" button users can use to input the
 * maximum amount in their wallet.
 */
const TokenAmountInput: React.FC<TokenAmountInputProps> = ({
  onClickMax,
  tokenAddress,
  value,
  onChange,
  variant,
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyle = useStyleConfig("Input", { variant }) as {
    field: {
      color: string;
      fontWeight: number;
      backgroundColor: string;
    };
    maxButton?: {
      variant?: string;
    };
  };
  const { color, fontWeight, backgroundColor } = inputStyle.field;
  const maxButtonVariant = inputStyle?.maxButton?.variant;
  // Need to resolve actual CSS background color from the theme since we use it
  // in a `linear-gradient`.
  const resolvedBackgroundColor = useToken("colors", backgroundColor);

  return (
    <InputGroup {...restProps}>
      <Input
        type="number"
        value={value}
        onChange={onChange}
        placeholder="0.0"
        min={0}
        variant={variant}
        // Disable increment/decrement on scroll
        // https://stackoverflow.com/questions/63224459/disable-scrolling-on-input-type-number-in-react
        onWheel={(e) => e.currentTarget.blur()}
        ref={inputRef}
      />
      <InputRightElement
        // We want to make the background of the token solid so we can't see the
        // numbers through it, but we don't want the background to cover the
        // border. 30px is a reasonable height to hide the text.
        height="30px"
        // Center horizontally
        top="calc(50% - 15px)"
        // If `onClickMax` is `undefined`, "MAX" button will be hidden so we
        // don't need to leave room for it. Just leave a little bit of space so
        // the border isn't covered.
        right={!!onClickMax ? 12 : "2px"}
        background={`linear-gradient(to right, transparent, ${resolvedBackgroundColor} 25%)`}
        width={52}
        justifyContent="flex-end"
        cursor="text"
        // Focus the input when the token symbol is clicked
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <TokenIcon size="xs" tokenAddress={tokenAddress} mr={2} />
        {/*
         * Leave less margin on the right of the symbol if there's no "MAX"
         * button
         */}
        <Text color={color} fontWeight={fontWeight} mr={!!onClickMax ? 8 : 4}>
          <TokenSymbol tokenAddress={tokenAddress} />
        </Text>
      </InputRightElement>
      {/* Hide "MAX" button if `onClickMax` is `undefined` */}
      {!!onClickMax && (
        <InputRightElement
          width={12}
          right={2}
          height="30px"
          top="calc(50% - 15px)"
          backgroundColor={backgroundColor}
        >
          <Button size="xs" onClick={onClickMax} variant={maxButtonVariant}>
            {/* Exact `mt` set to vertically center text ignoring descenders */}
            <Text mt="3px">MAX</Text>
          </Button>
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default TokenAmountInput;
export type { TokenAmountInputProps };
