import { ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";

import ReviewerDetails from "./ReviewerDetails";
import Goals from "./Goals";
import { useState } from "react";
import { useSelector } from "react-redux";
import { decryptData } from "../../encryption";
import { useNavigate } from "react-router";
const FloopYourWebsite = ({ internalStep, setInternalStep }) => {
  const loggedInUser = useSelector((state) => state.loggedInUser.data);
  const decryptUserData = decryptData(loggedInUser);
  const [data, setData] = useState({
    portfolioLink: "",
    associatedToUser: decryptUserData.id,
    revieweeName: decryptUserData.name,
    revieweeEmail: decryptUserData.email,
    reviewerName: "",
    reviewerEmail: "",
    goals: "",
    emailInvites: "",
    accessType: "view",
    reviewLink: "",
  });

  const internalSteps = [
    <ReviewerDetails
      setInternalStep={setInternalStep}
      data={data}
      setData={setData}
    />,
    <Goals data={data} setData={setData} />,
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div
        className="w-[120px] h-[40px] bg-[#F9FAFB] border-[2px] border-[#EBEFF4] rounded-3xl flex items-center justify-between px-4"
        onClick={() =>
          internalStep === 0 ? navigate("/dashboard") : setInternalStep(0)
        }
      >
        <div className="w-[20px] h-[20px] bg-neutral-400 rounded-full flex items-center justify-center">
          <ArrowLeft size={15} strokeWidth={2} />
        </div>
        <Label className="">Go back</Label>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-lg font-bold">
          flooping <span className="text-[#3A3CFF]">your portfolio</span>
        </Label>
        <Label className="text-sm text-[#6D6D6D] font-light">
          Get feedback on your live website from your peers/mentors/reviewers
        </Label>
      </div>
      {internalSteps[internalStep]}
    </div>
  );
};

export default FloopYourWebsite;
