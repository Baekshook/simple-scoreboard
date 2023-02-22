import GlobalStyle from "./GlobalStyle";
import { ChakraProvider } from "@chakra-ui/react";
import Score from "@components/Score";
import Scoremolcules from "./molcules/Scoremolcules";
import Scores from "@components/Scores";
import Fonts from "./font";

function App() {
  return (
      <ChakraProvider>
        <GlobalStyle />
        <Fonts />
        <Scores />
        {/* <Score /> */}
        {/* <Scoremolcules /> */}
      </ChakraProvider>
  );
}

export default App;
