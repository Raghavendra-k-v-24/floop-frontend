import { Label } from "@/components/ui/label";
import CustomInput from "../GiveFeedback/CustomInput";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { decryptData } from "../../encryption";

import { useState } from "react";
const FloopOtherWebsite = () => {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.loggedInUser.data);
  const decryptUserData = decryptData(loggedInUser);
  const [data, setData] = useState({
    portfolioLink: "",
    associatedToUser: decryptUserData.id,
    revieweeName: "",
    revieweeEmail: "",
    reviewerName: decryptUserData.name,
    reviewerEmail: decryptUserData.email,
    goals: "",
    emailInvites: "",
    accessType: "view",
  });
  console.log(data);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL_SERVER}/portfolio`, data);
      if (response.status == 200) {
        const portfolioId = response.data.data;
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
        value={data.portfolioLink}
        setData={setData}
      />
      <CustomInput
        label="Who are you sharing feedback to?"
        placeholder="Dairy"
        type="text"
        name="revieweeName"
        value={data.revieweeName}
        setData={setData}
      />
      <CustomInput
        label="Email of the person you are giving feedback (optional)"
        placeholder="Dairy@sara.com"
        type="text"
        name="revieweeEmail"
        value={data.revieweeEmail}
        setData={setData}
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
