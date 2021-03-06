import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

type CardProps = BoxProps & {
  variant?: string;
};

/**
 * A card component which can contain content. The default card style pairs
 * well against a "black" background, and the "light" variant pairs well
 * against the "lightmatte" background. See `theme.ts` for exact color
 * definitions.
 */
const Card: React.FC<CardProps> = ({ variant, onClick, ...restProps }) => {
  // See https://github.com/chakra-ui/chakra-ui/issues/2456 for more info
  const styles = useStyleConfig("Card", { variant });

  return (
    <Box
      __css={styles}
      borderRadius="2xl"
      padding={8}
      // Automatically make the cursor a pointer if `onClick` is set.
      cursor={!!onClick ? "pointer" : "default"}
      onClick={onClick}
      {...restProps}
    />
  );
};

export default Card;
export type { CardProps };
