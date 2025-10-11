import CustomInput from "./CustomInput";
import { Button } from "@/components/ui/button";
const ReviwerInfo = ({ setStep, data, setData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="w-full h-full flex flex-col gap-8 items-center">
        <div className="w-full h-full flex gap-5">
          <CustomInput
            label="Who are you sharing to?"
            placeholder="John Doe"
            name="reviewerName"
            value={data.reviewerName}
            data={data}
            setData={setData}
          />
          <CustomInput
            label="Reviewer's email [optional]"
            // placeholder="John Doe"
            type="email"
            name="reviewerEmail"
            value={data.reviewerEmail}
            data={data}
            setData={setData}
            required={false}
          />
        </div>
        <Button
          className="bg-[#3a3cff] w-[400px] h-[40px] rounded-4xl hover:bg-[#3a3cff]/95"
          type="submit"
        >
          Next - add goals
        </Button>
      </div>
    </form>
  );
};

export default ReviwerInfo;
