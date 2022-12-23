import { Box } from "@chakra-ui/react";
import { User } from "../../../types";
import ChangeName from "./ChangeName";
import DeleteAccount from "./DeleteAcount";

type Prop = {
  currentUser: User;
};

export default function Account({ currentUser }: Prop) {
  const changeName = () => {};
  {
  }

  return (
    <>
      <Box m="5" p="5" width="500px">
        <ChangeName currentUser={currentUser} />
      </Box>
      <Box m="5" p="5">
        <DeleteAccount currentUser={currentUser} />
      </Box>
    </>
  );
}
