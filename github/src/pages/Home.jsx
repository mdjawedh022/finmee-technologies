import { Box } from "@chakra-ui/react";
import React from "react";
import Navabar from "../components/Navbar/Navabar";
import Banner from "../components/Banner/Banner";
import Productivity from "../components/Productivity/Productivity";
import Increase from "../components/Increase/Increase";
import GithubHome from "../components/github-home/GithubHome";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Box>
      <Navabar />
      <Banner/>
      <Productivity/>
      <Increase/>
      <GithubHome/>
      <Footer/>
    </Box>
  );
};

export default Home;
