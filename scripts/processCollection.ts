import { songsCollectionRef, usersCollectionRef } from "../util/firebase";
import {CollectionReference, doc, DocumentData, getDocs, query} from 'firebase/firestore'
import { Song, User } from "../types";
import { Dispatch, SetStateAction } from "react";


const getSongs = async ()=>{
    let outputSongList:Song[]= []
    
    
    const songsQuery = query(songsCollectionRef)
    const songsAsync = await getDocs(songsQuery)
    songsAsync.forEach((doc)=>{
        const temp = doc.data() as Song
        outputSongList.push(temp)
    })
    return outputSongList
}

const getUsers = async ()=>{
    let outputUserList:User[] = []

    const userQuery = query(usersCollectionRef)
    const userAsync = await getDocs(userQuery)

    userAsync.forEach((doc)=>{
        const temp = doc.data() as User
        outputUserList.push(temp)
    })

    return outputUserList

}

const test = (songList:Song[])=>{

    const helper= (data:Song[])=>{
        songList = [...songList, ...data]    
    }

    getSongs().then((data)=>{helper(data)}).then()
    
}



const userUnwrapper = (setUserList:Dispatch<SetStateAction<User[]>>)=>{
    getUsers().then((users)=>{
        setUserList([...users])
    })
}


// export  {test, userUnwrapper}