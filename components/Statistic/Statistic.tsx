import { isString } from "lodash";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Flex,
  Heading,
  Text,
  useStyleConfig,
} from "@chakra-ui/react";
import Tooltip from "../Tooltip";

type StatisticProps = BoxProps & {
  title: string;
  tooltip?: string;
  loading?: boolean;
  value: React.ReactNode;
  secondaryValue?: string;
  variant?: string;
};

/**
 * A component which displays a statistic's title (smaller text) and value
 * (larger text).
 */
const Statistic: React.FC<StatisticProps> = ({
  title,
  tooltip,
  loading = false,
  value,
  secondaryValue,
  variant,
  ...restProps
}) => {
  // See https://github.com/chakra-ui/chakra-ui/issues/2456 for more info
  const { color } = useStyleConfig("Statistic", { variant }) as {
    color: string;
  };

  return (
    <Box mr={4} textAlign="left" {...restProps}>
      <Flex alignItems="center" mb={2} opacity={0.5}>
        <Text fontSize="sm" color={color}>
          {title}
        </Text>
        {tooltip && (
          <Tooltip label={tooltip}>
            <InfoOutlineIcon boxSize={4} ml={2} />
          </Tooltip>
        )}
      </Flex>
      {isString(value) ? (
        <Heading size="lg" color={color}>
          {value}
        </Heading>
      ) : (
        value
      )}
      {!!secondaryValue && (
        <Text variant="secondary" mt={2}>
          {secondaryValue}
        </Text>
      )}
    </Box>
  );
};

export default Statistic;
export type { StatisticProps };
