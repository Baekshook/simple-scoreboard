import React from "react";
import { Center, Text } from "@chakra-ui/react";

export default function Texttitle(props) {
  return (
    <Center>
      <Text fontFamily={"KCCMurukmuruk"} fontSize={"25px"} marginTop={"10px"}>
        {props.title}
      </Text>
    </Center>
  );
}
