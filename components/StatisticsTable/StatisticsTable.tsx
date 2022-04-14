import { InfoIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Flex, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import Card from "../Card";
import Text from "../Text";
import Tooltip from "../Tooltip";

type StatisticsTableProps = React.ComponentProps<typeof Card> & {
  statistics: [title: string, value: React.ReactNode, tooltip?: string][];
};

/**
 * A component that displays a two-column table of statistics — statistic titles
 * on the left column, statistic values on the right column.
 */
const StatisticsTable: React.FC<StatisticsTableProps> = ({
  statistics,
  ...restProps
}) => {
  return (
    <Card borderWidth={1} {...restProps}>
      <Table>
        <Tbody>
          {statistics.map(([title, value, tooltip]) => (
            <Tr
              key={title}
              _first={{
                td: {
                  paddingTop: 0,
                },
              }}
              _last={{
                td: {
                  paddingBottom: 0,
                },
              }}
            >
              <Td
                paddingX={0}
                paddingY={2}
                borderBottom="none"
                textAlign="left"
              >
                <Flex alignItems="center">
                  {tooltip && (
                    <Text variant="secondary" mr={2} mt={-1}>
                      <Tooltip label={tooltip}>
                        <InfoIcon />
                      </Tooltip>
                    </Text>
                  )}
                  <Text variant="secondary">{title}</Text>
                </Flex>
              </Td>
              <Td
                paddingX={0}
                paddingY={2}
                borderBottom="none"
                textAlign="right"
                fontWeight={600}
              >
                {value}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
};

export default StatisticsTable;
export type { StatisticsTableProps };
