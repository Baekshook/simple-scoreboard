import React from "react";
import { useState } from "react";
import { Button, Text, Container, Input, Grid, GridItem } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export default function Scoremolcules() {
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
      <Flex>
        <Button
          onClick={handleAdd}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          bg={"red.400"}
          _hover={{ bg: "red.600" }}
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
        <Input
          placeholder="점수를 입력하세요"
          onChange={handleInputChange}
          value={inputValue}
        />
        <Text>{result}</Text>
        <Button
          onClick={handleAdd}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          bg={"red.400"}
          _hover={{ bg: "red.600" }}
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
        <Input
          placeholder="점수를 입력하세요"
          onChange={handleInputChange}
          value={inputValue}
        />
        <Text>{result}</Text>
        <Button
          onClick={handleAdd}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          bg={"red.400"}
          _hover={{ bg: "red.600" }}
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
        <Input
          placeholder="점수를 입력하세요"
          onChange={handleInputChange}
          value={inputValue}
        />
        <Text>{result}</Text>
      </Flex>
      <Grid>
        <Button
          onClick={handleAdd}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          bg={"red.400"}
          _hover={{ bg: "red.600" }}
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
        <Input
          placeholder="점수를 입력하세요"
          onChange={handleInputChange}
          value={inputValue}
        />
        <Text>{result}</Text>
      </Grid>
    </>
  );
}
