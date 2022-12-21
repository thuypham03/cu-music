import { Heading, Text } from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import MyTable from "../Components/Table";
import Footer from "../Layout/Footer";
import AddSong from "../Components/AddSong";

const test = () => (
  <>
    <Layout title="Home" showLogin={true}>
      <Heading color="tomato" size="2xl" my="4">
        Big Red Music Test
      </Heading>
      <Text fontSize="md" my="3">
        This is a test landing page for the final project
      </Text>
    </Layout>
    <MyTable />
    <AddSong />

    <Footer />
  </>
);

export default test;
