import React from "react";
import Score from "./Score";
import {
  Flex,
  Box,
} from "@chakra-ui/react";

export default function Scores() {
  return (
    <>
      <Flex>
        <Box bg="coral" w={"300px"} h={"200px"} margin={"80px"}>
          <Score />
        </Box>
        <Box bg="skyblue" margin={"80px"} w={"300px"} h={"200px"}>
          <Score />
        </Box>
        <Box bg="lightgreen" margin={"80px"} w={"300px"} h={"200px"}>
          <Score />
        </Box>
      </Flex>
      <div />
      <Flex>
        <Box
          bg="yellow"
          w={"300px"}
          h={"200px"}
          mt={"80px"}
          mb={"80px"}
          ml={"300px"}
          mr={"80px"}
        >
          <Score />
        </Box>
        <Box bg="purple" margin={"80px"} w={"300px"} h={"200px"}>
          <Score />
        </Box>
      </Flex>
    </>
  );
}
