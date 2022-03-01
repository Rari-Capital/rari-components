import {
  Progress as ChakraProgress,
  ProgressProps as ChakraProgressProps,
} from "@chakra-ui/react";

type ProgressProps = Omit<ChakraProgressProps, "colorScheme"> & {
  barVariant: string;
};

/**
 * A basic text Progress component which supports contextual colors (e.g.
 * `barVariant="success"`) and gradient text (`barVariant="gradient"`).
 */
const Progress: React.FC<ProgressProps> = ({
  variant,
  barVariant,
  ...restProps
}) => {
  const barBackground =
    barVariant === "gradient"
      ? "linear-gradient(87.87deg, #9C39FF 5%, #366EFF 95%)"
      : barVariant;

  return (
    <ChakraProgress
      height={8}
      borderRadius="xl"
      sx={{
        div: { background: barBackground },
      }}
      variant={variant}
      {...restProps}
    />
  );
};

export default Progress;
