import { InfoIcon } from "@chakra-ui/icons";
import { Box, Flex, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import Card from "../Card";
import Text from "../Text";
import Tooltip from "../Tooltip";

type Statistic = [title: string, value: React.ReactNode, tooltip?: string];

const DIVIDER = "DIVIDER" as const;
type StatisticTableRow = Statistic | typeof DIVIDER;

type StatisticsTableProps = React.ComponentProps<typeof Card> & {
  /**
   * Statistics to display in the table. Example:
   *
   * ```ts
   * const statistics = [
   *   ["Supply Balance", "$23,456", "How much you're supplying"],
   *   StatisticsTable.DIVIDER,
   *   ["Borrow Limit", "$200"],
   * ]
   * ```
   */
  statistics: StatisticTableRow[];
};

/**
 * A component that displays a two-column table of statistics — statistic titles
 * on the left column, statistic values on the right column.
 */
const StatisticsTable: React.FC<StatisticsTableProps> & {
  DIVIDER: typeof DIVIDER;
} = ({ statistics, ...restProps }) => {
  return (
    <Card borderWidth={1} {...restProps}>
      <Table>
        <Tbody w="100%">
          {statistics.map((statistic, i) => {
            if (statistic === DIVIDER) {
              return (
                <>
                  <Tr key={`divider-${i}-1`}>
                    <Td px={0} pt={4} pb={0}>
                      <Box
                        borderBottomColor="darkgray"
                        borderBottomWidth={1}
                        opacity={0.5}
                      />
                    </Td>
                    <Td px={0} pt={4} pb={0}>
                      <Box
                        borderBottomColor="darkgray"
                        borderBottomWidth={1}
                        opacity={0.5}
                      />
                    </Td>
                  </Tr>
                  <Tr key={`divider-${i}-2`}>
                    <Td pt={4} pb={0} />
                    <Td pt={4} pb={0} />
                  </Tr>
                </>
              );
            }
            const [title, value, tooltip] = statistic;
            return (
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
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
};

// Export the constant with the component for convenience
StatisticsTable.DIVIDER = DIVIDER;

export default StatisticsTable;
export type { StatisticsTableProps };
