import Sort from "./Sort";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Song } from "../types";
import { Dispatch, SetStateAction } from "react";

type testP = {
  readonly listState: Song[];
  readonly setList: Dispatch<SetStateAction<Song[]>>;
  readonly reverse: boolean;
};

let curr: string;

const Name = ({ listState, setList, reverse }: testP) => {
  const songsCopy = [...listState];
  const nameSort = () => {
    curr = "name";
    setList(Sort(songsCopy, "name", reverse));
  };

  return (
    <IconButton
      aria-label="Sort by Song name"
      variant="ghost"
      icon={curr === "name" ? <ChevronUpIcon /> : <ChevronDownIcon />}
      onClick={nameSort}
    ></IconButton>
  );
};

const Artist = ({ listState, setList, reverse }: testP) => {
  const songsCopy = [...listState];
  const artistSort = () => {
    curr = "artist";
    setList(Sort(songsCopy, "artist", reverse));
  };

  return (
    <IconButton
      aria-label="Sort by Song name"
      variant="ghost"
      icon={curr === "artist" ? <ChevronUpIcon /> : <ChevronDownIcon />}
      onClick={artistSort}
    ></IconButton>
  );
};

const Uploader = ({ listState, setList, reverse }: testP) => {
  const songsCopy = [...listState];
  const userSort = () => {
    curr = "user";
    setList(Sort(songsCopy, "user", reverse));
  };

  return (
    <IconButton
      aria-label="Sort by Song name"
      variant="ghost"
      icon={curr === "user" ? <ChevronUpIcon /> : <ChevronDownIcon />}
      onClick={userSort}
    ></IconButton>
  );
};

const Likes = ({ listState, setList, reverse }: testP) => {
  const songsCopy = [...listState];
  const likeSort = () => {
    curr = "likes";
    setList(Sort(songsCopy, "likes", reverse));
  };

  return (
    <IconButton
      aria-label="Sort by Song name"
      variant="ghost"
      icon={curr === "likes" ? <ChevronUpIcon /> : <ChevronDownIcon />}
      onClick={likeSort}
    ></IconButton>
  );
};

const Genre = ({ listState, setList, reverse }: testP) => {
  const songsCopy = [...listState];
  const genreSort = () => {
    curr = "genre";
    setList(Sort(songsCopy, "genre", reverse));
  };

  return (
    <IconButton
      aria-label="Sort by Song name"
      variant="ghost"
      icon={curr === "genre" ? <ChevronUpIcon /> : <ChevronDownIcon />}
      onClick={genreSort}
    ></IconButton>
  );
};

const out = [Name, Artist, Genre, Uploader, Likes];
export default out;
