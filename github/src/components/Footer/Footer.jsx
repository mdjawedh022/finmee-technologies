import React from "react";
import "./footer.css";
import {
  Footerlink,
  Footerlink2,
  Footerlink3,
  Footerlink4,
} from "./FooterMenu";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoTiktok } from "react-icons/bi";
import { FaFacebookSquare, FaYoutube, FaTwitch } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Box bgColor={"#0d1117"} color={"#7d8590"}>
      <Box w={{ lg: "82%", md: "88%", base: "90%" }} m={"auto"}>
        <Text>
          1 This 7X times factor is based on data from the industry’s longest
          running analysis of fix rates Veracode State of Software Security
          2023, which cites the average time to fix 50% of flaws as 198 days vs.
          GitHub’s fix rates of 72% of flaws with in 28 days which is at a
          minimum of 7X faster when compared.
        </Text>
        <Text mt={"1.5rem"}>
          2 The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced
          Security, a commissioned study conducted by Forrester Consulting,
          2022. Results are for a composite organization based on interviewed
          customers.
        </Text>
        <Text mt={"1.5rem"}>
          3 There are now 100 million developers around the world using GitHub.
          Read the blog post.
        </Text>
      </Box>
      <Box
        w={{ lg: "82%", md: "88%", base: "90%" }}
        m={{ lg: "3rem auto 0", md: "3rem auto 0", base: "3rem auto 0" }}
        display={"flex"}
        gap={{ lg: "20px", md: "20px" }}
        flexDirection={{ lg: "row", md: "column", base: "column" }}
      >
        {/* ------------------------------ */}
        <Box w={{ lg: "29%", md: "", base: "" }}>
          <Text color={"#fff"} fontSize={"1.9rem"} fontWeight={"600"}>
            GitHub
          </Text>
          <Text color={"#fff"} fontSize={"1rem"} mt={"1rem"}>
            Subscribe to our developer newsletter
          </Text>
          <Text>
            Get tips, technical guides, and best practices. Once a month. Right
            in your inbox.
          </Text>
          <Button
            bgColor={"transparent"}
            _hover={{ bgColor: "transparent" }}
            border="1px solid #7d8590"
            color={"#fff"}
            mt={"1rem"}
          >
            Subscribe
          </Button>
        </Box>
        <Box
          w={{ lg: "70%", md: "", base: "" }}
          display={"grid"}
          gridTemplateColumns={{
            lg: "repeat(4,1fr)",
            md: "repeat(4,1fr)",
            base: "repeat(2,1fr)",
          }}
          gap={{ lg: "30px", md: "30px", base: "20px" }}
        >
          {/* ............. */}
          <Box display={"flex"} flexDirection={"column"}>
            {Footerlink4.map((elem) => {
              return (
                <Link mt=".8rem" _hover={{ textDecoration: "none" }}>
                  {elem.text}
                </Link>
              );
            })}
          </Box>
          {/* ............. */}
          <Box display={"flex"} flexDirection={"column"}>
            {Footerlink2.map((elem) => {
              return (
                <Link mt=".8rem" _hover={{ textDecoration: "none" }}>
                  {elem.text}
                </Link>
              );
            })}
          </Box>
          {/* ............. */}
          <Box display={"flex"} flexDirection={"column"}>
            {Footerlink3.map((elem) => {
              return (
                <Link mt=".8rem" _hover={{ textDecoration: "none" }}>
                  {elem.text}
                </Link>
              );
            })}
          </Box>
          {/* ............. */}
          <Box display={"flex"} flexDirection={"column"}>
            {Footerlink.map((elem) => {
              return (
                <Link mt=".8rem" _hover={{ textDecoration: "none" }}>
                  {elem.text}
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        background={" #161B22"}
        color={"#7d8590"}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={{
          lg: "row",
          md: "column-reverse",
          base: "column-reverse",
        }}
        alignItems={"center"}
        p={".5rem 1rem"}
        mt={".5rem"}
      >
        <Box
          display="grid"
          gridTemplateColumns={{
            lg: "repeat(5,1fr)",
            md: "repeat(3,1fr)",
            base: "repeat(2,1fr)",
          }}
          fontSize="13px"
          gap="20px"
          textAlign={'center'}
          cursor="pointer"
          mt={{base:'1rem'}}
        >
          <Text>© 2023 GitHub, Inc</Text>
          <Text>Terms</Text>
          <Text>Privacy (Updated 08/2022)</Text>
          <Text>Sitemap</Text>
          <Text>What is Git?</Text>
        </Box>
        <Box display="flex" fontSize="20px" gap="20px" cursor="pointer">
          <RiTwitterXFill />
          <FaFacebookSquare />
          <BiLogoLinkedin />
          <FaYoutube />
          <FaTwitch />
          <BiLogoTiktok />
          <AiOutlineGithub />
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
