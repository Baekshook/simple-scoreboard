import React from 'react'
import Score from './Score'
import {
  Grid,
  GridItem,
  Button,
  Flex,
  Input,
  Text,
  Center,
  Container,
  Box
} from "@chakra-ui/react";

export default function Scores() {
  return (
    <>
      <Flex>
        <Box bg="coral" marginRight={"20px"}>
          <Score />
        </Box>
        <Box bg="skyblue" marginRight={"20px"}>
          <Score />
        </Box>
        <Box bg="lightgreen">
          <Score />
        </Box>
      </Flex>
    </>
  );
}
