import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, HStack, Input } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type Prop = {
  genre: string;
  readonly genres: string[];
  setGenre: Dispatch<SetStateAction<string>>;
  setGenreFlag: Dispatch<SetStateAction<boolean>>;
};

/**
 * Wraps a given genre in the necessary JSX.Element for the drop-down menu
 * @param genre genre to wrap
 * @param setGenre setter to get and set the selected genre
 * @param setGenreFlag flag setter for when a genre is not selected
 * @returns JSX.Element wrapped genre.
 */
const wrap = (
  genre: string,
  setGenre: Dispatch<SetStateAction<string>>,
  setGenreFlag: Dispatch<SetStateAction<boolean>>
) => {
  return (
    <MenuItem
      value={genre}
      key={genre}
      onClick={() => {
        setGenreFlag(false);
        setGenre(genre);
      }}
    >
      {genre}
    </MenuItem>
  );
};

/**
 * Handles the drop-down selection menu for genres
 * @param genre current genre
 * @param genres A list of all genre options
 * @param setGenre setter for genre
 * @param setGenreFlag setter for the genre flag
 * @returns JSX.Element of the menu containing the genres
 */
export function Genre({ genre, genres, setGenre, setGenreFlag }: Prop) {
  const wrapedGenres: JSX.Element[] = genres.map((g) =>
    wrap(g, setGenre, setGenreFlag)
  );

  return (
    <HStack>
      <Input placeholder="Choose Genre" value={genre} type="text" readOnly />
      <Menu>
        <MenuButton as={Button}>Genre {<ChevronDownIcon />}</MenuButton>
        <MenuList>{wrapedGenres}</MenuList>
      </Menu>
    </HStack>
  );
}
