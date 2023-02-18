import GlobalStyle from "./GlobalStyle";
import { ChakraProvider } from "@chakra-ui/react";
import Score from "@components/Score";

function App() {
  return (
      <ChakraProvider>
        <GlobalStyle />
        <Score />
      </ChakraProvider>
  );
}

export default App;
