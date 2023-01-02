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
import { useAuth } from "../../auth/AuthUserProvider";
import { FirebaseError } from "firebase/app";

type Props = {
  currentUser: User;
};

export default function DeleteAccount({ currentUser }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  // to delete the user
  const { user } = useAuth();

  const delAccount = () => {
    deleteDoc(doc(db, "users", currentUser.id))
      .then(() => {
        try {
          user?.delete();
        } catch (err) {
          if (err instanceof FirebaseError) {
            alert("You need to have signed in recently to delete your account");
            return;
          } else throw err;
        }
      })
      .then(() => router.push("/"));
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
