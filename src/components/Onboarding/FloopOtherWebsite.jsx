import { ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import CustomInput from "../Onboarding_Back/CustomInput";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { LoggedInUser, SignUpFormData } from "../../redux";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { encryptData } from "../../encryption";
import { BASE_URL_CLIENT } from "../../../config";
const FloopOtherWebsite = ({ setStep }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupFormData = useSelector((state) => state.signupFormData);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL_SERVER}/signup`,
        signupFormData
      );
      if (response.status == 200) {
        const portfolioId = response.data.data;
        const reviewLink = `${BASE_URL_CLIENT}/${portfolioId}`;
        dispatch(SignUpFormData.setSignUpFormData({ reviewLink: reviewLink }));
        const userData = {
          name: signupFormData.name,
          email: signupFormData.email,
          role: signupFormData.role,
        };
        const encryptedUserData = encryptData(userData);
        dispatch(LoggedInUser.setLoggedInUser(encryptedUserData));
        navigate(`/${portfolioId}`);
      }
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
        onClick={() => {
          setStep(1);
        }}
      >
        <div className="w-[20px] h-[20px] bg-neutral-400 rounded-full flex items-center justify-center">
          <ArrowLeft size={15} strokeWidth={2} />
        </div>
        <Label className="">Go back</Label>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-lg font-bold">
          flooping someone else's portfolio
        </Label>
        <Label className="text-sm text-neutral-400">
          Give feedback to others’ live websites/portfolios
        </Label>
      </div>
      <CustomInput
        label="Website link"
        placeholder="https://"
        type="text"
        name="portfolioLink"
        value={signupFormData.portfolioLink}
      />
      <CustomInput
        label="Who are you sharing feedback to?"
        placeholder="Dairy"
        type="text"
        name="revieweeName"
        value={signupFormData.revieweeName}
      />
      <CustomInput
        label="Email of the person you are giving feedback (optional)"
        placeholder="Dairy@sara.com"
        type="text"
        name="revieweeEmail"
        value={signupFormData.revieweeEmail}
      />
      <Button
        className="bg-[#3a3cff] w-full h-[45px] rounded-4xl hover:bg-[#3a3cff]/95 mt-5 hover:cursor-pointer"
        type="submit"
      >
        Start giving feedback
      </Button>
    </form>
  );
};

export default FloopOtherWebsite;
