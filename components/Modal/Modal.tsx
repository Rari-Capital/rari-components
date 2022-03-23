import {
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps as ChakraModalProps,
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
   * A list of buttons that should be shown at the bottom of the modal.
   */
  buttons?: ButtonProps[];
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
  children,
  onClose,
  ...restProps
}) => {
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
          {buttons.map((buttonProps, i) => (
            <Button key={i} flex={1} {...buttonProps} />
          ))}
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
