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
import { LoggedInUser, SignUpFormData } from "../../redux";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { decryptData, encryptData } from "../../encryption";
import { BASE_URL_CLIENT } from "../../../config";
import { useState } from "react";

const ShareLink = ({ data, setData }) => {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.loggedInUser.data);
  const decryptUserData = decryptData(loggedInUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setData((prev) => ({ ...prev, "accessType": value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const parts = data.reviewLink.split("/");
      const portfolioId = parts[parts.length - 1];
      console.log(portfolioId);
      await axios.put(`${BASE_URL_SERVER}/portfolio`, {
        portfolioId: portfolioId,
        emailInvites: data.emailInvites,
        accessType: data.accessType,
      });
      await navigator.clipboard.writeText(`${BASE_URL_CLIENT}/${portfolioId}`);
      toast.success("Copied to clipboard");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response.data.data);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="flex gap-2">
        <Input
          type="text"
          name="emailInvites"
          placeholder="Add comma seperated emails to invite"
          value={data.emailInvites}
          onChange={handleChange}
          disabled={true}
        />
        <Button
          className="bg-[#6D6D6D] rounded-lg"
          type="submit"
          disabled={true}
        >
          Invite
        </Button>
      </div>
      <Label className="text-xs text-neutral-500">WHO HAS ACCESS</Label>
      <div className="flex justify-between">
        <Label className="text-sm">Anyone with link</Label>
        <Select
          value={data.accessType}
          onValueChange={handleSelectChange}
          disabled={true}
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
        <Label className="text-sm">{decryptUserData.name} (You)</Label>
        <Label className="text-sm">Owner</Label>
      </div>
      <Button
        className="bg-[#3a3cff] w-full h-[45px] rounded-4xl hover:bg-[#3a3cff]/95 mt-2 flex justify-between hover:cursor-pointer"
        type="submit"
        onClick={handleFormSubmit}
      >
        Copy link and go to dashboard
        <img src={Copy_Image} alt="Copy" className="w-[18px]" />
      </Button>
    </div>
  );
};

export default ShareLink;
