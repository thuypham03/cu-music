import {User, Song} from "../types/index"

export const dummyUsers:User[]=[
    {
        name:"dummy1",
        id:'1',
        uploads:[],
        likes:0,
        likedSongs:[],
        followers:[],
        following:[]
    },
    {
        name:"dummy2",
        id:'2',
        uploads:[],
        likes:0,
        likedSongs:[],
        followers:[],
        following:[]
    },
    {
        name:"dummy3",
        id:'3',
        uploads:[],
        likes:0,
        likedSongs:[],
        followers:[],
        following:[]
    }
]
export const dummySongs:Song[] = [
    {
        name:"song13",
        artist:"afele",
        genre:'t3',
        userId: dummyUsers[0].id,
        link:"https://youtu.be/lpiB2wMc49g",
        likes:5,
        id: '001'
    },
    {
        name:"song8",
        artist:"ae",
        genre:'t1',
        userId: dummyUsers[1].id,
        link:"https://youtu.be/_caMQpiwiaU",
        likes:10,
        id: '003'
    },
    {
        name:"song12",
        artist:"ele",
        genre:'t2',
        userId:dummyUsers[0].id,
        link:"https://youtu.be/FSfRRBNPfFs",
        likes:5,
        id: '002'
    }
]

 export const currUser:User=dummyUsers[1]
currUser.likedSongs = ['9TzqoC0mLfYHoMPBbqFu']

