import {
  Table,
  TableContainer,
  Tbody,
  Thead,
  Tr,
  Td,
  Th,
  Center,
} from "@chakra-ui/react";
import { onSnapshot, query } from "firebase/firestore";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { User } from "../../../types";
import { usersCollectionRef } from "../../../util/firebase";
import FollowBack from "./FollowBack";

type Prop = {
  currentUser: User;
};

const wrapFollower = (
  follower: User,
  currentUser: User,
  following: User[],
  setFollowing: Dispatch<SetStateAction<User[]>>
) => {
  const followedBack = following.some((data) => data.id === follower.id);

  return (
    <Tr key={follower.id + "FollowersProfileSection"}>
      <Td>{follower.name}</Td>
      <Td>
        <Center>{follower.uploads.length}</Center>
      </Td>
      <Td>
        <Center>{follower.followers.length}</Center>
      </Td>
      <Td>
        <Center>{follower.following.length}</Center>
      </Td>
      <Td>
        <FollowBack
          currentUser={currentUser}
          followedBack={followedBack}
          follower={follower}
          setFollowing={setFollowing}
          following={following}
        />
      </Td>
    </Tr>
  );
};

export default function Followers({ currentUser }: Prop) {
  const [followers, setFollowers] = useState<User[]>([]);
  const [following, setFollowing] = useState<User[]>([]);

  useEffect(() => {
    const convertToUser = (data: any) => {
      return { ...(data as User) };
    };
    const unsubscribe = onSnapshot(query(usersCollectionRef), (qS) => {
      const tempFollowers = qS.docs.filter((data) =>
        currentUser.followers.includes(data.id)
      );
      const tempFollowing = qS.docs.filter((data) =>
        currentUser.following.includes(data.id)
      );
      setFollowers(tempFollowers.map((data) => convertToUser(data.data())));
      setFollowing(tempFollowing.map((data) => convertToUser(data.data())));
    });
    return unsubscribe;
  }, [currentUser]);

  return (
    <>
      <TableContainer w="90%">
        <Table variant="striped" size="lg">
          <Thead>
            <Tr>
              <Th>Follower </Th>
              <Th>
                <Center>Uploads </Center>
              </Th>
              <Th>
                <Center>Followers </Center>
              </Th>
              <Th>
                <Center>Following</Center>{" "}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {followers.map((data) =>
              wrapFollower(data, currentUser, following, setFollowing)
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
