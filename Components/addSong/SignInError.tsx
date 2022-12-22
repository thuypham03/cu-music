import { Alert, AlertIcon } from "@chakra-ui/react";

export function SignInError() {
  return (
    <Alert status="error">
      <AlertIcon />
      You need to be signed in to upload a song.
    </Alert>
  );
}