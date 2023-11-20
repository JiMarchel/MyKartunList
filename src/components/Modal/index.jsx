"use client";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Divider,
} from "@nextui-org/react";

const ModalMoreInfo = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} variant="ghost" color="primary">
        More information
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="outside"
      >
        <ModalContent className="text-primary-800">
          {(onClose) => (
            <>
              <ModalHeader>Information</ModalHeader>
              <Divider />
              <ModalBody>
                <p>{props.title}</p>
                <p>{props.type}</p>
                <p>{props.episodes}</p>
                <p>{props.status}</p>
                <p>{props.aired}</p>
                <p>{props.genres}</p>
                <p>{props.theme}</p>
                <p>{props.demographics}</p>
                <p>{props.studios}</p>
                <p>{props.producers}</p>
                <p>{props.duration}</p>
                <p>{props.rating}</p>
                <p>{props.broadcast}</p>
                <p>{props.licensors}</p>
                <p>{props.source}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalMoreInfo;
