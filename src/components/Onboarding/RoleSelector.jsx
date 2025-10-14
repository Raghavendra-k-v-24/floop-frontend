import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Received from "../../assets/received.png";
import Globe from "../../assets/globe.png";
import { useDispatch, useSelector } from "react-redux";
import { LoggedInUser, SignUpFormData } from "../../redux";
import { toast } from "sonner";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { encryptData } from "../../encryption";
import { useNavigate } from "react-router";
const RoleSelector = ({ setStep }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupFormData = useSelector((state) => state.signupFormData);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const buttonClicked = e.nativeEvent.submitter;
    if (buttonClicked.name === "reviewee") {
      dispatch(SignUpFormData.setSignUpFormData({ "role": "reviewee" }));
      setStep(2);
    } else if (buttonClicked.name === "reviewer") {
      dispatch(SignUpFormData.setSignUpFormData({ "role": "reviewer" }));
      setStep(3);
    }
  };

  const handleSkip = async () => {
    try {
      const data = { ...signupFormData, skip: true };
      await axios.post(`${BASE_URL_SERVER}/signup`, data);
      const userData = {
        name: signupFormData.name,
        email: signupFormData.email,
        role: signupFormData.role,
      };
      const encryptedUserData = encryptData(userData);
      dispatch(LoggedInUser.setLoggedInUser(encryptedUserData));
      navigate(`/dashboard`);
    } catch (err) {
      toast.error(err.response.data.data);
    }
  };

  return (
    <form
      className="w-full h-full flex flex-col gap-5"
      onSubmit={handleFormSubmit}
    >
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
        <button
          className="w-full h-[200px] bg-[#3A3CFF] hover:bg-[#3A3CFF]/95 rounded-3xl flex items-center justify-center flex-col gap-5 hover:cursor-pointer"
          name="reviewee"
          type="submit"
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
        </button>
        <button
          className="w-full h-[200px] bg-[#FF8030] hover:bg-[#FF8030]/95 rounded-3xl flex items-center justify-center flex-col gap-5 hover:cursor-pointer"
          type="submit"
          name="reviewer"
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
        </button>
      </div>
      <Label
        className="w-full flex justify-center text-sm text-neutral-500 font-light hover:cursor-pointer hover:text-neutral-900"
        onClick={handleSkip}
      >
        SKIP - I am just exploring
      </Label>
    </form>
  );
};

export default RoleSelector;
