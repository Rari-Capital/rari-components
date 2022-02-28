import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

type CardProps = BoxProps & {
  variant?: string;
};

/**
 * A card component which can contain content. The default card style pairs
 * well against a "darkmatte" background, and the "light" variant pairs well
 * against the "lightmatte" background. See `theme.ts` for exact color
 * definitions.
 */
const Card: React.FC<CardProps> = ({ variant, ...restProps }) => {
  // See https://github.com/chakra-ui/chakra-ui/issues/2456 for more info
  const styles = useStyleConfig("Card", { variant });

  return <Box __css={styles} borderRadius="md" padding={8} {...restProps} />;
};

export default Card;
