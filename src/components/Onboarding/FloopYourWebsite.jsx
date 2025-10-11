import { ArrowLeft, Goal } from "lucide-react";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import ReviewerDetails from "./ReviewerDetails";
import Goals from "./Goals";
const FloopYourWebsite = ({ setStep, internalStep, setInternalStep }) => {
  const internalSteps = [
    <ReviewerDetails setInternalStep={setInternalStep} />,
    <Goals setStep={setStep} />,
  ];
  return (
    <div className="w-full h-full flex flex-col gap-5">
      {/* Back button */}
      <div
        className="w-[120px] h-[40px] bg-[#F9FAFB] border-[2px] border-[#EBEFF4] rounded-3xl flex items-center justify-between px-4"
        onClick={() => {
          if (internalStep === 0) setStep(1);
          else setInternalStep(0);
        }}
      >
        <div className="w-[20px] h-[20px] bg-neutral-400 rounded-full flex items-center justify-center">
          <ArrowLeft size={15} strokeWidth={2} />
        </div>
        <Label className="">Go back</Label>
      </div>
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
