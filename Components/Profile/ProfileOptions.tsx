import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { User } from "../../types";
import Followers from "./Followers";
import Following from "./Following";
import LikedSongs from "./LikedSongs";
import Uploads from "./Uploads";

type Prop = {
  currentUser: User;
};

const buttonMaker = (
  activeOption: string,
  setActiveOption: Dispatch<SetStateAction<string>>
) => {
  const helper = (data: string, index: number, arr: string[]) => (
    <>
      <Button
        key={data + "button"}
        size="lg"
        p=""
        mx="10"
        my={index == 0 ? "2.5" : "5"}
        textColor={activeOption == data ? "black" : "gray"}
        variant="unstyled"
        _hover={{ textDecoration: "underline", textColor: "#006AFF" }}
        background={activeOption === data ? "#E0E0E0" : ""}
        onClick={() => {
          setActiveOption(data);
        }}
      >
        {data}
      </Button>
      {index < arr.length - 1 ? <Divider orientation="horizontal" /> : <></>}
    </>
  );

  const list = ["Uploads", "Liked Songs", "Followers", "Following", "Account"];
  const output = list.map((data, index, arr) => helper(data, index, arr));
  return output;
};

const Options = ({ currentUser }: Prop) => {
  const [activeOption, setActiveOption] = useState<string>("");

  const dislayActiveOption = () => {
    switch (activeOption) {
      case "Uploads":
        return <Uploads currentUser={currentUser} />;
      case "Liked Songs":
        return <LikedSongs currentUser={currentUser} />;
      case "Followers":
        return <Followers currentUser={currentUser} />;
      case "Following":
        return <Following currentUser={currentUser}/>

      default:
        return (
          <Center>
            <Text alignSelf="center" fontSize="2xl">
              {" "}
              Select an Option
            </Text>
          </Center>
        );
    }
  };

  return (
    <>
      <HStack divider={<StackDivider borderColor="gray.200" />} height="665px">
        <VStack width="20%" height="75%" alignSelf="start">
          {buttonMaker(activeOption, setActiveOption)}
        </VStack>

        <Box alignSelf="start" width="80%" height="85%" overflowY="auto">
          {dislayActiveOption()}
        </Box>
      </HStack>
    </>
  );
};

export default Options;
