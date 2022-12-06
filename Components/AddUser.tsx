import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../util/firebase";

const addNewUser = async (id: string, name: string | null) => {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
        const newUser = {
            id: id,
            name: name,
            uploads: [],
            likes: 0,
            likedSongs: [],
            followers: [],
            following: [],
        }
        await setDoc(userRef, newUser);
    }
  }

  export {addNewUser}
