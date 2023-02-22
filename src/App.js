import GlobalStyle from "./GlobalStyle";
import { ChakraProvider } from "@chakra-ui/react";
import Scores from "@components/Scores";
import Fonts from "./font";
import theme from "src/theme";

function App() {
  return (
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Fonts />
        <Scores />
      </ChakraProvider>
  );
}

export default App;
