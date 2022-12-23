import {
  Card,
  CardBody,
  Center,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "../../Components/auth/AuthUserProvider";
import { User } from "../../types";

type Prop = {
  currentUser: User | undefined;
};

const UserCard = ({ currentUser }: Prop) => {
  const { user } = useAuth();
  return (
    <Card key="UserCard" variant="elevated">
      <CardBody>
        <Center>
          <HStack
            justifyContent={"space-between"}
            h={14}
            as="nav"
            alignItems="center"
          >
            <Image
              boxSize="75px"
              borderRadius="full"
              src={user?.photoURL ? user.photoURL : "cornell-logo.png"}
              alt="Profile Photo"
            />
            <Spacer />
            <VStack>
              <Heading>{currentUser?.name}</Heading>
              <HStack>
                <Text fontSize="lg">
                  Likes : {currentUser ? currentUser.likes : 0}
                </Text>
                <Text fontSize="lg">
                  Followers: {currentUser ? currentUser.followers.length : 0}
                </Text>
                <Text fontSize="lg">
                  Following: {currentUser ? currentUser.following.length : 0}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Spacer />
        </Center>
      </CardBody>
    </Card>
  );
};

export default UserCard;
