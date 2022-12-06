export type Song = {
    name:string
    artist:string
    genre:string
    user:User
    link:string
    likes: number
}




export type User = {
    name:string
    id:number
    uploads:Song[]
    likes:number
    likedSongs:Song[]
    followers: User[]
    following: User[]
}