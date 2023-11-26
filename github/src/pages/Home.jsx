import { Box } from "@chakra-ui/react";
import React from "react";
import Navabar from "../components/Navbar/Navabar";
import Banner from "../components/Banner/Banner";
import Productivity from "../components/Productivity/Productivity";

const Home = () => {
  return (
    <Box>
      <Navabar />
      <Banner/>
      <Productivity/>
    </Box>
  );
};

export default Home;
