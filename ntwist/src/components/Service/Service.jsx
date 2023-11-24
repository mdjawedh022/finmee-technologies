import React from "react";
import ServiceData from "./ServiceData";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.png";
import "./service.css";
import ServiceData1 from "./ServiceData1";
const Service = () => {
  return (
    <div>
      <ServiceData
        clName="service-info"
        title="Mine-To-Mill-To-Mine Optimization"
        text="NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans."
        btn="Read More"
        img1={img1}
      />
      <ServiceData1
        clName="service-info1"
        img1={img2}
        title="Sustainability"
        text="Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers."
        text1="With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics."
        btn="Read More"
      />
      <ServiceData
        clName="service-info"
        title="Mineral Processing"
        text="NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption."
        btn="Read More"
        img1={img3}
      />
      <ServiceData1
        clName="service-info1"
        img1={img4}
        title="Oil & Gas"
        text="Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment."
        text1="NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety."
        btn="Read More"
      />
    </div>
  );
};

export default Service;
