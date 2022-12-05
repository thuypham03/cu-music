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
  Button,
} from "@chakra-ui/react";

import { Icon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useState, useEffect, useRef } from "react";
import { dummySongs } from "../scripts/temp";
import { Song } from "../types";
import out from "./Sorter";

const [Name, Artist, Genre, User, Likes] = out;

//TODO take care of Liking and Unliking songs.
//Will probably use two different images, like-neutral and like-liked with a transition

const Laysong = ({ name, artist, genre, user, link, likes }: Song) => {
  return (
    <Tr>
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
        <Button variant="ghost" size="sm" my="2px">
          <Icon viewBox="0 0 128 128" color="red.500">
            <path
              fill="currentColor"
              d="M29.9 20.3C17 25.2 9.7 35.7 9.7 49.6c0 5.9.5 8.2 3.2 13.9 6.1 13 21.2 28.4 40 40.7 10.2 6.6 12.4 6.5 23.8-1.1 18.8-12.6 32.4-26.6 38.5-39.7 7.3-15.5 2-33-12.4-40.9-4.6-2.6-6.3-3-13.3-3-9.3 0-14.3 2.1-21.2 8.8L64 32.4l-4.2-4.1c-2.4-2.2-6.3-5.1-8.8-6.3-5.5-2.8-15.9-3.6-21.1-1.7zM44.1 26c5.2 1.5 11.4 5.9 15 10.8C60.8 39.1 63 41 64 41c1 0 3.4-2.1 5.4-4.8 5-6.9 12.3-10.7 20.1-10.6 13.4.1 22.4 9.8 22.5 24 0 9.2-4.8 18.2-15.9 29.3-8.6 8.7-22.7 19.9-28.8 22.9-3 1.4-3.6 1.4-6.5 0-6-2.9-20.2-14.1-28.9-22.9-11-11-15.9-20-15.9-29.3C16.1 33.2 29.5 22 44.1 26z"
            />
          </Icon>
        </Button>
        {likes}
      </Td>
    </Tr>
  );
};

const MyTable = () => {
  const [songList, setSongList] = useState<Song[]>(dummySongs); //dummy is just a placeholder. Actual should be []

  const mlist = useRef<JSX.Element[]>();
  mlist.current = songList.map((data) => Laysong(data));

  useEffect(() => {
    mlist.current = songList.map((data) => Laysong(data));
  }, [songList]);

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
            </Th><Th>
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
        <Tbody>{mlist.current}</Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
