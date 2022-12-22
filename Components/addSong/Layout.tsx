import { Button, Input, Stack } from "@chakra-ui/react";
import { FirebaseError } from "firebase/app";
import { addDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useAuth } from "../../Components/auth/AuthUserProvider";
import { PrimitiveSong, Song, User } from "../../types";
import {
  db,
  songsCollectionRef,
  usersCollectionRef,
} from "../../util/firebase";
import { Error } from "./Error";
import { GenreAlert } from "./GenreAlert";
import { Genre } from "./Genres";
import { SignInError } from "./SignInError";
import { Success } from "./Success";

/**Checks if a song already exists in a given list returning true if it is, false if otherwise.
 * Also sets the Error flag to true.
 * @param name: the name of the song as a string
 * @param artist: the artist of the song as a string
 * @param songList: the list of songs to check in
 * @param setErrorFlag: setter for the error flag
 * @returns boolean
 */
const songExists = (
  name: string,
  artist: string,
  songList: Song[],
  setErrorFlag: Dispatch<SetStateAction<boolean>>
) => {
  //if the song already exists
  if (songList.some((data) => data.name + data.artist === name + artist)) {
    setErrorFlag(true);
    return true;
  }
  return false;
};

//for use in uploadSong()
type Props = {
  setName: Dispatch<SetStateAction<string>>;
  setArtist: Dispatch<SetStateAction<string>>;
  setLink: Dispatch<SetStateAction<string>>;
  setGenre: Dispatch<SetStateAction<string>>;
  setSuccessFlag: Dispatch<SetStateAction<boolean>>;
};

/**Uploads song to database. The user's uploads is also updated.
 * sets the successflag to true if successful
 * Clears input fields after uploading song
 * @param song (PrimitiveSong) A primitive type of the song to upload
 * @param currentUser The user doing the upload.
 * @param setName The setter for the song's name. Used to clear the 'name' input field
 * @param setArtist The setter for the song's artist. Used to clear the 'artist' input field
 * @param setGenre The setter for the song's genre. Used to clear the 'genre' input field
 * @param setLink The setter for the song's link. Used to clear the 'Link' input field
 * @param setSuccessFlag The setter for the SuccessFlag. Needed to display message to user
 */
const uploadSong = (
  song: PrimitiveSong,
  currentUser: User,
  { setName, setArtist, setGenre, setLink, setSuccessFlag }: Props
) => {
  //Add song while storing a reference to the song.
  //This way, getting the id of the song to add to the user's uploads list is easy
  const song_ref = addDoc(songsCollectionRef, song);
  //A bunch of Promise things
  song_ref
    .then((data) => {
      //update the user's uploads list
      updateDoc(doc(db, "users", currentUser.id), {
        uploads: [...currentUser.uploads, data.id],
      });
    })
    .then(() => setSuccessFlag(true))
    .finally(() => {
      //Clear the input fields
      setArtist("");
      setName("");
      setLink("");
      setGenre("");
    });
};

/**Handles both the layout and the functionality of
 * the input form for adding a song on the add Song page.
 *
 * @returns JSX.Element component of the input field
 */
const AddSongLayout = () => {
  //the current user
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState<User>();
  //Get current User
  useEffect(() => {
    const converttoUser = (data: any) => {
      return { ...(data as User) };
    };
    const unsubscribe = onSnapshot(
      query(usersCollectionRef),
      (querySnapshot) => {
        const temp = querySnapshot.docs.find(
          (data) => data.data().id == user?.uid
        );
        const tempUser = converttoUser(temp?.data());
        setCurrentUser(tempUser);
      }
    );
    return unsubscribe;
  }, [user]);
  //get songs from database to cross check with. Soo inefficient.
  //Thinking of adding another Song attribute to optimise this part
  const [songList, setSongList] = useState<Song[]>([]);
  useEffect(() => {
    const converttoSong = (data: any, id: string) => {
      return { ...(data as PrimitiveSong), id: id };
    };

    const unsubscribe = onSnapshot(
      query(songsCollectionRef),
      (querySnapshot) => {
        setSongList(
          querySnapshot.docs.map((data) => converttoSong(data.data(), data.id))
        );
      }
    );
    return unsubscribe;
  }, []);

  //Flags to respond to user input
  const [errorFlag, setErrorFlag] = useState<boolean>(false); //For when the song already exist
  const [successFlag, setSuccessFlag] = useState<boolean>(false); //for when song is successfully uploaded
  const [genreFlag, setGenreFlag] = useState<boolean>(false); // for when a genre is not picked
  const [signInFlag, setSignInFlag] = useState<boolean>(false); // for special case mentioned in 'handleSubmit()'

  //Inputs
  const [name, setName] = useState<string>("");
  const [artist, setArtist] = useState("");
  const [link, setLink] = useState("");
  const [genre, setGenre] = useState("");
  //I should probably pass this as an argument to the function.
  //For now though, this is a placeholder
  const genreList: string[] = ["Pop", "Classical", "Western"];

  //Handle submission of form
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    //if genre was not selected
    if (genre == "") {
      setGenreFlag(true);
      return;
    }

    //There was an edge case where after getting to the add song page, a user could sign out and
    //then attempt to upload a song. This try-catch prevents that
    try {
      //if song doesn't exist already and there's a user present
      if (!songExists(name, artist, songList, setErrorFlag) && currentUser) {
        //To prevent the SignIn Error from persisting
        setSignInFlag(false)
        //Make a new primitiveSong
        const newSong: PrimitiveSong = {
          name: name.trim(),
          artist: artist.trim(),
          link: link,
          genre: genre,
          likes: 0,
          userId: currentUser?.id,
        };
        //Upload song
        uploadSong(newSong, currentUser, {
          setName,
          setArtist,
          setGenre,
          setLink,
          setSuccessFlag,
        });
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        setSignInFlag(true);
      } else throw error;
    }
  };

  return (
    <>
      {signInFlag ? <SignInError /> : <></>}
      <form onSubmit={handleSubmit}>
        <Stack my={5} spacing={3}>
          <Input
            value={name}
            type="text"
            placeholder="Song Name"
            onChange={(e) => {
              setErrorFlag(false);
              setName(e.target.value);
            }}
            required
          />
          <Input
            value={artist}
            type="text"
            placeholder="Artist"
            onChange={(e) => {
              setErrorFlag(false);
              setArtist(e.target.value);
            }}
            required
          />
          <Input
            value={link}
            type="url"
            placeholder="Link"
            onChange={(e) => {
              setErrorFlag(false);
              setLink(e.target.value);
            }}
            required
          />
          <Genre
            genre={genre}
            setGenre={setGenre}
            genres={genreList}
            setGenreFlag={setGenreFlag}
          />
          {genreFlag ? <GenreAlert /> : <></>}
          <Button variant="ghost" colorScheme="messenger" type="submit">
            Upload
          </Button>
        </Stack>
      </form>
      {errorFlag ? <Error /> : <></>}
      {successFlag ? <Success /> : <></>}
    </>
  );
};

export default AddSongLayout;
