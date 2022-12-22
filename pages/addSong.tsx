import { Heading, Center } from "@chakra-ui/react";
import Footer from "../Layout/Footer";
import Layout from "../Layout/Layout";
import AddSongLayout from "../Components/addSong/Layout";

const AddSong= () =>(
    <>
        <Layout title="Upload a Song" showLogin={true}>
            <Center>
                <Heading color='tomato' size='2xl' my='4'>
                    Add a Song
                </Heading>
            </Center>
            <AddSongLayout />
        </Layout>
        <Footer/>
    </>
)

export default AddSong