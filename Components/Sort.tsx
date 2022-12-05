import { Song } from "../types";

const sortLikes = (array: Song[], reverse: boolean = false) => {
  if (reverse) {
    array.sort((a, b) => b.likes - a.likes);
  } else {
    array.sort((a, b) => a.likes - b.likes);
  }
};

const sortUser = (array: Song[], reverse: boolean = false) => {
  if (reverse) {
    array.sort((a, b) => b.user.id - a.user.id);
  } else {
    array.sort((a, b) => a.user.id - b.user.id);
  }
};

const sortArtist = (array: Song[], reverse: boolean = false) => {
  const sortHelper = (a: Song, b: Song) => {
    if (a.artist < b.artist) return -1;
    if (a.artist > b.artist) return 1;
    return 0;
  };
  const sortHelperReverse = (a: Song, b: Song) => {
    if (a.artist < b.artist) return 1;
    if (a.artist > b.artist) return -1;
    return 0;
  };
  if (reverse) {
    array.sort(sortHelperReverse);
  } else {
    array.sort(sortHelper);
  }
};

const sortName = (array: Song[], reverse: boolean = false) => {
  const sortHelper = (a: Song, b: Song) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };
  const sortHelperReverse = (a: Song, b: Song) => {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
  };
  if (reverse) {
    array.sort(sortHelperReverse);
  } else {
    array.sort(sortHelper);
  }
};

const sortGenre = (array: Song[], reverse: boolean = false) => {
  const sortHelper = (a: Song, b: Song) => {
    if (a.genre < b.genre) return -1;
    if (a.genre > b.genre) return 1;
    return 0;
  };
  const sortHelperReverse = (a: Song, b: Song) => {
    if (a.genre < b.genre) return 1;
    if (a.genre > b.genre) return -1;
    return 0;
  };
  if (reverse) {
    array.sort(sortHelperReverse);
  } else {
    array.sort(sortHelper);
  }
};


const Sort = (songList:Song[],category: string, reverse: boolean = false) => {
  

  const categories = new Map<string, Function>();
  categories.set("artist", sortArtist);
  categories.set("name", sortName);
  categories.set("user", sortUser);
  categories.set("likes", sortLikes);
  categories.set("genre", sortGenre);

  const newList: Song[] = [...songList];
  categories.get(category)?.(newList, reverse);

  return newList

};


export default Sort