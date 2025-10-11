import Floop_Image from "../../assets/floop.png";
import { useState } from "react";
import "react-device-frameset/styles/marvel-devices.min.css";
import Preview from "./Preview";
import Form from "./Form";
import Background_Image from "../../assets/background.png";

const Onboarding = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    reviewerEmail: "",
    reviewerName: "",
    portfolioLink: "",
    goals: "",
    reviewLink: "",
  });
  return (
    <div
      className={`h-full w-full flex flex-col items-center p-10 gap-10 bg-cover`}
      style={{ backgroundImage: `url(${Background_Image})` }}
    >
      <img src={Floop_Image} alt="Floop Image" className="w-[100px]" />
      <Form data={data} setData={setData} />
      <Preview data={data} />
    </div>
  );
};

export default Onboarding;
