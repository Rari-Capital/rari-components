import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Card, { CardProps } from "../Card";
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

type TableProps = CardProps & {
  /**
   * A list of headings for the table. Use a blank string for an empty heading.
   * (Useful if you want to put buttons, etc. in a row without a heading).
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
    <Card variant="ghost" p={0} overflowX="auto" {...restProps}>
      <ChakraTable>
        <Thead>
          <Tr>
            {headings.map((heading, index) => (
              <Th
                // If the heading is an empty string, fall back on using the
                // index. This should be reasonable since headings probably
                // won't be reordered after the table is created?
                key={heading || index}
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
