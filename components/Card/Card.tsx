import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

type CardProps = BoxProps & {
  variant: string;
};

const Card: React.FC<CardProps> = ({ variant, ...restProps }) => {
  // See https://github.com/chakra-ui/chakra-ui/issues/2456 for more info
  const styles = useStyleConfig("Card", { variant });

  return <Box __css={styles} borderRadius="md" padding={6} {...restProps} />;
};

export default Card;
