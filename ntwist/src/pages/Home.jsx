import React from "react";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Service from "../components/Service/Service";
import Navbar from "../components/Navbar/Navbar";


const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar/>
      <Hero />
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
