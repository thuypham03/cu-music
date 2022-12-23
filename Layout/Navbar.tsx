import NextLink from "next/link";
import {
  Box,
  Button,
  HStack,
  Link,
  Text,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { signInWithGoogle, usersCollectionRef } from "../util/firebase";
import { useAuth } from "../Components/auth/AuthUserProvider";
import { addNewUser } from "../Components/AddUser";
import { useEffect, useState } from "react";
import { User } from "../types";
import { onSnapshot, query } from "firebase/firestore";

type NavLinkData = {
  name: string;
  path: string;
};

//The list of navigations on the navigation bar
const navigations: NavLinkData[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Generator",
    path: "/generatorPage",
  },
  {
    name: "Profile",
    path: "/userProfile",
  },
];

//Styling and linking
const NavLink = ({ name, path }: NavLinkData) => {
  return (
    <NextLink key={path} href={path} passHref legacyBehavior>
      <Link _hover={{ textDecoration: "none" }} tabIndex={-1}>
        <Button
          _focusVisible={{ shadow: "outline" }}
          _focus={{ shadow: "none" }}
          colorScheme={"messenger"}
          variant={"link"}
        >
          {name}
        </Button>
      </Link>
    </NextLink>
  );
};

type Prop = {
  showLogin: boolean;
};

const Navbar = ({ showLogin }: Prop) => {
  const { user, signOut } = useAuth();
  if (user) addNewUser(user.uid, user.displayName);

  //Decided to put this in here so a user can customise their name.
  //Instead of using information about the name from Google, we use the one
  //in the database
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    const convertToUser = (data: any) => {
      return { ...(data as User) };
    };
    const unsubscribe = onSnapshot(query(usersCollectionRef), (qS) => {
      const temp = qS.docs.find((data) => data.id === user?.uid);
      setCurrentUser(convertToUser(temp?.data()));
    });
    return unsubscribe;
  }, [user]);

  return (
    <Flex shadow="base">
      <Box px={10}>
        <HStack justifyContent={"space-between"}>
          <HStack h={14} as="nav" spacing={14} alignItems="center">
            {navigations.map((data) =>
              data.name == "Profile" && !user ? null : (
                <NavLink key={data.path} {...data} />
              )
            )}
          </HStack>
        </HStack>
      </Box>
      <Spacer />

      <Box alignSelf="flex-end" px={10}>
        <HStack
          justifyContent={"space-between"}
          h={14}
          as="nav"
          spacing={4}
          alignItems="center"
        >
          {user && (
            <>
              <HStack>
                <Image
                  boxSize="40px"
                  borderRadius="full"
                  src={user.photoURL ? user.photoURL : "cornell-logo.png"}
                  alt="User Image"
                />

                <NextLink
                  href={"/userProfile"}
                  key={"/userProfile"}
                  passHref
                  legacyBehavior
                >
                  <Link _hover={{ textDecoration: "none" }} tabIndex={-1}>
                    <Button
                      _focusVisible={{ shadow: "outline" }}
                      _focus={{ shadow: "none" }}
                      colorScheme={"messenger"}
                      variant={"link"}
                    >
                      {currentUser?.name}
                    </Button>
                  </Link>
                </NextLink>
              </HStack>
            </>
          )}
          <Button
            _focusVisible={{ shadow: "outline" }}
            _focus={{ shadow: "none" }}
            colorScheme={"facebook"}
            onClick={user ? signOut : signInWithGoogle}
          >
            {user ? "Sign Out" : "Sign In"}
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Navbar;
