import { isBoolean, isNil, isNumber, isObject, isString } from "lodash";
import { useMemo } from "react";
import {
  Modal as ChakraModal,
  ModalProps as ChakraModalProps,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Button from "../Button";
import Heading from "../Heading";
import Progress from "../Progress";
import Text from "../Text";

type ButtonProps = React.ComponentProps<typeof Button>;

type ModalProps = ChakraModalProps & {
  /**
   * The title of the modal.
   */
  title?: string;
  /**
   * The subtitle of the modal. Displayed below the title. If no `title` is
   * set, the subtitle is not shown either.
   */
  subtitle?: string;
  /**
   * A list of buttons that should be shown at the bottom of the modal. To
   * handle click events, use the `onClickButton` prop.
   */
  buttons?: Omit<ButtonProps, "onClick">[];
  /**
   * An event handler that is called when a button is clicked. The handler
   * receives the index (in the `buttons` prop array) of the button that was
   * clicked.
   */
  onClickButton?(buttonIndex: number): void;
  /**
   * If set, displays a small progress bar at the top of the modal. If unset,
   * hides the progress bar.
   */
  progressValue?: number;
};

/**
 * A modal component based off of Chakra's `Modal`.
 */
const Modal: React.FC<ModalProps> = ({
  title,
  subtitle,
  progressValue = 0,
  buttons = [],
  onClickButton,
  children,
  onClose,
  ...restProps
}) => {
  // Create an `onClick` function for each index and wrap in `useMemo` so we
  // don't create new functions on every re-render.
  const onClicks = useMemo(() => {
    return buttons.map((_, i) =>
      !!onClickButton ? () => onClickButton(i) : undefined
    );
  }, [buttons, onClickButton]);

  return (
    <ChakraModal onClose={onClose} {...restProps}>
      <ModalOverlay />
      <ModalContent background="cardmatte" color="white">
        {/* `progressValue &&` doesn't work here because `0` is falsy */}
        {typeof progressValue !== "undefined" && (
          <Progress
            barVariant="neutral"
            hideLabel
            value={progressValue}
            height={1}
            mb={4}
          />
        )}
        {!!title && (
          <ModalHeader>
            <Heading>{title}</Heading>
            <Text variant="secondary" fontWeight={400} fontSize="sm" mt={2}>
              {subtitle}
            </Text>
          </ModalHeader>
        )}
        {/*
         * If no `title` is set, the `ModalBody` needs to have its own
         * `margin-top`.
         */}
        <ModalBody mt={!!title ? 0 : 4}>{children}</ModalBody>
        <ModalFooter alignItems="stretch" justifyContent="stretch">
          {buttons.map((buttonProps, i) => {
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

            return (
              <Button
                key={key}
                flex={1}
                onClick={onClicks[i]}
                {...buttonProps}
              />
            );
          })}
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
