import {
  BackgroundProps,
  Box,
  Center,
  Flex,
  LayoutProps,
  Spinner,
} from "@chakra-ui/react";
import Text from "../Text";

type StepBubbleProps = {
  /**
   * Whether this bubble is `active` and should be shown at full opacity.
   */
  active?: boolean;
  /**
   * Whether this bubble is the last in line and should not have a connector.
   */
  last?: boolean;
  /**
   * The background color for the bubble.
   */
  background: BackgroundProps["background"];
  /**
   * The size of the bubbles.
   */
  size: LayoutProps["boxSize"];
};

const StepBubble: React.FC<StepBubbleProps> = ({
  children,
  active,
  last,
  background,
  size,
}) => {
  return (
    <Center>
      <Center
        background={background}
        boxSize={size}
        borderRadius="50%"
        opacity={active ? 1 : 0.5}
      >
        {children}
      </Center>
      {!last && <Box width={size} height="1px" background={background} />}
    </Center>
  );
};

type StepBubblesProps = {
  /**
   * The number of steps to display.
   */
  steps: number;
  /**
   * The 0-based index of the active step (e.g. `0` for Step 1, `1` for Step 2,
   * etc.).
   */
  activeIndex: number;
  /**
   * Whether to display a loading state (shows a spinner on the currently active
   * step).
   */
  loading?: boolean;
  /**
   * The size of the bubbles.
   */
  size?: LayoutProps["boxSize"];
  /**
   * The background color of steps bubbles for steps that are yet to be
   * completed (completed steps have a gray background).
   */
  background?: BackgroundProps["background"];
};

/**
 * Used to denote steps in a process. Displays a series of spaced circles
 * connected by a line, with a single circle highlighted denoting an active
 * step.
 */
const StepBubbles: React.FC<StepBubblesProps> = ({
  steps,
  activeIndex,
  loading,
  size = 12,
  background = "primary",
}) => {
  return (
    <Flex>
      {Array.from({ length: steps }).map((_, i) => {
        const active = i === activeIndex;

        return (
          <StepBubble
            key={i}
            // Show a gray background if the step was completed
            background={i < activeIndex ? "mediumgray" : background}
            active={active}
            last={i === steps - 1}
            size={size}
          >
            {active && loading ? (
              <Spinner />
            ) : (
              <Text fontWeight={600} color="white">
                {i + 1}
              </Text>
            )}
          </StepBubble>
        );
      })}
    </Flex>
  );
};

export default StepBubbles;
