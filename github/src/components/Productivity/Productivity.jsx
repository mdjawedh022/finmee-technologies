import { Box, Image, Text } from "@chakra-ui/react";
import { MdWorkOutline } from "react-icons/md";
import React from "react";
import code from "../../assest/illu-copilot-editor-6474457a5b19.png"
import "./product.css";
const Productivity = () => {
  return (
    <Box className="pro-wrapper">
      <Box
        w={{ lg: "77%", md: "88%", base: "90%" }}
        display={"flex"}
        gap={{ lg: "40px", md: "20px", base: "20px" }}
        alignItems={"start"}
        m="auto"
        pt="1rem"
      >
        <Box display="flex" alignItems="center" flexDirection="column">
          <MdWorkOutline style={{ color: "#fff", fontSize: "1.3rem" }} />
          <Box
            className="pro-line"
            mt={"15px"}
            w={{ lg: "2.6px", md: "2.6px", base: "2.6px" }}
            h={{ lg: "260px", md: "220px", base: "280px" }}
          ></Box>
        </Box>
        <Box>
          <Text
            fontSize={{ lg: "24px", md: "24px", base: "20px" }}
            color="#fff"
          >
            Productivity
          </Text>
          <Text
            fontSize={{ lg: "48px", md: "40px", base: "27px" }}
            color="#3FB950"
          >
            Accelerate innovation
          </Text>
          <Text
            lineHeight={{ lg: "60px", base: "35px" }}
            fontSize={{ lg: "48px", md: "40px", base: "25px" }}
            color="#fff"
          >
            Our AI-powered platform increases the pace of software development.
          </Text>
        </Box>
      </Box>
      <Box
        w={{ lg: "85%", md: "95%", base: "95%" }}
        h={{ lg: "650px" }}
        m="auto"
      >
        <Image
          w="100%"
          height="100%"
          src={code}
          objectFit={"fill"}
          borderRadius="10px"
        />
      </Box>
    </Box>
  );
};

export default Productivity;
