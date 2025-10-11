import { ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Copy_Image from "../../assets/copy_white.png";
import { useDispatch, useSelector } from "react-redux";
import { SignUpFormData } from "../../redux";
const ShareLink = ({ setStep }) => {
  const dispatch = useDispatch();
  const signupFormData = useSelector((state) => state.signupFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(SignUpFormData.setSignUpFormData({ [name]: value }));
  };

  const handleSelectChange = (value) => {
    dispatch(SignUpFormData.setSignUpFormData({ "accessType": value }));
  };
  return (
    <div className="w-full h-full flex flex-col gap-5">
      {/* Back button */}
      <div
        className="w-[120px] h-[40px] bg-[#F9FAFB] border-[2px] border-[#EBEFF4] rounded-3xl flex items-center justify-between px-4"
        onClick={() => {
          setStep(2);
        }}
      >
        <div className="w-[20px] h-[20px] bg-neutral-400 rounded-full flex items-center justify-center">
          <ArrowLeft size={15} strokeWidth={2} />
        </div>
        <Label className="">Go back</Label>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-lg font-bold">Sharing your portfolio</Label>
        <Label className="text-sm text-neutral-400">
          You can send this link to the person that will give you feedback on
          your portfolio/website.
        </Label>
      </div>
      <div className="flex gap-2">
        <Input
          type="text"
          name="emailInvites"
          placeholder="Add comma seperated emails to invite"
          value={signupFormData.emailInvites}
          onChange={handleChange}
        />
        <Button className="bg-[#6D6D6D] rounded-lg" type="submit">
          Invite
        </Button>
      </div>
      <Label className="text-xs text-neutral-500">WHO HAS ACCESS</Label>
      <div className="flex justify-between">
        <Label className="text-sm">Anyone with link</Label>
        <Select
          value={signupFormData.accessType}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger className="w-max">
            <SelectValue placeholder="Access Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="view">can view</SelectItem>
            <SelectItem value="edit">can edit</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-between">
        <Label className="text-sm">{signupFormData.name} (You)</Label>
        <Label className="text-sm">Owner</Label>
      </div>
      <Button
        className="bg-[#3a3cff] w-full h-[45px] rounded-4xl hover:bg-[#3a3cff]/95 mt-2 flex justify-between"
        type="submit"
      >
        Copy link and go to dashboard
        <img src={Copy_Image} alt="Copy" className="w-[18px]" />
      </Button>
    </div>
  );
};

export default ShareLink;
