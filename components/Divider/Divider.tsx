import {
  Divider as ChakraDivider,
  DividerProps as ChakraDividerProps,
} from "@chakra-ui/react";

type DividerProps = ChakraDividerProps;

/**
 * A basic Divider component.
 */
const Divider: React.FC<DividerProps> = (props) => {
  return <ChakraDivider {...props} />;
};

export default Divider;
export type { DividerProps };
