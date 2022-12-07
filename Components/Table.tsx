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
import { dummySongs, currUser } from "../scripts/temp";
import { Song } from "../types";
import out from "./Sorter";
import Liking from "./Likes";

import { Dispatch, SetStateAction } from "react";

const [Name, Artist, Genre, User, Likes] = out;

/**
 * Fills out each row of the table with the songs. Child component, `Liking`, handles liking songs with react hooks and a reference to the current user
 */
const LaySong = (
  song: Song,
  userLikedSongs: Song[] | undefined,
  setUserLikedSongs: Dispatch<SetStateAction<Song[]>>
) => {
  //A reference object of the current user's liked songs needs to be used. but that reference could be undefined. This makes sure the function
  //always has a list to work with.
  if (userLikedSongs === undefined) {
    userLikedSongs = [];
  }

  //For use in the child component
  const liked = userLikedSongs.includes(song);

  const { name, artist, genre, user, link, likes } = song;
  return (
    <Tr key={name + artist + user.name}>
      <Td>
        <Link href={link} isExternal>
          {name}
          <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
        </Link>
      </Td>
      <Td>{artist}</Td>
      <Td>{genre}</Td>
      <Td>{user.name}</Td>
      <Td>
        <Liking
          song={song}
          userLikedSongs={userLikedSongs}
          liked={liked}
          setUserLikedSongs={setUserLikedSongs}
        />
        {likes}
      </Td>
    </Tr>
  );
};

const MyTable = () => {
  //React hooks on current user's songlist for liking a song.
  const [userLikedSongs, setUserLikedSongs] = useState<Song[]>(
    currUser.likedSongs
  );
  const userLikedRef = useRef<Song[]>(); //Reference for current user's liked songs
  userLikedRef.current = userLikedSongs;

  //for sorting by row heads
  const [songList, setSongList] = useState<Song[]>(dummySongs); //dummy is just a placeholder. Actual should be []

  const songListRef = useRef<JSX.Element[]>();
  songListRef.current = songList.map((data) =>
    LaySong(data, userLikedRef.current, setUserLikedSongs)
  );

  useEffect(() => {
    userLikedRef.current = userLikedSongs;
    songListRef.current = songList.map((data) =>
      LaySong(data, userLikedRef.current, setUserLikedSongs)
    );
  }, [songList, userLikedSongs]); //Re-render whenever the song list or the user's liked songs changes

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
              Artist
              <Artist
                listState={songList}
                setList={setSongList}
                reverse={false}
              />
            </Th>
            <Th>
              Genre
              <Genre
                listState={songList}
                setList={setSongList}
                reverse={false}
              />
            </Th>
            <Th>
              Uploaded by
              <User
                listState={songList}
                setList={setSongList}
                reverse={false}
              />
            </Th>
            <Th>
              Likes
              <Likes
                listState={songList}
                setList={setSongList}
                reverse={false}
              />
            </Th>
          </Tr>
        </Thead>
        <Tbody>{songListRef.current}</Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
