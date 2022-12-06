import {AddIcon} from '@chakra-ui/icons'
import {Center, Button, Link, Text} from '@chakra-ui/react'


const AddSong = ()=>{
    return (
        <Center my='10px'>
            <Button variant='ghost' colorScheme='messenger'>
                <AddIcon></AddIcon>
                <Link href='/'><Text>Add Song</Text></Link>
            </Button>
        </Center>
    )
}

export default AddSong