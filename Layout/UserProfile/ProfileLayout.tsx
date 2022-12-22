import Head from "next/head";
import { Container } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import ProfileNavbar from "./profileNavbar";

//Make them props so they can be passed as tags
type Props = {
  children?: ReactNode;
  title: string;
  showLogin:boolean
};

const ProfileLayout = ({ children, showLogin }: Props) => (
  <div>
    <Head>
      <title>Profile Page</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/big-red.png" />
    </Head>
    <ProfileNavbar showLogin={showLogin}/>
    <Container my={8}>{children}</Container>
  </div>
);

export default ProfileLayout;
