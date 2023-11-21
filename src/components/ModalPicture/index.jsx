"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

const ModalPicture = ({ imageSrc = "", imageTitle = "404 image" }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} as="div" className="h-32">
        <Image
          src={imageSrc}
          alt={imageTitle}
          width={150}
          height={100}
          className="object-cover w-auto h-auto"
        />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Image
                  src={imageSrc}
                  alt={imageTitle}
                  width={100}
                  height={50}
                  className="w-auto h-auto object-cover mt-7"
                />
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

export default ModalPicture;
