import { Alert, AlertIcon } from "@chakra-ui/react";

export function Error() {
  return (
    <Alert status="error">
      <AlertIcon />
      Song already exists
    </Alert>
  );
}
