import {
  Box,
  Flex,
  Progress as ChakraProgress,
  ProgressProps as ChakraProgressProps,
  useStyleConfig,
} from "@chakra-ui/react";

import Text from "../Text/Text";

type ProgressProps = Omit<ChakraProgressProps, "colorScheme"> & {
  /**
   * The background color/variant for the bar (e.g. `success`, `gradient`).
   */
  barVariant: string;
  /**
   * Whether to hide the label showing the percent value indicated by the bar.
   */
  hideLabel?: boolean;
};


/**
 * A basic progress bar component which supports contextual (e.g.
 * `barVariant="success"`) and gradient (`barVariant="gradient"`) bar colors.
 */
const Progress: React.FC<ProgressProps> = ({
  variant,
  barVariant,
  value = 0,
  hideLabel,
  ...restProps
}) => {
  // If the value is low, show the percent text at the far right of the
  // bar background rather than within the bar itself (since the text won't be
  // able to fit inside the bar if the value is too low).
  const lowValue = value < 20;

  const { label } = useStyleConfig("Progress", { variant }) as {
    label: { color: string };
  };
  const { color } = label;

  const barBackground =
    barVariant === "gradient"
      ? "linear-gradient(87.87deg, #9C39FF 5%, #366EFF 95%)"
      : barVariant;

  return (
    <Box position="relative">
      <ChakraProgress
        height={8}
        borderRadius="xl"
        sx={{
          div: { background: barBackground },
        }}
        variant={variant}
        value={value}
        {...restProps}
      />
      {!hideLabel && (
        <Flex
          height="100%"
          width={lowValue ? "100%" : `${value}%`}
          position="absolute"
          top={0}
          left={0}
          alignItems="center"
          justifyContent="flex-end"
          pr={4}
        >
          <Text fontWeight={600} color={lowValue ? color : "white"}>
            {value.toFixed(2)}%
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Progress;
