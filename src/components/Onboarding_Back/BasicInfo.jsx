import CustomInput from "./CustomInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const BasicInfo = ({ setStep, data, setData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(1);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="w-full h-full flex flex-col gap-8 items-center">
        <div className="w-full h-full flex gap-5">
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <CustomInput
              label="Your name"
              placeholder="Name"
              name="name"
              value={data?.name}
              data={data}
              setData={setData}
            />
            <CustomInput
              label="Create a password"
              placeholder="********"
              type="password"
              name="password"
              value={data?.password}
              data={data}
              setData={setData}
            />
          </div>
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <CustomInput
              label="Your email"
              placeholder="Email"
              type="email"
              name="email"
              value={data.email}
              data={data}
              setData={setData}
            />
            <CustomInput
              label="Your portfolio link"
              placeholder="Link"
              name="portfolioLink"
              value={data.portfolioLink}
              data={data}
              setData={setData}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="terms" required />
          <Label htmlFor="terms">
            I agree with privacy policy and terms and conditions
          </Label>
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

export default BasicInfo;
