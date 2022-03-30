import {
  Tabs as ChakraTabs,
  TabsProps as ChakraTabsProps,
} from "@chakra-ui/react";

type TabsProps = ChakraTabsProps;

/**
 * A wrapper around Chakra's Tab with Rari-specific tab styling.
 */
const Tabs: React.FC<TabsProps> = (props) => {
  return <ChakraTabs {...props} />;
};

export default Tabs;
export type { TabsProps };
