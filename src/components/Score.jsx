import React from "react";
import {Button, Input, Text, Center} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Score() {

    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(0);
    const [number, setNumber] = useState([1,2,3,4,5])
    
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

    useEffect(() => {
      // 비동기로 데이터 받을준비
      const getUsers = async () => {
        // getDocs로 컬렉션안에 데이터 가져오기
         const data = await [1,2,3,4,5];
        // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
        setNumber(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      getUsers();
    }, []);

    const showNumbers = number.map((value) => (
      <>
      <Text>{value}</Text>
      </>
    ));

  return (
    <>
      <Center>
      </Center>
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
      <Center>
        <Text
          alignItems={"center"}
          mt={"30px"}
          fontSize={"30px"}
          fontFamily={"KCCMurukmuruk"}
        >
          {result}
        </Text>
      </Center>
    </>
  );
}
