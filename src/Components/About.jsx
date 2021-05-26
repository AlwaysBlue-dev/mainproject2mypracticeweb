import React from "react";
import Common from "../Components/Common";
import web from "../Images/About.png";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page "
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
