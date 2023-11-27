import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./increase.css";
import img2 from "../../assest/issues-plan-2-46d1ce1d4519.png"
import img1 from "../../assest/git-branch-productivity-c304b83d09c7.svg";
const Increase = () => {
  return (
    <Box background={"#0d1117"}>
      <Box
        className="copilot"
        w={{ lg: "77%", md: "88%", base: "90%" }}
        display={"flex"}
        alignItems={"start"}
        m="auto"
      >
        <Box display={"flex"} alignItems={"center"}>
          <Box display="flex" gap="1px" flexDirection={"column"}>
            <Box
              className="pro-line3"
              mt={{ lg: "4px", base: "-70px" ,md:'10px'}}
              w={{ lg: "2.6px", md: "2.6px", base: "2.6px" }}
              h={{ lg: "550px", md: "450px", base: "330px" }}
            ></Box>
          </Box>
          <Image h={"440px"} mt={{base:'-50px',md:'10px'}} src={img1} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          mt={{ lg: "11.5rem", base: "7rem" ,md:'10rem'}}
        >
          <Text
            border="1px solid #3FB950"
            p="1px 7px"
            fontSize="0.8rem"
            color="#3FB950"
            borderRadius={"20px"}
          >
            Did you know?
          </Text>
          <Text color="#3FB950" fontSize={{ lg: "72px", md: "56px", base: "40px" }}>
            22% increase
          </Text>
          <Text
            fontSize={{ lg: "24px", md: "24px", base: "20px" }}
            color="#fff"
          >
            in developer productivity after three years with Github
          </Text>
          <Text
            fontSize={{ lg: "24px", md: "24px", base: "16px" }}
            mt={"1rem"}
            color="#fff"
          >
            Read the report {">"}
          </Text>
        </Box>
      </Box>
      <Box
        w={{ lg: "85%", md: "95%", base: "95%" }}
        h={{ lg: "650px" }}
        m={{ lg: "0 auto",base:"-50px auto",md:"10px auto" }}
      >
        <Image
          w="100%"
          height="100%"
          src={img2}
          objectFit={"fill"}
          borderRadius="10px"
        />
      </Box>
    </Box>
  );
};

export default Increase;
