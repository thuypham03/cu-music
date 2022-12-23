import {
  Table,
  TableContainer,
  Tbody,
  Thead,
  Tr,
  Td,
  Link,
  Th,
} from "@chakra-ui/react";
import { onSnapshot, query } from "firebase/firestore";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { User, Song, PrimitiveSong } from "../../../types";
import { songsCollectionRef, usersCollectionRef } from "../../../util/firebase";
import out from "../../../Components/Sorter";
import Like from "./LIke";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const [Name, Artist, Genre, Uploader, Likes] = out;

type Prop = {
  currentUser: User;
};
const wrapSong = (
  song: Song,
  currentUserId: string,
  uploaders: User[],
  likedSongs: Song[],
  setLikedSongs: Dispatch<SetStateAction<Song[]>>
) => {
  const uploader = uploaders.find((data) => data.id === song.userId);

  return (
    <Tr key={song.name + "LikesProfileSection"}>
      <Td>
        <Link
          href={song.link}
          isExternal
          _hover={{ textDecoration: "underline", color: "blue" }}
        >
          {song.name} <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
        </Link>
      </Td>
      <Td>{song.artist}</Td>
      <Td>{song.genre}</Td>
      <Td>
        {song.userId === "Admin" ? "Admin" : uploader ? uploader.name : " "}
      </Td>
      <Td>
        <Like
          song={song}
          currentUserId={currentUserId}
          likedSongs={likedSongs}
          setLikedSongs={setLikedSongs}
        />
        {song.likes}
      </Td>
    </Tr>
  );
};

export default function LikedSongs({ currentUser }: Prop) {
  const [likedSongs, setLikedSongs] = useState<Song[]>([]);
  const [uploaders, setUploaders] = useState<User[]>([]);

  useEffect(() => {
    const convertToSong = (data: any, id: string) => {
      return { ...(data as PrimitiveSong), id };
    };

    const unsubscribe = onSnapshot(
      query(songsCollectionRef),
      (querySnapshot) => {
        const temp = querySnapshot.docs.filter((data) =>
          currentUser.likedSongs.includes(data.id)
        );
        setLikedSongs(temp.map((data) => convertToSong(data.data(), data.id)));
      }
    );
    return unsubscribe;
  }, [currentUser]);

  useEffect(() => {
    const convertToUser = (data: any) => {
      return { ...(data as User) };
    };
    const unsubscribe = onSnapshot(query(usersCollectionRef), (qS) => {
      setUploaders(qS.docs.map((data) => convertToUser(data.data())));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <TableContainer w="90%">
        <Table variant="striped" size={"lg"}>
          <Thead>
            <Tr key="ProileLikedSongsTableHead">
              <Th key="nameProileLikedSongsTableHead">
                Song{" "}
                <Name
                  listState={likedSongs}
                  setList={setLikedSongs}
                  reverse={false}
                />
              </Th>
              <Th key="artistProileLikedSongsTableHead">
                Artist{" "}
                <Artist
                  listState={likedSongs}
                  setList={setLikedSongs}
                  reverse={false}
                />
              </Th>
              <Th key="genreProileLikedSongsTableHead">
                Genre{" "}
                <Genre
                  listState={likedSongs}
                  setList={setLikedSongs}
                  reverse={false}
                />
              </Th>
              <Th key="uploaderProileLikedSongsTableHead">
                Uploaded by{" "}
                <Uploader
                  listState={likedSongs}
                  setList={setLikedSongs}
                  reverse={false}
                />
              </Th>
              <Th key="likesProileLikedSongsTableHead">
                Likes{" "}
                <Likes
                  listState={likedSongs}
                  setList={setLikedSongs}
                  reverse={false}
                />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {likedSongs.map((data) =>
              wrapSong(
                data,
                currentUser.id,
                uploaders,
                likedSongs,
                setLikedSongs
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
