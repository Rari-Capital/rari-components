import {
  Tooltip as ChakraTooltip,
  TooltipProps as ChakraTooltipProps,
} from "@chakra-ui/react";

type TooltipProps = ChakraTooltipProps;

const Tooltip: React.FC<TooltipProps> = ({
  placement = "top",
  hasArrow = true,
  ...restProps
}) => {
  return (
    <ChakraTooltip placement={placement} hasArrow={hasArrow} {...restProps} />
  );
};

export default Tooltip;
export type { TooltipProps };
