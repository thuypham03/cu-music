import { Song } from "../types";




const sortLikes = (array: Song[], reverse: boolean = false) => {
  if (reverse) {
    array.sort((a, b) => b.likes - a.likes);
  } else {
    array.sort((a, b) => a.likes - b.likes);
  }
};

const sortUser = (array: Song[], reverse: boolean = false) => {
  const sortHelper = (a: Song, b: Song) => {
    if (a.userId.toLowerCase() < b.userId.toLowerCase()) return -1;
    if (a.userId.toLowerCase() > b.userId.toLowerCase()) return 1;
    return 0;
  };
  const sortHelperReverse = (a: Song, b: Song) => {
    if (a.userId.toLowerCase() < b.userId.toLowerCase()) return 1;
    if (a.userId.toLowerCase() > b.userId.toLowerCase()) return -1;
    return 0;
  };
  
  if (reverse) {
    array.sort(sortHelperReverse);
  } else {
    array.sort(sortHelper);
  }
};

const sortArtist = (array: Song[], reverse: boolean = false) => {
  const sortHelper = (a: Song, b: Song) => {
    if (a.artist.toLowerCase() < b.artist.toLowerCase()) return -1;
    if (a.artist.toLowerCase() > b.artist.toLowerCase()) return 1;
    return 0;
  };
  const sortHelperReverse = (a: Song, b: Song) => {
    if (a.artist.toLowerCase() < b.artist.toLowerCase()) return 1;
    if (a.artist.toLowerCase() > b.artist.toLowerCase()) return -1;
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
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  };
  const sortHelperReverse = (a: Song, b: Song) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
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
    if (a.genre.toLowerCase() < b.genre.toLowerCase()) return -1;
    if (a.genre.toLowerCase() > b.genre.toLowerCase()) return 1;
    return 0;
  };
  const sortHelperReverse = (a: Song, b: Song) => {
    if (a.genre.toLowerCase() < b.genre.toLowerCase()) return 1;
    if (a.genre.toLowerCase() > b.genre.toLowerCase()) return -1;
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