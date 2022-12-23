import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { deleteDoc, doc } from "firebase/firestore";
import { useRef } from "react";
import { User } from "../../../types";
import { db } from "../../../util/firebase";
import router from "next/router";

type Props = {
  currentUser: User;
};

export default function DeleteAccount({ currentUser }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const delAccount = () => {
    deleteDoc(doc(db, "users", currentUser.id));
    router.push("/");
  };

  return (
    <>
      <Button
        variant="solid"
        my="2px"
        key={currentUser.name + "DeleteAccountButton"}
        colorScheme="red"
        onClick={onOpen}
      >
        Delete Account
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Account
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                onClick={() => {
                  onClose();
                  delAccount();
                }}
                colorScheme="red"
              >
                Delete Account
              </Button>
              <Button ref={cancelRef} onClick={onClose} ml={3}>
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
