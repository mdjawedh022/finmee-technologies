import React from "react";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Service/Service";


const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
