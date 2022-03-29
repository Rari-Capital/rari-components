import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";
import Heading from "../Heading";
import Text from "../Text";

type StatisticProps = BoxProps & {
  title: string;
  value: string;
  variant?: string;
};

/**
 * A component which displays a statistic's title (smaller text) and value
 * (larger text).
 */
const Statistic: React.FC<StatisticProps> = ({
  title,
  value,
  variant,
  ...restProps
}) => {
  // See https://github.com/chakra-ui/chakra-ui/issues/2456 for more info
  const { color } = useStyleConfig("Statistic", { variant }) as {
    color: string;
  };

  return (
    <Box mr={4} textAlign="left" {...restProps}>
      <Text fontSize="sm" mb={2} color={color} opacity={0.5}>
        {title}
      </Text>
      <Heading size="lg" color={color}>
        {value}
      </Heading>
    </Box>
  );
};

export default Statistic;
export type { StatisticProps };
