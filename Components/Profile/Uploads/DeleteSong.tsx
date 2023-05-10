import { DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Dispatch, SetStateAction, useRef } from "react";
import { Song } from "../../../types";
import { db } from "../../../util/firebase";

type Props = {
  song: Song;
  currentUserId: string;
  uploads: Song[];
  setUploads: Dispatch<SetStateAction<Song[]>>;
};

export default function DeleteSong({
  song,
  currentUserId,
  uploads,
  setUploads,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const delSong = () => {
    deleteDoc(doc(db, "songs", song.id)); //delete song from database
    //delete songs from user uploads
    //local uploads
    const temp: Song[] = [...uploads];
    const index: number = temp.findIndex((data) => data.id == song.id);
    const tempUpload = temp.map((data) => data.id);
    temp.splice(index, 1);
    setUploads(temp);
    //update user database
    updateDoc(doc(db, "users", currentUserId), { uploads: tempUpload });
  };

  return (
    <>
      <IconButton
        variant="ghost"
        colorScheme="red"
        aria-label="delete song"
        icon={<DeleteIcon onClick={onOpen} />}
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
            >
              DeleteSong?
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete &apos;{song.name}&apos; ?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                onClick={() => {
                  delSong();
                  onClose();
                }}
                colorScheme="red"
              >
                Delete
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
