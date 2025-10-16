import { useState } from "react";
import FloopYourWebsite from "./FloopYourWebsite";

const Form = () => {
  const [internalStep, setInternalStep] = useState(0);

  return (
    <div className="w-[400px] h-max bg-white rounded-2xl shadow-xl flex flex-col px-5 py-10">
      <FloopYourWebsite
        internalStep={internalStep}
        setInternalStep={setInternalStep}
      />
    </div>
  );
};

export default Form;
