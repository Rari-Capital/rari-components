import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
  Box,
} from "@chakra-ui/react";

type BadgeProps = ChakraBadgeProps;

const Badge: React.FC<BadgeProps> = ({ variant, children, ...restProps }) => {
  return (
    <ChakraBadge
      position="relative"
      // The prop darkens the background without needing to know the original
      // color
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
      <Box position="relative" zIndex={1} padding={1}>
        {children}
      </Box>
    </ChakraBadge>
  );
};

export default Badge;
