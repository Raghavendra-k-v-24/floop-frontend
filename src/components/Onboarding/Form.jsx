import { useState } from "react";
import UserDetails from "./UserDetails";
import RoleSelector from "./RoleSelector";
import FloopYourWebsite from "./FloopYourWebsite";
import ShareLink from "./ShareLink";
import FloopOtherWebsite from "./FloopOtherWebsite";
import { useSelector } from "react-redux";

const Form = () => {
  const [step, setStep] = useState(0);
  const [internalStep, setInternalStep] = useState(0);
  const steps = [
    <UserDetails setStep={setStep} />,
    <RoleSelector setStep={setStep} />,
    <FloopYourWebsite
      setStep={setStep}
      internalStep={internalStep}
      setInternalStep={setInternalStep}
    />,
    <FloopOtherWebsite setStep={setStep} />,
    <ShareLink setStep={setStep} />,
  ];
  return (
    <div className="w-[400px] h-max bg-white rounded-2xl shadow-xl flex flex-col px-5 py-10">
      {steps[step]}
    </div>
  );
};

export default Form;
