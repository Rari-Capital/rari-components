import {
  InputGroup,
  InputGroupProps,
  InputRightElement,
  useStyleConfig,
} from "@chakra-ui/react";
import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Text from "../Text/Text";
import TokenIcon from "../TokenIcon/TokenIcon";

type TokenAmountInputProps = InputGroupProps & {
  onClickMax(): void;
  tokenSymbol: string;
  tokenAddress: string;
  value: string;
  onChange(newValue: string): void;
};

/**
 * An augmented input component for inputting token amounts. Shows the token
 * symbol and logo as well as a "Max" button users can use to input the
 * maximum amount in their wallet.
 */
const TokenAmountInput: React.FC<TokenAmountInputProps> = ({
  onClickMax,
  tokenSymbol,
  tokenAddress,
  value,
  onChange,
  variant,
  ...restProps
}) => {
  const inputStyle = useStyleConfig("Input", { variant }) as {
    field: {
      color: string;
      fontWeight: number;
      backgroundColor: string;
    };
  };
  const { color, fontWeight, backgroundColor } = inputStyle.field;

  return (
    <InputGroup {...restProps}>
      <Input
        type="number"
        value={value}
        onChange={onChange}
        placeholder="0.0"
        min={0}
        variant={variant}
      />
      <InputRightElement
        // We want to make the background of the token solid so we can't see the
        // numbers through it, but we don't want the background to cover the
        // border. 30px is a reasonable height to hide the text.
        height="30px"
        // Center horizontally
        top="calc(50% - 15px)"
        right={12}
        backgroundColor={backgroundColor}
        width={52}
        justifyContent="flex-end"
      >
        <TokenIcon size="xs" tokenAddress={tokenAddress} mr={2} />
        <Text color={color} fontWeight={fontWeight} mr={8}>
          {tokenSymbol}
        </Text>
      </InputRightElement>
      <InputRightElement
        width={12}
        right={2}
        height="30px"
        top="calc(50% - 15px)"
        backgroundColor={backgroundColor}
      >
        <Button size="xs" onClick={onClickMax}>
          {/* Exact `mt` set to vertically center text ignoring descenders */}
          <Text mt="3px">MAX</Text>
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default TokenAmountInput;
