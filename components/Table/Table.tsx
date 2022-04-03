import {
  Table as ChakraTable,
  TableProps as ChakraTableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Card from "../Card";
import Text from "../Text";

type Row = {
  /**
   * A unique key to be used as the React `key` on the `Tr`s.
   */
  key: string;
  /**
   * A list of ReactNodes to be rendered in `Td`s.
   */
  items: React.ReactNode[];
};

type TableProps = ChakraTableProps & {
  /**
   * A list of headings for the table.
   */
  headings: string[];
  /**
   * A list of rows for the table.
   */
  rows: Row[];
};

/**
 * A table component based off of Chakra's `Table`.
 */
const Table: React.FC<TableProps> = ({ headings, rows, ...restProps }) => {
  return (
    <Card variant="ghost" p={0}>
      <ChakraTable {...restProps}>
        <Thead>
          <Tr>
            {headings.map((heading) => (
              <Th
                key={heading}
                borderBottomColor="darkgray"
                borderBottomWidth={2}
                py={6}
              >
                <Text
                  fontWeight={400}
                  variant="secondary"
                  textTransform="none"
                  fontSize="md"
                  letterSpacing={0}
                >
                  {heading}
                </Text>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row) => (
            <Tr key={row.key}>
              {row.items.map((item, index) => (
                // `index` is safe to use here as long as the number of items
                // in the row and the order of the items doesn't change.
                // This is reasonable since we probably won't be adding/removing
                // headings to the table after it's created?
                <Td key={`${row.key}-${index}`} py={8}>
                  {item}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </Card>
  );
};

export default Table;
export type { TableProps };
