import { onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../../Components/auth/AuthUserProvider";
import { User } from "../../types";
import { usersCollectionRef } from "../../util/firebase";
import Options from "./ProfileOptions";
import UserCard from "./UserCard";

export default function ProfileContentsLayout() {
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    const convertToUser = (data: any) => {
      return { ...(data as User) };
    };

    const unsubscribe = onSnapshot(
      query(usersCollectionRef),
      (querySnapShot) => {
        const temp = querySnapShot.docs.find(
          (data) => data.data().id == user?.uid
        );
        const tempUser = convertToUser(temp?.data());
        setCurrentUser(tempUser);
      }
    );
    return unsubscribe;
  }, [user]);

  const defaultUser:User = {
    name:'default',
    likedSongs:[],
    likes: 0,
    id: 'default',
    uploads: [],
    followers: [],
    following:[], 
}

  return (
    <>
      <UserCard currentUser={currentUser} />
      <Options currentUser={currentUser? currentUser: defaultUser} />
      
    </>
  );
}
