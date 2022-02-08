import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";

const Button: React.FC<React.ComponentProps<typeof ChakraButton>> = (props) => {
  return <ChakraButton variant="default" {...props} />;
};

export default Button;
