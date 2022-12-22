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
import { User, Song, PrimitiveSong } from "../../types";
import { songsCollectionRef } from "../../util/firebase";
import DeleteSong from "./DeleteSong";
import out from "../../Components/Sorter";
import AddSong from "../AddSong";

const [Name, Artist, Genre, Likes] = out;

type Prop = {
  currentUser: User;
};

const wrapSong = (
  song: Song,
  currentUserId: string,
  uploads: Song[] | undefined,
  setUploads: Dispatch<SetStateAction<Song[]>>
) => {
  let songs: Song[];
  if (!uploads) {
    songs = [];
  } else {
    songs = [...uploads];
  }
  return (
    <>
      <Tr key={song.name + "UploadsProfileSection"}>
        <Td>
          <Link
            href={song.link}
            isExternal
            _hover={{ color: "blue", textDecoration: "underline" }}
          >
            {song.name}
          </Link>
        </Td>
        <Td>{song.artist}</Td>
        <Td>{song.genre}</Td>
        <Td px="10">{song.likes}</Td>
        <Td>
          <DeleteSong
            song={song}
            currentUserId={currentUserId}
            uploads={songs}
            setUploads={setUploads}
          />
        </Td>
      </Tr>
    </>
  );
};

const Uploads = ({ currentUser }: Prop) => {
  const [uploads, setUploads] = useState<Song[]>([]);

  useEffect(() => {
    const convertToSong = (data: any, id: string) => {
      return { ...(data as PrimitiveSong), id };
    };
    const unsubscribe = onSnapshot(
      query(songsCollectionRef),
      (querySnapshot) => {
        const temp = querySnapshot.docs.filter((data) =>
          currentUser.uploads.includes(data.id)
        );
        setUploads(temp.map((data) => convertToSong(data.data(), data.id)));
      }
    );
    return unsubscribe;
  }, [currentUser]);

  return (
    <>
      <TableContainer w="90%">
        <Table variant="striped" size="lg">
          <Thead>
            <Tr>
              <Th>
                Song{" "}
                <Name
                  listState={uploads}
                  setList={setUploads}
                  reverse={false}
                />
              </Th>
              <Th>
                Artist{" "}
                <Artist
                  listState={uploads}
                  setList={setUploads}
                  reverse={false}
                />
              </Th>
              <Th>
                Genre{" "}
                <Genre
                  listState={uploads}
                  setList={setUploads}
                  reverse={false}
                />
              </Th>
              <Th>
                Likes{" "}
                <Likes
                  listState={uploads}
                  setList={setUploads}
                  reverse={false}
                />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {uploads?.map((data) =>
              wrapSong(data, currentUser.id, uploads, setUploads)
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <AddSong />
    </>
  );
};

export default Uploads;
