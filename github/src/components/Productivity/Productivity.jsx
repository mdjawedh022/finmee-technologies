import { Box, Text } from "@chakra-ui/react";
import { MdWorkOutline } from "react-icons/md";
import React from "react";
import "./product.css";
const Productivity = () => {
  return (
    <Box className="pro-wrapper">
      <Box
        w={{ lg: "78%", md: "90%", base: "95%" }}
        display={"flex"}
        gap={{ lg: "40px", md: "20px" }}
        alignItems={"start"}
        m={{ lg: "10px auto 0", md: "10px auto 0", base: "10px auto " }}
      >
        <Box>
          <MdWorkOutline />
          <Box
            className="pro-line"
            mt={"5px"}
            w={{ lg: "2.6px", md: "2.6px", base: "2.6px" }}
            h={{ lg: "260px", md: "260px", base: "370px" }}
          ></Box>
        </Box>
        <Box>
          <Text>Productivity</Text>
          <Text>Accelerate innovation</Text>
          <Text>
            Our AI-powered platform increases the pace of software development.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Productivity;
