import CustomInput from "../ShareYourWebsite/CustomInput";
import { Button } from "@/components/ui/button";

const ReviewerDetails = ({ setInternalStep, data, setData }) => {
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
        value={data.portfolioLink}
        setData={setData}
      />
      <CustomInput
        label="Reviewer's name"
        placeholder="Daisy"
        type="text"
        name="reviewerName"
        value={data.reviewerName}
        setData={setData}
      />
      <CustomInput
        label="Reviewer's email (optional)"
        placeholder="Daisy@daily.com"
        type="text"
        name="reviewerEmail"
        required={false}
        value={data.reviewerEmail}
        setData={setData}
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
