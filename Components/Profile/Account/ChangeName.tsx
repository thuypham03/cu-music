import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  HStack,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { useRef, useState } from "react";
import { User } from "../../../types";
import { db } from "../../../util/firebase";

type Prop = {
  currentUser: User;
};

export default function ChangeName({ currentUser }: Prop) {
  const [newName, setNewName] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const change = () => {
    updateDoc(doc(db, "users", currentUser.id), { name: newName.trim() });
    setNewName("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onOpen();
        }}
      >
        <HStack>
          <Text
            width="45%"
            fontSize="lg"
            mr="1.5"
            textColor="#006AFF"
          >
            {" "}
            Update Name
          </Text>
          <Input
            size="lg"
            value={newName}
            type="text"
            placeholder="New Name"
            onChange={(e) => {
              setNewName(e.target.value);
            }}
            required
          ></Input>
          <Button
            variant="solid"
            colorScheme="messenger"
            type="submit"
            width="20%"
          >
            Save
          </Button>
        </HStack>
      </form>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Change Name</AlertDialogHeader>
            <AlertDialogBody>
              Update name from &apos;{currentUser.name}&apos; to &apos;{newName}
              &apos; ?{" "}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                onClick={() => {
                  change();
                  onClose();
                }}
                colorScheme="twitter"
              >
                Update
              </Button>
              <Button
                ref={cancelRef}
                onClick={onClose}
                ml={3}
              >
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
