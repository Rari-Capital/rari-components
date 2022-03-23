import {
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalProps as ChakraModalProps,
} from "@chakra-ui/react";

import Button from "../Button";

type ButtonProps = React.ComponentProps<typeof Button>;

type ModalProps = ChakraModalProps & {
  buttons: ButtonProps[];
};

/**
 * A modal component based off of Chakra's `Modal`.
 */
const Modal: React.FC<ModalProps> = ({ buttons, ...restProps }) => {
  return (
    <ChakraModal {...restProps}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody></ModalBody>
        <ModalFooter>
          {buttons.map((buttonProps, i) => (
            <Button key={i} {...buttonProps} />
          ))}
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
