import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
  Flex,
} from "@chakra-ui/react";

type BadgeProps = ChakraBadgeProps;

/**
 * A badge component which can highlight another component.
 */
const Badge: React.FC<BadgeProps> = ({ variant, children, ...restProps }) => {
  return (
    <ChakraBadge
      position="relative"
      // Create an `::after` pseudo-element that overlays the background with
      // a half-transparent black. This allows us to "darken" the background
      // color without needing to know the original color.
      _after={{
        content: `''`,
        position: "absolute",
        zIndex: 0,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
      }}
      // Match ::after border-radius with parent border-radius
      overflow="hidden"
      backgroundColor={variant}
      color={variant}
      fontWeight={600}
      borderRadius="lg"
      {...restProps}
    >
      <Flex
        position="relative"
        height="100%"
        width="100%"
        zIndex={1}
        padding={1}
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Flex>
    </ChakraBadge>
  );
};

export default Badge;
export type { BadgeProps };
