import { Box,Link, Text } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import "./navbar.css";
const Navabar = () => {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);
  return (
    <Box
      w={{ lg: "100%", md: "100%", base: "100%" }}
      position="absolute"
      zIndex={"999"}
      top={'0'}
      // background={"#0d1117"}
      display="flex"
      justifyContent={"space-between"}
      alignItems={"center"}
      p={{ lg: ".8rem 1rem", md: ".5rem 2rem", base: ".5rem" }}
    >
      <Box display={{ lg: "none", md: "block", base: "block" }}>
        <button className="btn-sig">Sign up</button>
      </Box>
      <Box
        display="flex"
        alignItems={"center"}
        gap={{ lg: "30px", md: "", base: "" }}
      >
        {/* --------img----- */}
        <Box>
          <IoLogoGithub color="white" fontSize="2.5rem" />
        </Box>
        {/* -----------menu-link---------- */}
        <Box
          display={{ base: "none", md: "none", lg: "flex" }}
          color={"#fff"}
          gap={{ lg: "30px", md: "", base: "" }}
        >
          <Text
            onMouseEnter={() => setDropdownOpen1(true)}
            onMouseLeave={() => setDropdownOpen1(false)}
          >
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
              _hover={{ textDecoration: "none" }}
            >
              Product <IoIosArrowDown style={{ color: "gray" }} />
            </Link>
            {isDropdownOpen1 && (
              <Box
                display=" inline-block"
                position="absolute"
                marginTop="5px"
                backgroundColor="#fff"
                box-shadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                padding="10px"
                color="black"
                borderRadius="5px"
              >
                <Text>Dropdown Content</Text>
                <Text>Another Item</Text>
              </Box>
            )}
          </Text>
          <Text
            onMouseEnter={() => setDropdownOpen2(true)}
            onMouseLeave={() => setDropdownOpen2(false)}
          >
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
              _hover={{ textDecoration: "none" }}
            >
              Solutions <IoIosArrowDown style={{ color: "gray" }} />
            </Link>
            {isDropdownOpen2 && (
              <Box
                display=" inline-block"
                position="absolute"
                marginTop="5px"
                backgroundColor="#fff"
                box-shadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                padding="10px"
                color="black"
                borderRadius="5px"
              >
                <Text>Dropdown Content</Text>
                <Text>Another Item</Text>
              </Box>
            )}
          </Text>
          <Text
            onMouseEnter={() => setDropdownOpen3(true)}
            onMouseLeave={() => setDropdownOpen3(false)}
          >
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
              _hover={{ textDecoration: "none" }}
            >
              Open Source <IoIosArrowDown style={{ color: "gray" }} />
            </Link>
            {isDropdownOpen3 && (
              <Box
                display=" inline-block"
                position="absolute"
                marginTop="5px"
                backgroundColor="#fff"
                box-shadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                padding="10px"
                color="black"
                borderRadius="5px"
              >
                <Text>Dropdown Content</Text>
                <Text>Another Item</Text>
              </Box>
            )}
          </Text>

          <Text
            onMouseEnter={() => setDropdownOpen4(true)}
            onMouseLeave={() => setDropdownOpen4(false)}
          >
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
              _hover={{ textDecoration: "none" }}
            >
              Pricing <IoIosArrowDown style={{ color: "gray" }} />
            </Link>
            {isDropdownOpen4 && (
              <Box
                display=" inline-block"
                position="absolute"
                marginTop="5px"
                backgroundColor="#fff"
                box-shadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                padding="10px"
                color="black"
                borderRadius="5px"
              >
                <Text>Dropdown Content</Text>
                <Text>Another Item</Text>
              </Box>
            )}
          </Text>
        </Box>
      </Box>
      {/* ---------------right side box-------------- */}
      <Box
        display={{ lg: "flex", md: "none", base: "none" }}
        flexDirection={"row"}
        gap={{ lg: "20px", md: "", base: "" }}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          border={"1px solid  #404750"}
          background={"#24292fcc"}
          gap={"5px"}
          alignItems={"center"}
          p={".1rem .5rem"}
          borderRadius={"5px"}
        >
          <SearchIcon color={"#404750"} />
          <input className="input" placeholder="Search or jump to.." />
          <button className="button">/</button>
        </Box>
        <Text color={"#fff"}>Sign in</Text>
        <Box display={{ lg: "block", md: "none", base: "none" }}>
          <button className="btn-sign">Sign up</button>
        </Box>
      </Box>
      {/* ----------hamburger----------- */}
      <Box display={{ lg: "none", md: "block", base: "block" }}>
        <HamburgerIcon color={"#fff"} fontSize={"1.5rem"} />
      </Box>
    </Box>
  );
};

export default Navabar;
