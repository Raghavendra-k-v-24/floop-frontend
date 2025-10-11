import Floop_Image from "../../assets/floop.png";
import { useState } from "react";
import "react-device-frameset/styles/marvel-devices.min.css";
import Background_Image from "../../assets/background.png";
import Form from "./Form";

const Onboarding = () => {
  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center p-10 gap-10 bg-cover`}
      style={{ backgroundImage: `url(${Background_Image})` }}
    >
      <img src={Floop_Image} alt="Floop Image" className="w-[100px]" />
      <Form />
    </div>
  );
};

export default Onboarding;
