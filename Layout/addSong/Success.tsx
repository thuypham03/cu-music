import { Alert, AlertIcon } from "@chakra-ui/react";

export function Success() {
  return (
    <Alert status="success">
      <AlertIcon />
      Successfully Uploaded Song
    </Alert>
  );
}
