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
import { doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { User } from "../../../types";
import { db, usersCollectionRef } from "../../../util/firebase";

type Props = {
  currentUser: User;
  followee: User;
  following: User[];
  setFollowing: Dispatch<SetStateAction<User[]>>;
};

export default function UnFollow({
  currentUser,
  followee,
  following,
  setFollowing,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [otherFollowers, setOtherFollowers] = useState<User[]>([]);

  useEffect(() => {
    const convertToUser = (data: any) => {
      return { ...(data as User) };
    };
    const unsubscribe = onSnapshot(query(usersCollectionRef), (qS) => {
      const temp = qS.docs.filter((data) =>
        followee.followers.includes(data.id)
      );
      setOtherFollowers(temp.map((data) => convertToUser(data.data())));
    });
    return unsubscribe;
  }, [followee]);

  const cancelRef = useRef();

  const unfollow = () => {
    const temp = [...following];
    const otherTemp = [...otherFollowers];

    const index = temp.findIndex((data) => data.id == followee.id);
    const otherIndex = otherTemp.findIndex((data) => data.id == currentUser.id);

    temp.splice(index, 1);
    otherTemp.splice(otherIndex, 1);

    setFollowing(temp);
    setOtherFollowers(otherTemp);

    updateDoc(doc(db, "users", currentUser.id), {
      following: temp.map((data) => data.id),
    });
    updateDoc(doc(db, "users", followee.id), {
      followers: otherTemp.map((data) => data.id),
    });
  };

  return (
    <>
      <Button
        variant="solid"
        my="2px"
        key={followee.name + "UnfollowButton"}
        colorScheme="red"
        onClick={onOpen}
      >
        Unfollow
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              UnFollow
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to unfollow &apos;{followee.name}&apos; ?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                onClick={() => {
                  unfollow();
                  onClose();
                }}
                colorScheme="red"
              >
                Unfollow
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
