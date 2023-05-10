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
  follower: User;
  followedBack: boolean;
  following: User[];
  setFollowing: Dispatch<SetStateAction<User[]>>;
};

export default function FollowBack({
  currentUser,
  follower,
  followedBack,
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
        follower.followers.includes(data.id)
      );
      setOtherFollowers(temp.map((data) => convertToUser(data.data())));
    });
    return unsubscribe;
  }, [follower]);

  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const updateFollowed = () => {
    let temp: User[];
    //Unfollow
    if (followedBack) {
      //update Self
      temp = [...following];
      const index = temp.findIndex((data) => data.id == follower.id);
      temp.splice(index, 1);
      setFollowing(temp);
      updateDoc(doc(db, "users", currentUser.id), {
        following: temp.map((data) => data.id),
      });
      //
      //update other
      const otherTemp = [...otherFollowers];
      const otherIndex = otherTemp.findIndex(
        (data) => data.id == currentUser.id
      );
      otherTemp.splice(otherIndex, 1);
      setOtherFollowers(otherTemp);
      updateDoc(doc(db, "users", follower.id), {
        followers: otherTemp.map((data) => data.id),
      });
    }
    //Follow
    else {
      temp = [...following, follower];
      setFollowing(temp);
      updateDoc(doc(db, "users", currentUser.id), {
        following: temp.map((data) => data.id),
      });
      //update other
      const otherTemp = [...otherFollowers, currentUser];
      setOtherFollowers(otherTemp);
      updateDoc(doc(db, "users", follower.id), {
        followers: otherTemp.map((data) => data.id),
      });
    }
  };

  return (
    <>
      <Button
        variant="solid"
        my="2px"
        key={follower.name + "FollowButton"}
        colorScheme={followedBack ? "red" : "twitter"}
        onClick={() => {
          if (followedBack) onOpen();
          else updateFollowed();
        }}
      >
        {followedBack ? "Unfollow" : "Follow"}
      </Button>
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
              UnFollow
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to unfollow &apos;{follower.name}&apos; ?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                onClick={() => {
                  updateFollowed();
                  onClose();
                }}
                colorScheme="red"
              >
                Unfollow
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
