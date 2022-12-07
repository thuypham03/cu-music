export type Song = {
    name: string
    artist: string
    genre: string
    userId: string
    link: string
    likes: number
}

export type User = {
    id: string // user.uid of AuthUser
    name: string // user.displayName of AuthUser
    uploads: Song[]
    likes: number
    likedSongs: Song[]
    followers: User[]
    following: User[]
}