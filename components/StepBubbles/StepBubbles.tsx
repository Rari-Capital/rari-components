import { Box, Center, Flex, Spinner } from "@chakra-ui/react";
import Text from "../Text/Text";

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
  background: string;
};

const StepBubble: React.FC<StepBubbleProps> = ({
  children,
  active,
  last,
  background,
}) => {
  return (
    <Center>
      <Center
        background={background}
        height={12}
        width={12}
        borderRadius="50%"
        opacity={active ? 1 : 0.5}
      >
        {children}
      </Center>
      {!last && <Box width={12} height="1px" background={background} />}
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
}) => {
  return (
    <Flex>
      {Array.from({ length: steps }).map((_, i) => {
        const active = i === activeIndex;

        return (
          <StepBubble
            key={i}
            // Show a gray background if the step was completed
            background={i < activeIndex ? "gray" : "primary"}
            active={active}
            last={i === steps - 1}
          >
            {active && loading ? (
              <Spinner />
            ) : (
              <Text fontWeight={600}>{i + 1}</Text>
            )}
          </StepBubble>
        );
      })}
    </Flex>
  );
};

export default StepBubbles;
