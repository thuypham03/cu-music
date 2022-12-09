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
import { PrimitiveSong, Song, User } from "../types";
import out from "./Sorter";
import Liking from "./Likes";
import {collection, doc, getDoc, onSnapshot, query} from 'firebase/firestore'
import {db, songsCollectionRef, usersCollectionRef} from '../util/firebase'
import { Dispatch, SetStateAction } from "react";

const [Name, Artist, Genre, Uploader, Likes] = out;

/**
 * Fills out each row of the table with the songs. Child component, `Liking`, handles liking songs with react hooks and a reference to the current user
 */
const LaySong = (
  song: Song,
  userLikedSongs: string[] | undefined,
  setUserLikedSongs: Dispatch<SetStateAction<string[]>>,
  uploaders: User[]
) => {
  //A reference object of the current user's liked songs needs to be used. but that reference could be undefined. This makes sure the function
  //always has a list to work with.
  if (userLikedSongs === undefined) {
    userLikedSongs = [];
  }

  //For use in the child component
  const liked = userLikedSongs.includes(song.id);

  const { name, artist, genre, userId, link, likes } = song;


  //search for the user with the given id to set as uploader. Guaranteed to work
  //since only users can upload
  const uploader = uploaders.find((data)=>data.id===userId)

  return (
    <Tr key={name + artist}>
      <Td>
        <Link href={link} isExternal>
          {name}
          <ExternalLinkIcon mx="2px"></ExternalLinkIcon>
        </Link>
      </Td>
      <Td>{artist}</Td>
      <Td>{genre}</Td>
      <Td>{userId==='Admin'? 'Admin': uploader?.name}</Td>
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
  
  //for getting the uploader of a song 
  const [uploaders, setUploaders] = useState<User[]>([])

  //React hooks on current user's songlist for liking a song.
  const [userLikedSongs, setUserLikedSongs] = useState<string[]>(
    currUser.likedSongs
  );
  const userLikedRef = useRef<string[]>(); //Reference for current user's liked songs
  userLikedRef.current = userLikedSongs;

  //the list of songs
  const [songList, setSongList] = useState<Song[]>([]);

  //Get songs from database
    const converttoSong = (data:any, id:string)=>{return {...data as PrimitiveSong, id:id}}
    useEffect(()=>{
      const unsubscribe = onSnapshot(query(songsCollectionRef),(querySnapshot)=>{
        setSongList(querySnapshot.docs.map((data)=>converttoSong(data.data(), data.id)))
      })
       return unsubscribe
    }, [])

  //Get uploaders
  const converttoUser = (data:any)=>{return {...data as User}}
  useEffect(()=>{
    const unsubscribe = onSnapshot(query(usersCollectionRef), (querySnapShot)=>{
      setUploaders(
        querySnapShot.docs.map(data=>converttoUser(data.data()))
      )
    })
    return unsubscribe
  }, [])

  const songListRef = useRef<JSX.Element[]>();
  songListRef.current = songList.map((data) =>
    LaySong(data, userLikedRef.current, setUserLikedSongs, uploaders)
  );

  useEffect(() => {
    userLikedRef.current = userLikedSongs;
    songListRef.current = songList.map((data) =>
      LaySong(data, userLikedRef.current, setUserLikedSongs, uploaders)
    );
  }, [songList, userLikedSongs, uploaders]); //Re-render whenever the song list or the user's liked songs changes

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
              <Uploader
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
