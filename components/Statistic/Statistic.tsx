import { Box, BoxProps } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";

type StatisticProps = BoxProps & {
  title: string;
  value: string;
};

/**
 * Displays a statistic's title and value
 */
const Statistic: React.FC<StatisticProps> = ({
  title,
  value,
  ...restProps
}) => {
  return (
    <Box mr={4} textAlign="left" {...restProps}>
      <Text fontSize="sm" mb={2} color="lightgray">
        {title}
      </Text>
      <Heading size="lg">{value}</Heading>
    </Box>
  );
};

export default Statistic;
