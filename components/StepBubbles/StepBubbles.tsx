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
   * Whether the bubble should show a spinner if its active.
   */
  spinner?: boolean;
  /**
   * If true represented step was completed.
   */
   complete: boolean;
};

const StepBubble: React.FC<StepBubbleProps> = ({ children, active, last, spinner, complete }) => {
  return (
    <Center>
      <Center
        background={complete ? "gray" : "primary"}
        height={12}
        width={12}
        borderRadius="50%"
        opacity={active ? 1 : 0.5}
      >
        {active && spinner ? <Spinner/> : children}
      </Center>
      {!last && <Box width={12} height="1px" background="primary" />}
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
};

/**
 * Used to denote steps in a process. Displays a series of spaced circles
 * connected by a line, with a single circle highlighted denoting an active
 * step.
 */
const StepBubbles: React.FC<StepBubblesProps> = ({ steps, activeIndex }) => {
  return (
    <Flex>
      {Array.from({ length: steps }).map((_, i) => (
        <StepBubble key={i} complete={i < activeIndex}  active={i === activeIndex} last={i === steps - 1} >
          <Text fontWeight={600}>{i + 1}</Text>
        </StepBubble>
      ))}
    </Flex>
  );
};

export default StepBubbles;
