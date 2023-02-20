import GlobalStyle from "./GlobalStyle";
import { ChakraProvider } from "@chakra-ui/react";
import Score from "@components/Score";
import Scoremolcules from "./molcules/Scoremolcules";
import Scores from "@components/Scores";

function App() {
  return (
      <ChakraProvider>
        <GlobalStyle />
        <Scores />
        {/* <Score /> */}
        {/* <Scoremolcules /> */}
      </ChakraProvider>
  );
}

export default App;
