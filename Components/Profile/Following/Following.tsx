import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
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
import UnFollow from "./Unfollow";

type Prop = {
  currentUser: User;
};

const wrapFollowing = (
  currentUser: User,
  followee: User,
  following: User[],
  setFollowing: Dispatch<SetStateAction<User[]>>
) => {
  const followsBack = followee.following.some(
    (data) => data === currentUser.id
  );

  return (
    <Tr key={followee.id + "FollowingProfileSection"}>
      <Td>{followee.name}</Td>
      <Td>
        <Center>{followee.uploads.length}</Center>
      </Td>
      <Td>
        <Center>{followee.followers.length}</Center>
      </Td>
      <Td>
        <Center>{followee.following.length}</Center>
      </Td>
      <Td>
        <Center>
          {followsBack ? (
            <CheckIcon color="green.500" />
          ) : (
            <CloseIcon color="red.500" />
          )}
        </Center>
      </Td>
      <Td>
        <UnFollow
          currentUser={currentUser}
          followee={followee}
          following={following}
          setFollowing={setFollowing}
        />
      </Td>
    </Tr>
  );
};

export default function Following({ currentUser }: Prop) {
  const [following, setFollowing] = useState<User[]>([]);

  useEffect(() => {
    const convertToUser = (data: any) => {
      return { ...(data as User) };
    };
    const unsubscribe = onSnapshot(query(usersCollectionRef), (qS) => {
      const temp = qS.docs.filter((data) =>
        currentUser.following.includes(data.id)
      );
      setFollowing(temp.map((data) => convertToUser(data.data())));
    });
    return unsubscribe;
  }, [currentUser]);

  return (
    <>
      <TableContainer w="90%">
        <Table variant="striped" size="lg">
          <Thead>
            <Tr key={"followingTableHeadRow"}>
              <Th>Following</Th>
              <Th>Uploads </Th>
              <Th>Followers </Th>
              <Th>Following </Th>
              <Th>Follows You</Th>
            </Tr>
          </Thead>
          <Tbody>
            {following.map((data) =>
              wrapFollowing(currentUser, data, following, setFollowing)
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
