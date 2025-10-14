import Iframe from "./Iframe";
import { Label } from "@/components/ui/label";
import Pin_Image from "../../assets/pin.png";
import Message_Image from "../../assets/message.png";
import { useNavigate } from "react-router";

const DashboardCard = ({ item }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/feedback-view/${item._id}`);
  };
  return (
    <div
      className="min-w-[300px] h-[350px] flex-shrink-0 bg-neutral-100 rounded-2xl overflow-hidden flex flex-col hover:cursor-pointer"
      onClick={handleCardClick}
    >
      <Iframe portfolioLink={item.portfolioLink} />
      <div className="w-full flex flex-col p-5 gap-2 ">
        <Label>{item.reviewerName}</Label>
        <div className="w-full flex gap-1">
          <img src={Pin_Image} alt="Pin" className="w-[15px]" />
          <Label className="text-xs text-[#6D6D6D] ">
            {item.reviewerEmail}
          </Label>
        </div>
        <div className="w-full flex gap-1">
          <img src={Message_Image} alt="Pin" className="w-[15px]" />
          <Label className="text-xs text-[#6D6D6D]">No comments yet</Label>
        </div>
        <div className="w-max h-max px-2 py-1 border-[1px] border-[#FDE68A] rounded-4xl text-[10px] bg-[#FFFBEB] text-[#B5540B] mt-2">
          Link not yet opened
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
