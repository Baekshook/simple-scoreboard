import React from "react";
import { Grid, GridItem, Button, Flex, Input, Text, Center, Box} from "@chakra-ui/react";
import Scoremolcules from "src/molcules/Scoremolcules";
import { useState } from "react";

export default function Score() {

    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(0);

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleAdd = () => {
      setResult(result + parseInt(inputValue));
      setInputValue("");
    };

    const handleMinus = () => {
      setResult(result - parseInt(inputValue));
      setInputValue("");
    };

  return (
    <>
      <Center>
        <Button
          onClick={handleAdd}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          bg={"red.400"}
          _hover={{ bg: "red.600" }}
          marginRight={"10px"}
          alignItems={"center"}
        >
          +
        </Button>
        <Button
          onClick={handleMinus}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          bg={"red.400"}
          _hover={{ bg: "red.600" }}
        >
          -
        </Button>
      </Center>
      <div>
        <Input
          placeholder="점수를 입력하세요"
          onChange={handleInputChange}
          value={inputValue}
          marginBottom={"20px"}
          marginTop={"20px"}
        />
      </div>
      <Center>
        <Text alignItems={"center"}>{result}</Text>
      </Center>
    </>
  );
}
