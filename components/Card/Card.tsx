import { Box, BoxProps } from "@chakra-ui/react";

const Card: React.FC<BoxProps> = (props) => {
  return (
    <Box backgroundColor="matte" borderRadius="md" padding={6} {...props} />
  );
};

export default Card;
