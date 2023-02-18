import React from "react";
import { Button, Text, Container, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Score() {
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState(0);

  function plus() {
    setCounter(counter+result);
  }

  function results() {
    setResult(0);
  }

  //input에서 value를 담기 위한 state 생성
  const [account, setAccount] = useState({
    id: "",
    password: "",
  });

  //input에 입력될 때마다 account state값 변경되게 하는 함수
  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Button
        onClick={plus}
        fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
        fontFamily={"SEBANG_Gothic_Bold"}
        bg={"red.400"}
        _hover={{ bg: "red.600" }}
      >
        +
      </Button>
      <Input placeholder="Basic usage" />
      <Text>{counter}</Text>
      <Text>{result}</Text>
      <Input
        id="id"
        name="id"
        placeholder="아이디를 입력해주세요"
        onChange={onChangeAccount}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangeAccount}
      />
      {console.log({result})}
    </Container>
  );
}
