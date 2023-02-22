import React from "react";
import Score from "./Score";
import {
  Flex,
  Box
} from "@chakra-ui/react";
import Texttitle from "src/molcules/Texttitle";

export default function Scores() {
  return (
    <>
      <Flex>
        <Box bg="gray.200" w={"300px"} h={"230px"} margin={"80px"}>
          <Texttitle title={"1조"}></Texttitle>
          <Score />
        </Box>
        <Box bg="blue.100" margin={"80px"} w={"300px"} h={"230px"}>
          <Texttitle title={"2조"}></Texttitle>
          <Score />
        </Box>
        <Box bg="green.100" margin={"80px"} w={"300px"} h={"230px"}>
          <Texttitle title={"3조"}></Texttitle>
          <Score />
        </Box>
      </Flex>
      <div />
      <Flex>
        <Box
          bg="yellow.100"
          w={"300px"}
          h={"230px"}
          mt={"80px"}
          mb={"80px"}
          ml={"300px"}
          mr={"80px"}
        >
          <Texttitle title={"4조"}></Texttitle>
          <Score />
        </Box>
        <Box bg="purple.100" margin={"80px"} w={"300px"} h={"230px"}>
          <Texttitle title={"5조"}></Texttitle>
          <Score />
        </Box>
      </Flex>
    </>
  );
}
