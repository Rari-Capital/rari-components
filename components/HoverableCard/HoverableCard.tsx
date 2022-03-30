import { useState } from "react";
import Card from "../Card";

type CardProps = React.ComponentProps<typeof Card>;

type HoverableCardProps = Omit<CardProps, "hovered"> & {
  children(hovered: boolean): CardProps["children"];
};

/**
 * Extension to the `Card` component which passes a `hovered` state to
 * its children. Example:
 *
 * ```ts
 * <HoverableCard>
 *  {(hovered) => <Text>{hovered ? "Hovered" : "Not Hovered"}</Text>}
 * </HoverableCard>
 * ```
 */
const HoverableCard: React.FC<HoverableCardProps> = ({
  children,
  ...restProps
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...restProps}
    >
      {children(hovered)}
    </Card>
  );
};

export default HoverableCard;
export type { HoverableCardProps };
