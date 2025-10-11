import { Label } from "@/components/ui/label";
import CustomInput from "../Onboarding_Back/CustomInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelector } from "react-redux";
import { useState } from "react";
const UserDetails = ({ setStep }) => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const signupFormData = useSelector((state) => state.signupFormData);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const confirmPassword = e.target.confirmPassword.value;
    if (signupFormData.password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
      setStep(1);
    }
  };

  return (
    <form
      className="w-full h-full flex flex-col gap-5"
      onSubmit={handleFormSubmit}
    >
      <div className="w-full flex justify-between">
        <Label className="text-lg">Sign up</Label>
        <Label className="text-lg text-neutral-400">Login?</Label>
      </div>
      <CustomInput
        label="Your name"
        placeholder="John Deer"
        type="text"
        name="name"
        value={signupFormData.name}
      />
      <CustomInput
        label="Your email"
        placeholder="john.deer@example.com"
        type="email"
        name="email"
        value={signupFormData.email}
      />
      <CustomInput
        label="Create a password"
        placeholder="**********"
        type="password"
        name="password"
        value={signupFormData.password}
      />
      <CustomInput
        label="Confirm password"
        placeholder="**********"
        type="password"
        name="confirmPassword"
        passwordMatch={passwordMatch}
      />
      <div className="flex items-start gap-3">
        <Checkbox id="terms" required />
        <Label
          htmlFor="terms"
          className="text-xs text-justify text-neutral-500"
        >
          By creating an account, you understand and agree to floop Terms and
          Conditions. You also acknowledge our Cookie and Privacy Policies.
        </Label>
      </div>
      <Button
        className="bg-[#3a3cff] w-full h-[45px] rounded-4xl hover:bg-[#3a3cff]/95"
        type="submit"
      >
        Continue
      </Button>
      <Label className="w-full flex justify-center text-xs text-neutral-500">
        Or
      </Label>
      <Label className="w-full flex justify-center text-xs text-neutral-500">
        Sign up with google
      </Label>
    </form>
  );
};

export default UserDetails;
