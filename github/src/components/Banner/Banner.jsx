import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineCircle } from "react-icons/md";
import "./banner.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import banner from "../../assest/hero-mobile-7163f4f5de41.webp"
const Banner = () => {
  return (
    <Box>
      <Box
        className="inner-div"
        h={{ lg: "auto" }}
        w={{ lg: "100%", md: "100%", base: "100%" }}
      >
        <Box display={{ lg: "none", md: "none", base: "block" }}>
          <Image width={"100%"} objectFit={"cover"} src={banner} />
        </Box>
        <Box
          w={{ lg: "78%", md: "90%", base: "95%" }}
          display={"flex"}
          m={'auto'}
          gap={{ lg: "40px", md: "20px" }}
          alignItems={"start"}
          // p={{ lg: "20rem auto 0", md: "8rem auto 0", base: "2rem auto 0" }}
        >
          {/* -------------line--------- */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            m={{ lg: "20rem auto 0", md: "8rem auto 0", base: "2rem auto 0" }}
          >
            <MdOutlineCircle style={{ color: "gray" }} />
            <Box
              className="line-gri"
              w={{ lg: "2.6px", md: "2.6px", base: "2.6px" }}
              h={{ lg: "260px", md: "260px", base: "370px" }}
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
            <Box
              className="line-gri2"
              w={"2.6px"}
              h={{ lg: "220px", md: "220px", base: "300px" }}
            ></Box>
          </Box>
          {/* ---------------------============-------------- */}
          <Box
            m={{ lg: "20rem auto 0", md: "8rem auto 0", base: "2rem auto 0" }}
          >
            <Text
              w={{ lg: "100%", md: "70%", base: "100%" }}
              lineHeight={{ lg: "", md: "80px", base: "60px" }}
              fontSize={{ lg: "6rem", md: "86.4px", base: "57.6px" }}
              color={"#fff"}
              fontWeight={"600"}
            >
              Let’s build from here
            </Text>
            <Text
              fontSize={{ lg: "24px", md: "20px", base: "20px" }}
              color={"#7D8590"}
              mt={"1rem"}
            >
              The world’s leading AI-powered developer platform.
            </Text>
            {/* ///////////////////////////button/////////////// */}
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
            {/* -----------------------------------/ */}
            <Text
              mt={{ lg: "5rem", md: "3rem", base: "2rem" }}
              fontSize={{ lg: "24px", md: "20px", base: "20px" }}
              color={"#7D8590"}
            >
              Trusted by the world’s leading organizations
            </Text>
            {/* -------------------------------------------------- */}
            <Box
              display={"grid"}
              gridTemplateColumns={{
                lg: "repeat(6,1fr)",
                md: "repeat(6,1fr)",
                base: "repeat(2,1fr)",
              }}
              gap={{ lg: "30px", md: "5px", base: "30px" }}
              mt={{ lg: "3rem", md: "2rem", base: "2rem" }}
            >
              <Image
                cursor={"pointer"}
                src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg"
              />
              <Image
                cursor={"pointer"}
                src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg"
              />
              <Image
                cursor={"pointer"}
                src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg"
              />
              <Image
                cursor={"pointer"}
                src="https://github.githubassets.com/assets/sap-96248a56d312.svg"
              />
              <Image
                cursor={"pointer"}
                src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg"
              />
              <Image
                cursor={"pointer"}
                src="https://github.githubassets.com/assets/telus-df0c2109df99.svg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
