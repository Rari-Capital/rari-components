import {
  Table as ChakraTable,
  TableProps as ChakraTableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type Row = {
  key: string;
  data: string[];
};

type TableProps = ChakraTableProps & {
  headings: string[];
  rows: Row[];
};

/**
 * A table component based off of Chakra's `Table`.
 */
const Table: React.FC<TableProps> = ({ headings, rows, ...restProps }) => {
  return (
    <ChakraTable {...restProps}>
      <Thead>
        <Tr>
          {headings.map((heading) => (
            <Th key={heading}>{heading}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row) => (
          <Tr key={row.key}>
            {row.data.map((item) => (
              <Td key={`${row.key}-${item}`}>{item}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default Table;
