import { useSelector } from "react-redux";
import CustomInput from "../Onboarding_Back/CustomInput";
import { Button } from "@/components/ui/button";

const ReviewerDetails = ({ setInternalStep }) => {
  const signupFormData = useSelector((state) => state.signupFormData);
  const handleFormSubmit = () => {
    setInternalStep(1);
  };
  return (
    <form
      className="w-full h-full flex flex-col gap-5"
      onSubmit={handleFormSubmit}
    >
      <CustomInput
        label="Your portfolio link"
        placeholder="https://"
        type="url"
        name="portfolioLink"
        value={signupFormData.portfolioLink}
      />
      <CustomInput
        label="Reviewer's name"
        placeholder="Daisy"
        type="text"
        name="reviewerName"
        value={signupFormData.reviewerName}
      />
      <CustomInput
        label="Reviewer's email (optional)"
        placeholder="Daisy@daily.com"
        type="text"
        name="reviewerEmail"
        required={false}
        value={signupFormData.reviewerEmail}
      />
      <Button
        className="bg-[#3a3cff] w-full h-[45px] rounded-4xl hover:bg-[#3a3cff]/95 mt-5 hover:cursor-pointer"
        type="submit"
      >
        Next - add goals
      </Button>
    </form>
  );
};

export default ReviewerDetails;
