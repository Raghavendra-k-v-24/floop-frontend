import { Label } from "@/components/ui/label";
import CustomInput from "../GiveFeedback/CustomInput";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { decryptData } from "../../encryption";
import { ArrowLeft } from "lucide-react";
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
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL_SERVER}/portfolio`, data);
      if (response.status == 200) {
        const portfolioId = response.data.data;
        navigate(`/${portfolioId}`);
        await axios.post(`${BASE_URL_SERVER}/history`, {
          associatedToUser: decryptUserData.id,
          associatedToPortfolio: portfolioId,
          message: `You created ${
            data?.portfolioLink?.length > 30
              ? data?.portfolioLink.substring(0, 30) + "...."
              : data?.portfolioLink
          } for ${data.revieweeName} to review`,
          type: "Given",
          eventType: "CREATED",
          activityDate: new Date().toISOString().split("T")[0],
        });
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
      <div
        className="w-[120px] h-[40px] bg-[#F9FAFB] border-[2px] border-[#EBEFF4] rounded-3xl flex items-center justify-between px-4"
        onClick={() => navigate("/dashboard")}
      >
        <div className="w-[20px] h-[20px] bg-neutral-400 rounded-full flex items-center justify-center">
          <ArrowLeft size={15} strokeWidth={2} />
        </div>
        <Label className="">Go back</Label>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-lg font-bold">
          flooping{" "}
          <span className="text-[#3A3CFF]">someone else's portfolio</span>
        </Label>
        <Label className="text-sm text-[#6D6D6D] font-light">
          Give feedback to others’ live websites/portfolios
        </Label>
      </div>
      <CustomInput
        label="Website link"
        placeholder="https://"
        type="url"
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
        type="email"
        name="revieweeEmail"
        value={data.revieweeEmail}
        setData={setData}
        required={false}
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
