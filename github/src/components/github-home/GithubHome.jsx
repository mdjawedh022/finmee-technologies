
import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import "./github.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import globe from "../../assest/download.png";



const GithubHome = () => {
  return (
    <Box
      bgColor={"#0d1117"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box
        w={{ lg: "77%", md: "88%", base: "95%" }}
        display={"flex"}
        gap={{ lg: "40px", md: "20px", base: "20px" }}
        alignItems={"start"}
        m="auto"
        pt="1rem"
      >
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box
            className="pro-line5"
            w={{ lg: "2.6px", md: "2.6px", base: "2.6px" }}
            h={{ lg: "430px", md: "490px", base: "650px" }}
          ></Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mt={"10px"}
            color={"#fff"}
            fontSize={"1.2rem"}
          >
            <IoIosArrowBack />
            <IoIosArrowForward />
          </Box>
        </Box>
        <Box mt={{ lg: "5rem", md: "3.5rem", base: "6.5rem" }}>
          <Text
            fontSize={{ lg: "67px", md: "45px", base: "30px" }}
            lineHeight={{ lg: "70px", base: "35px" }}
            fontWeight={"700"}
            color={"#fff"}
          >
            Over 100 million developers call GitHub home
            <span style={{ fontSize: "1rem" }}>3</span>.
          </Text>
          <Text
            fontSize={{ lg: "24px", md: "24px", base: "18px" }}
            color="#7D8590"
            w={{ lg: "100%", md: "100%", base: "95%" }}
            textAlign={"justify"}
          >
            Whether you’re scaling your startup or just learning how to code,
            GitHub is your home. Join the world’s largest developer platform to
            build the innovations that empower humanity. Let’s build from here.
          </Text>
          <Box
            display={"flex"}
            flexDirection={{ lg: "row", md: "row", base: "column" }}
            gap={"10px"}
            mt={{ lg: "6rem", md: "5.5rem", base: "2rem" }}
            mr={"10px"}
          >
            <Box
              display={"flex"}
              flexDirection={{ lg: "row", md: "row", base: "column" }}
            >
              <Input
                placeholder="Email address"
                borderRadius={{
                  lg: "5px 0 0 5px",
                  md: "5px 0 0 5px",
                  base: "5px 5px",
                }}
                p={{ lg: "1.4rem", md: "1.4rem 1rem", base: "1.4rem 1rem" }}
                bgColor={"#fff"}
                fontSize={"1.1rem"}
              />
              <Button
                bgColor={"#6E40C9"}
                p={{
                  lg: "23px 3rem",
                  md: "23.5px 3rem",
                  base: "23.5px 3rem",
                }}
                color={"#fff"}
                fontSize={"1rem"}
                border={"none"}
                mt={{ base: "1rem", lg: "0", md: "0" }}
                _hover={{ bgColor: "#6E40C9" }}
                borderRadius={{
                  lg: " 0  5px 5px 0",
                  md: " 0  5px 5px 0",
                  base: "5px",
                }}
              >
                Sign up for Github
              </Button>
            </Box>

            <hr />
            <Button
              fontWeight={"500"}
              background={"transparent"}
              border={"2px solid  #6E40C9"}
              color={"#fff"}
              p={{
                lg: "1.4rem 1.6rem",
                md: "1.4rem 1.5rem",
                base: "1.4rem 1.5rem",
              }}
              _hover={{ background: "transparent", border: "2px solid #fff" }}
            >
              Start a free enterprise trial <IoIosArrowForward />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        textAlign={"center"}
        w={{ lg: "80%", md: "80%", base: "90%" }}
      >
        <Image src={globe} alt="" textAlign={"center"} />
      </Box>
    
    </Box>
  );
};

export default GithubHome;
