import {} from "react";
import { Button, Icon } from "@chakra-ui/react";
import { Song } from "../types/index";
import { Dispatch, SetStateAction } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../util/firebase";

type Prop = {
  song: Song;
  liked: boolean;
  userLikedSongs: string[];
  setUserLikedSongs: Dispatch<SetStateAction<string[]>>;
  currentUserId: string;
};

/**Handles liking functionality
 * @param song: The Song being liked or unliked
 * @param song: boolean of whether the song is currently liked
 * @param userLikedSongs: list of all songs liked by the current user
 * @param setUserLikedSongs: setter for the user's liked songs
 * @param currentUserId: the id of the current user
 *
 * @returns JSX element for the like button of the Song
 */
export default function Liking({
  song,
  liked,
  userLikedSongs,
  setUserLikedSongs,
  currentUserId,
}: Prop) {
  /**
   * Updates the like state of a song, modifying the user's liked song
   * the database as well.
   * Precondition: The user must be signed in
   */
  const updateLike = () => {
    //temporary copy of user's liked songs to be stored here
    let temp: string[];
    if (liked) {
      //unlike song
      //reduce like count
      song.likes--;
      //create temporary copy of the user's liked songs
      temp = [...userLikedSongs];
      //find the index of to remove the song from
      const index: number = userLikedSongs.indexOf(song.id);
      //remove song
      temp.splice(index, 1);
      //update the local copy of user's liked songs
      setUserLikedSongs(temp);
    } else {
      //like song
      //increase like count of song
      song.likes++;
      //Create temporary copy of user's liked song, adding this song
      //to the end
      temp = [...userLikedSongs, song.id];
      //update the local copy of users liked songs
      setUserLikedSongs(temp);
    }
    //update the song database
    updateDoc(doc(db, "songs", song.id), { likes: song.likes });
    //update the user's database
    updateDoc(doc(db, "users", currentUserId), { likedSongs: temp });
  };

  /** Alerts a user when they try to like a song without first being logged in*/
  const denial = () => {
    alert("You need to sign in to like or unlike a song!");
  };
  //like button
  return (
    <Button
      variant="ghost"
      size="sm"
      my="2px"
      onClick={currentUserId ? updateLike : denial}
      key={song.name + song.artist + "LikeButton"}
    >
      <Icon viewBox="0 0 128 128" color="red.500">
        {liked ? (
          <path
            fill="currentColor"
            d="M25.3 13.4C8.2 19-1.9 35.1 1.2 52c3.1 17.3 24.4 40.3 55.1 59.4l7.7 4.8 7.6-4.7c31.7-19.8 51.9-41.6 55.2-59.5 2.7-14.9-5.4-30.2-19.6-36.8-4.8-2.3-7.1-2.7-14.2-2.7-10.4 0-17.4 2.9-24.5 10l-4.7 4.6-3.4-4c-5.2-6-14.7-10.3-23.7-10.7-4.3-.3-8.9.2-11.4 1z"
          />
        ) : (
          <path
            fill="currentColor"
            d="M29.9 20.3C17 25.2 9.7 35.7 9.7 49.6c0 5.9.5 8.2 3.2 13.9 6.1 13 21.2 28.4 40 40.7 10.2 6.6 12.4 6.5 23.8-1.1 18.8-12.6 32.4-26.6 38.5-39.7 7.3-15.5 2-33-12.4-40.9-4.6-2.6-6.3-3-13.3-3-9.3 0-14.3 2.1-21.2 8.8L64 32.4l-4.2-4.1c-2.4-2.2-6.3-5.1-8.8-6.3-5.5-2.8-15.9-3.6-21.1-1.7zM44.1 26c5.2 1.5 11.4 5.9 15 10.8C60.8 39.1 63 41 64 41c1 0 3.4-2.1 5.4-4.8 5-6.9 12.3-10.7 20.1-10.6 13.4.1 22.4 9.8 22.5 24 0 9.2-4.8 18.2-15.9 29.3-8.6 8.7-22.7 19.9-28.8 22.9-3 1.4-3.6 1.4-6.5 0-6-2.9-20.2-14.1-28.9-22.9-11-11-15.9-20-15.9-29.3C16.1 33.2 29.5 22 44.1 26z"
          />
        )}
      </Icon>
    </Button>
  );
}
