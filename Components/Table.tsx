import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useState, useEffect, useRef } from "react";
import { PrimitiveSong, Song, User } from "../types";
import out from "./Sorter";
import Liking from "./Likes";
import { onSnapshot, query } from "firebase/firestore";
import { songsCollectionRef, usersCollectionRef } from "../util/firebase";
import { Dispatch, SetStateAction } from "react";
import { useAuth } from "./auth/AuthUserProvider";

const [Name, Artist, Genre, Uploader, Likes] = out;

/**
 * Fills out each row of the table with the songs.
 * Child component, `Liking`, handles liking songs with react
 * hooks and a reference to the current user id
 * @param song the Song occupying a row
 * @param userLikedSongs the list of songs the user likes. May be undefined
 * @param setUserLikedSongs setter for the user's liked songs
 * @param uploaders All uploaders of songs
 * @currentUserId the string id of the current user. May be undefined
 * @returns JSX Element wrapping for each song row.
 */
const WrapSong = (
  song: Song,
  userLikedSongs: string[] | undefined,
  setUserLikedSongs: Dispatch<SetStateAction<string[]>>,
  uploaders: User[],
  currentUserId: string | undefined
) => {
  //A reference object of the current user's liked songs needs to be used.
  //but that reference could be undefined. This makes sure the function
  //always has a list to work with.
  if (userLikedSongs === undefined) {
    userLikedSongs = [];
  }
  //similar to the explanation above but for currentUserId
  if (currentUserId === undefined) {
    currentUserId = "";
  }

  //Whether the song has been liked by the current user.
  //For use in the child component
  const liked = userLikedSongs.includes(song.id);
  //unpack song
  const { name, artist, genre, userId, link, likes } = song;

  //search for the user with the given id to set as uploader. Guaranteed to work
  //since only users can upload
  const uploader = uploaders.find((data) => data.id === userId);

  return (
    <Tr key={name + artist}>
      <Td>
        <Link
          href={link}
          isExternal
          _hover={{ color: "blue", textDecoration: "underline" }}
        >
          {name} <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
        </Link>
      </Td>
      <Td>{artist}</Td>
      <Td>{genre}</Td>
      <Td>{userId === "Admin" ? "Admin" : uploader?.name}</Td>
      <Td>
        <Liking
          song={song}
          liked={liked}
          userLikedSongs={userLikedSongs}
          setUserLikedSongs={setUserLikedSongs}
          currentUserId={currentUserId}
        />
        {likes}
      </Td>
    </Tr>
  );
};
/**
 * Component for the table on the main page.
 * @returns JSX Elements for the entire table
 */
const MyTable = () => {
  //User from Auth. to be used to grab current user's data
  const { user } = useAuth();
  //State for current user
  const [currentUser, setCurrentUser] = useState<User>();

  //the list of songs
  const [songList, setSongList] = useState<Song[]>([]);

  //for getting the uploader of a song
  const [uploaders, setUploaders] = useState<User[]>([]);

  //React hooks on current user's songlist for liking a song.
  const [userLikedSongs, setUserLikedSongs] = useState<string[]>([]);
  //Reference for current user's liked songs
  const userLikedRef = useRef<string[]>(); //Reference for current user's liked songs
  userLikedRef.current = userLikedSongs;

  //Used later on to prevent unneccessary re-rendering
  const [flag, setFlag] = useState<boolean>(false);

  //Get songs from database
  const converttoSong = (data: any, id: string) => {
    return { ...(data as PrimitiveSong), id: id };
  };
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(songsCollectionRef),
      (querySnapshot) => {
        if (!flag) {
          setSongList(
            querySnapshot.docs.map((data) =>
              converttoSong(data.data(), data.id)
            )
          );
        }
        setFlag(true);
      }
    );
    return unsubscribe;
  }, [flag]);

  //Get uploaders
  const converttoUser = (data: any) => {
    return { ...(data as User) };
  };
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(usersCollectionRef),
      (querySnapShot) => {
        setUploaders(
          querySnapShot.docs.map((data) => converttoUser(data.data()))
        );
      }
    );
    return unsubscribe;
  }, []);

  //Get current User and user's liked songs
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(usersCollectionRef),
      (querySnapShot) => {
        const temp = querySnapShot.docs.find(
          (data) => data.data().id == user?.uid
        );
        const tempUser = converttoUser(temp?.data());
        setCurrentUser(tempUser);
        setUserLikedSongs(tempUser.likedSongs);
      }
    );
    return unsubscribe;
  }, [user]);

  //reference for each song row after wrapping with JSX elements
  const wrapedSongsRef = useRef<JSX.Element[]>();
  //initial wrapping of song rows
  wrapedSongsRef.current = songList.map((data) =>
    WrapSong(
      data,
      userLikedRef.current,
      setUserLikedSongs,
      uploaders,
      currentUser?.id
    )
  );
  //for re-rendering when the song list(including its order), user's liked songs, uploaders
  //or current user changes
  useEffect(() => {
    userLikedRef.current = userLikedSongs;
    wrapedSongsRef.current = songList.map((data) =>
      WrapSong(
        data,
        userLikedRef.current,
        setUserLikedSongs,
        uploaders,
        currentUser?.id
      )
    );
  }, [songList, userLikedSongs, uploaders, currentUser]); //Re-render whenever the song list or the user's liked songs changes

  return (
    <TableContainer w="100%">
      <Table variant="striped" size="lg">
        <Thead>
          <Tr>
            <Th>
              Song{" "}
              <Name
                listState={songList}
                setList={setSongList}
                reverse={false}
              />
            </Th>
            <Th>
              Artist{" "}
              <Artist
                listState={songList}
                setList={setSongList}
                reverse={false}
              />
            </Th>
            <Th>
              Genre{" "}
              <Genre
                listState={songList}
                setList={setSongList}
                reverse={false}
              />
            </Th>
            <Th>
              Uploaded by{" "}
              <Uploader
                listState={songList}
                setList={setSongList}
                reverse={false}
              />
            </Th>
            <Th>
              Likes{" "}
              <Likes
                listState={songList}
                setList={setSongList}
                reverse={false}
              />
            </Th>
          </Tr>
        </Thead>
        <Tbody>{wrapedSongsRef.current}</Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
