import { isFunction, isNil, isObject } from "lodash";
import React from "react";
import {
  Modal as ChakraModal,
  ModalProps as ChakraModalProps,
  Flex,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Button from "../Button";
import Heading from "../Heading";
import Progress from "../Progress";
import StepBubbles from "../StepBubbles";
import Text from "../Text";

type ButtonProps = React.ComponentProps<typeof Button>;
type ModalStepBubblesProp = Omit<
  React.ComponentProps<typeof StepBubbles>,
  "size"
>;

type ModalProps<Ctx> = Omit<ChakraModalProps, "children"> & {
  /**
   * Context object that can be passed to the `Modal`'s props. Based on
   * `react-navigation`'s `Screen` `options` API, which can take a function if
   * the consumer wants to update props conditionally based on the context.
   */
  ctx: Ctx;
  /**
   * The title of the modal.
   */
  title?: string | ((ctx: Ctx) => string);
  /**
   * The subtitle of the modal. Displayed below the title. If no `title` is
   * set, the subtitle is not shown either.
   */
  subtitle?: string | ((ctx: Ctx) => string);
  /**
   * A list of buttons that should be shown at the bottom of the modal. To
   * handle click events, use the `onClickButton` prop.
   */
  buttons?: ButtonProps[] | ((ctx: Ctx) => ButtonProps[]);
  /**
   * If set, displays a small progress bar at the top of the modal. If unset,
   * hides the progress bar.
   */
  progressValue?: number | ((ctx: Ctx) => number);
  /**
   * If not `undefined`, displays a `StepBubbles` component below the buttons
   * with the given props. If `undefined`, nothing is shown.
   */
  stepBubbles?: ModalStepBubblesProp | ((ctx: Ctx) => ModalStepBubblesProp);
  /**
   * Children (i.e. content) for the `Modal`.
   */
  children: React.ReactNode | ((ctx: Ctx) => React.ReactNode);
};

/**
 * A modal component based off of Chakra's `Modal`.
 */
function Modal<Ctx>({
  ctx,
  title,
  subtitle,
  progressValue = 0,
  buttons = [],
  children,
  onClose,
  stepBubbles,
  ...restProps
}: ModalProps<Ctx>): ReturnType<React.FC> {
  return (
    <ChakraModal onClose={onClose} {...restProps}>
      <ModalOverlay />
      <ModalContent background="cardmatte" color="white">
        {/* `progressValue &&` doesn't work here because `0` is falsy */}
        {typeof progressValue !== "undefined" && (
          <Progress
            barVariant="neutral"
            hideLabel
            value={
              isFunction(progressValue) ? progressValue(ctx) : progressValue
            }
            height={1}
            mb={4}
          />
        )}
        {!!title && (
          <ModalHeader>
            <Heading>{isFunction(title) ? title(ctx) : title}</Heading>
            <Text variant="secondary" fontWeight={400} fontSize="md" mt={2}>
              {isFunction(subtitle) ? subtitle(ctx) : subtitle}
            </Text>
          </ModalHeader>
        )}
        {/*
         * If no `title` is set, the `ModalBody` needs to have its own
         * `margin-top`.
         */}
        <ModalBody mt={!!title ? 0 : 4}>
          {isFunction(children) ? children(ctx) : children}
        </ModalBody>
        <ModalFooter flexDirection="column" alignItems="stretch">
          <Flex>
            {(isFunction(buttons) ? buttons(ctx) : buttons).map(
              (buttonProps, i) => {
                const { children } = buttonProps;

                // This should generate a sufficiently unique key to avoid weird
                // style changes when switching out buttons.
                let key;
                if (isNil(children)) {
                  key = "nil";
                } else if (!isObject(children)) {
                  key = children.toString();
                } else {
                  key = Object.values(children)
                    // Symbols cannot be converted to strings
                    .filter((value) => typeof value !== "symbol")
                    // Just get the first five properties to ensure keys aren't
                    // excessively long.
                    .slice(0, 5)
                    .map((value) => `${value}`)
                    .join(",");
                }

                return <Button key={key} py={6} flex={1} {...buttonProps} />;
              }
            )}
          </Flex>
          {!!stepBubbles && (
            <Flex
              justifyContent="center"
              flex={1}
              mt={buttons.length > 0 ? 8 : 4}
            >
              <StepBubbles
                size={8}
                {...(isFunction(stepBubbles) ? stepBubbles(ctx) : stepBubbles)}
              />
            </Flex>
          )}
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
}

export default Modal;
export type { ModalProps };
