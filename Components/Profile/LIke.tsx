import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { Dispatch, SetStateAction, useRef } from "react";
import { Song } from "../../types";
import { db } from "../../util/firebase";

type Props = {
  song: Song;
  currentUserId: string;
  likedSongs: Song[];
  setLikedSongs: Dispatch<SetStateAction<Song[]>>;
};

export default function Like({
  song,
  currentUserId,
  likedSongs,
  setLikedSongs,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = useRef();

  const unlike = () => {
    const temp: Song[] = likedSongs;
    song.likes--;
    const index = temp.findIndex((data) => data.id == song.id);
    temp.splice(index, 1);
    setLikedSongs(temp);
    updateDoc(doc(db, "songs", song.id), { likes: song.likes });
    updateDoc(doc(db, "users", currentUserId), {
      likedSongs: temp.map((data) => data.id),
    });
  };

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        my="2px"
        onClick={onOpen}
        key={song.name + "LikesProfileSectionLikeButton"}
      >
        <Icon viewBox="0 0 128 128" color="red.500">
          <path
            fill="currentColor"
            d="M25.3 13.4C8.2 19-1.9 35.1 1.2 52c3.1 17.3 24.4 40.3 55.1 59.4l7.7 4.8 7.6-4.7c31.7-19.8 51.9-41.6 55.2-59.5 2.7-14.9-5.4-30.2-19.6-36.8-4.8-2.3-7.1-2.7-14.2-2.7-10.4 0-17.4 2.9-24.5 10l-4.7 4.6-3.4-4c-5.2-6-14.7-10.3-23.7-10.7-4.3-.3-8.9.2-11.4 1z"
          />
        </Icon>
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Unlike Song
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to unlike &apos;{song.name}&apos; ?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                onClick={() => {
                  unlike();
                  onClose();
                }}
                colorScheme="red"
              >
                Unlike
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
