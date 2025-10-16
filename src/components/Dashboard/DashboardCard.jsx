import { Label } from "@/components/ui/label";
import Pin_Image from "../../assets/pin.png";
import Message_Image from "../../assets/message.png";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@/components/ui/spinner";
import { BASE_URL_CLIENT } from "../../../config";
import { toast } from "sonner";

const DashboardCard = ({ item, panel }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/feedback-view/${panel}/${item._id}`);
  };
  const [image, setImage] = useState("");
  useEffect(() => {
    const getScreenshot = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://shot.screenshotapi.net/v3/screenshot?token=9S87NAY-09KM8QF-HT232X4-YBV34HF&fresh=true&url=${item.portfolioLink}&output=image&file_type=png&wait_for_event=load`
        );
        console.log(response.status);
        if (response.status === 200) {
          setImage(response.request.responseURL);
        }
      } catch (err) {
        setImage(`${BASE_URL_CLIENT}/ghost.png`);
      } finally {
        setLoading(false);
      }
    };
    getScreenshot();
  }, []);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(`${BASE_URL_CLIENT}/${item._id}`);
    toast.success("Link copied to Clipboard!");
  };
  return (
    <div
      className="w-[300px] h-[350px] flex-shrink-0 bg-neutral-100 rounded-2xl overflow-hidden flex flex-col hover:cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="w-full h-[210px] flex items-center justify-center">
        {loading ? (
          <Spinner />
        ) : (
          <img src={image} alt="Image" className="w-max h-max" />
        )}
      </div>
      <div className="w-full flex flex-col p-5 gap-2 ">
        <Label>{item.reviewerName}</Label>
        <div className="w-full flex gap-1">
          <img src={Pin_Image} alt="Pin" className="w-[15px]" />
          <Label className="text-xs text-[#6D6D6D] ">
            {item.portfolioLink}
          </Label>
        </div>
        <div className="w-full flex gap-1">
          <img src={Message_Image} alt="Pin" className="w-[15px]" />
          <Label className="text-xs text-[#6D6D6D]">No comments yet</Label>
        </div>
        <div className="flex justify-between">
          <div className="w-max h-max px-2 py-1 border-[1px] border-[#FDE68A] rounded-4xl text-[10px] bg-[#FFFBEB] text-[#B5540B] mt-2">
            Link not yet opened
          </div>
          <div
            className="w-max h-max px-2 py-1 border-[1px] border-neutral-200 rounded-4xl text-[10px] bg-white text-neutral-500 mt-2"
            onClick={(e) => {
              e.stopPropagation(); // 🚫 prevents triggering outer click
              handleCopyLink();
            }}
          >
            Copy link
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
