import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Received from "../../assets/received.png";
import Globe from "../../assets/globe.png";
import { useDispatch } from "react-redux";
import { SignUpFormData } from "../../redux";
const RoleSelector = ({ setStep }) => {
  const dispatch = useDispatch();
  const handleChange = (name = "role", value, nextIndex) => {
    dispatch(SignUpFormData.setSignUpFormData({ [name]: value }));
    setStep(nextIndex);
  };
  return (
    <div className="w-full h-full flex flex-col gap-5">
      {/* Back button */}
      <div
        className="w-[120px] h-[40px] bg-[#F9FAFB] border-[2px] border-[#EBEFF4] rounded-3xl flex items-center justify-between px-4"
        onClick={() => setStep(0)}
      >
        <div className="w-[20px] h-[20px] bg-neutral-400 rounded-full flex items-center justify-center">
          <ArrowLeft size={15} strokeWidth={2} />
        </div>
        <Label className="">Go back</Label>
      </div>
      <Label className="text-lg">What do you want to do?</Label>
      <div className="w-full flex flex-col gap-2">
        <div
          className="w-full h-[200px] bg-[#3A3CFF] rounded-3xl flex items-center justify-center flex-col gap-5"
          onClick={() => handleChange("role", "reviewee", 2)}
        >
          <img
            src={Received}
            alt="Received"
            className="size-[30px] group-data-[state=active]:inline-block rotate-180"
          />
          <Label className="text-white text-lg">floop your portfolio</Label>
          <Label className="text-xs text-neutral-300 text-center font-light">
            Get feedback on your live website from your peers/mentors/reviewers
          </Label>
        </div>
        <div
          className="w-full h-[200px] bg-[#FF8030] rounded-3xl flex items-center justify-center flex-col gap-5"
          onClick={() => handleChange("role", "reviewer", 3)}
        >
          <img
            src={Globe}
            alt="Globe"
            className="size-[30px] group-data-[state=active]:inline-block rotate-180"
          />
          <Label className="text-white text-lg">
            floop someone else's website
          </Label>
          <Label className="text-xs text-neutral-100 text-center font-light">
            Give feedback to your friend/peer/client’s live websites/portfolios
          </Label>
        </div>
      </div>
      <Label className="w-full flex justify-center text-sm text-neutral-500 font-light">
        SKIP - I am just exploring
      </Label>
    </div>
  );
};

export default RoleSelector;
