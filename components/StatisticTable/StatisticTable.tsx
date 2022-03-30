import { Table, Tbody, Td, Tr } from "@chakra-ui/react";
import Card from "../Card";

type StatisticTableProps = React.ComponentProps<typeof Card> & {
  statistics: [title: string, value: string][];
};

/**
 * A component that displays a two-column table of statistics — statistic titles
 * on the left column, statistic values on the right column.
 */
const StatisticTable: React.FC<StatisticTableProps> = ({
  statistics,
  ...restProps
}) => {
  return (
    <Card borderWidth={1} {...restProps}>
      <Table>
        <Tbody>
          {statistics.map(([title, value]) => (
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
                {title}
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

export default StatisticTable;
export type { StatisticTableProps };
