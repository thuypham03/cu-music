export type PrimitiveSong = {
    name: string
    artist: string
    genre: string
    userId: string
    link: string
    likes: number
}

export type Song = PrimitiveSong & { id:string
    
}

export type User = {
    id: string // user.uid of AuthUser
    name: string // user.displayName of AuthUser
    uploads: Song[]
    likes: number
    likedSongs: string[]
    followers: User[]
    following: User[]
}