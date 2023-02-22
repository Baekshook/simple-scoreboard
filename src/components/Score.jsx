import React from "react";
import {Button, Input, Text, Center} from "@chakra-ui/react";
import { useState} from "react";

export default function Score() {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(0);
    
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleAdd = () => {
      setResult(result + parseInt(inputValue));
      // parseInt 함수는 첫 번째 인자를 문자열로 변환하고, 그 값을 파싱하여 정수나 NaN을 반환합니다.
      setInputValue("");
    };

    const handleMinus = () => {
      setResult(result - parseInt(inputValue));
      setInputValue("");
    };
    

  return (
    <>
      <Input
        placeholder="점수를 입력하세요"
        onChange={handleInputChange}
        value={inputValue}
        marginBottom={"20px"}
        marginTop={"20px"}
      />
      <Center>
        <Button
          onClick={handleAdd}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          colorScheme="twitter"
          marginRight={"10px"}
          alignItems={"center"}
        >
          +
        </Button>
        <Button
          onClick={handleMinus}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          fontFamily={"SEBANG_Gothic_Bold"}
          colorScheme="twitter"
        >
          -
        </Button>
      </Center>
      <Center>
        <Text
          alignItems={"center"}
          mt={"20px"}
          fontSize={"30px"}
          fontFamily={"KCCMurukmuruk"}
        >
          {result}
        </Text>
      </Center>
    </>
  );
}
