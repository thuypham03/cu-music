export type PrimitiveSong = {
    name: string
    artist: string
    genre: string
    userId: string
    link: string
    likes: number
}

export type Song = PrimitiveSong & { id:string}

//Songs exist in the database as primitive songs. When fetched, they're converted to 
//the Song type.

export type User = {
    id: string // user.uid of AuthUser
    name: string // user.displayName of AuthUser
    uploads: string[] //song ids
    likes: number
    likedSongs: string[]
    followers: string[] //user ids
    following: string[] //user ids
}