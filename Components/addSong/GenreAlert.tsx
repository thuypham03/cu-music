import {
    Alert,
    AlertIcon,
  } from '@chakra-ui/react'

  export function GenreAlert(){
    return (
        <Alert status='error'>
            <AlertIcon />
            Please select a Genre
        </Alert>
    )
  }