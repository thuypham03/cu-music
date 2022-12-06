import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import AuthUserProvider from '../Components/auth/AuthUserProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthUserProvider>
        <Component {...pageProps} />
      </AuthUserProvider>
    </ChakraProvider>
  );
}

export default App;