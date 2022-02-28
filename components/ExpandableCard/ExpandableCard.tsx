import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  IconButton,
  useStyleConfig,
} from "@chakra-ui/react";
import { Fragment } from "react";

import Card from "../Card/Card";

type ExpandableCardProps = React.ComponentProps<typeof Card> & {
  expandableChildren: React.ReactNode;
  /**
   * Whether this card is wrapped by a Chakra `<Accordion />` (`true`) or is
   * standalone (`false`).
   */
  inAccordion?: boolean;
};

/**
 * A card component which can be expanded to reveal more content. Based on
 * Chakra's `Accordion` component.
 */
const ExpandableCard: React.FC<ExpandableCardProps> = ({
  children,
  expandableChildren,
  variant,
  inAccordion,
  ...restProps
}) => {
  const { color } = useStyleConfig("Card", { variant }) as { color: string };

  const Wrapper: React.FC = inAccordion
    ? Fragment
    : (props) => <Accordion allowToggle {...props} />;

  return (
    <Wrapper>
      <AccordionItem borderY="none">
        {({ isExpanded }) => (
          <Card variant={variant} {...restProps}>
            <AccordionButton
              padding={0}
              _hover={{ background: "transparent" }}
              _focus={{
                outline: "none",
              }}
            >
              <Flex
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Box flex={1} textAlign="left">
                  {children}
                </Box>
                <IconButton
                  aria-label="toggle"
                  _focus={{
                    outline: "none",
                  }}
                  bg="transparent"
                  _hover={{
                    bg: "transparent",
                  }}
                  _active={{
                    bg: "transparent",
                  }}
                  color={color}
                  icon={isExpanded ? <TriangleUpIcon /> : <TriangleDownIcon />}
                />
              </Flex>
            </AccordionButton>
            <AccordionPanel padding={0}>
              <Box paddingY={8}>
                <Divider borderColor={color} opacity={0.1} />
              </Box>
              {expandableChildren}
            </AccordionPanel>
          </Card>
        )}
      </AccordionItem>
    </Wrapper>
  );
};

export default ExpandableCard;
