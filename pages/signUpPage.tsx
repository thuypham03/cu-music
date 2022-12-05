import { Heading, Text, Center } from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import Footer from "../Layout/UserProfile/Footer";
import Signup from "../Components/Signup"

export default function Sign() {
  return (
    <>
      <Layout title="Sign Up" showLogin={false}>
        <Center>
          <Heading color="tomato" size="2xl" my="4">
            Sign Up
          </Heading>
        
        </Center>
      </Layout>
      <Signup/>
      <Footer />
    </>
  );
}
