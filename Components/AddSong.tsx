import {AddIcon} from '@chakra-ui/icons'
import {Center, Button, Link, Text} from '@chakra-ui/react'
import router from 'next/router'
import { signInWithGoogle } from '../util/firebase'
import { useAuth } from './auth/AuthUserProvider'


const AddSong = ()=>{
    const { user } = useAuth()

    return (
        <Center my='10px'>
            <Button 
                leftIcon={<AddIcon />}
                variant='ghost' 
                colorScheme='messenger'
                type="button" 
                onClick={user ? (() => router.push('/addSong')) : signInWithGoogle}
            >
                Add Song
            </Button>
            
            <Link href='/'>
            </Link>

        </Center>
    )
}

export default AddSong