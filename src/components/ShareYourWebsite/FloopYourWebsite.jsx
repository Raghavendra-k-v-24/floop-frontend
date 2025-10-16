import { ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";

import ReviewerDetails from "./ReviewerDetails";
import Goals from "./Goals";
import { useState } from "react";
import { useSelector } from "react-redux";
import { decryptData } from "../../encryption";
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

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label className="text-lg font-bold">flooping your portfolio</Label>
        <Label className="text-sm text-neutral-400">
          Get feedback on your live website from your peers/mentors/reviewers
        </Label>
      </div>
      {internalSteps[internalStep]}
    </div>
  );
};

export default FloopYourWebsite;
