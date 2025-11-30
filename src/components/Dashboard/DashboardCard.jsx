import { Label } from "@/components/ui/label";
import Pin_Image from "../../assets/pin.png";
import Message_Image from "../../assets/message.png";
import Copy_Image from "../../assets/copy.png";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@/components/ui/spinner";
import { BASE_URL_CLIENT, BASE_URL_SERVER } from "../../../config";
import { toast } from "sonner";

const DashboardCard = ({ item, panel }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [feedbackCount, setFeedbackCount] = useState(0);
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

  useEffect(() => {
    const getFeedbackCount = async () => {
      const response = await axios.get(
        `${BASE_URL_SERVER}/portfolio-feedback-count?portfolioId=${item._id}`
      );
      const data = response.data.data;
      setFeedbackCount(data.feedbackCount);
    };
    getFeedbackCount();
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
            {item.portfolioLink.length > 30
              ? item.portfolioLink.substring(0, 30) + "...."
              : item.portfolioLink}
          </Label>
        </div>
        <div className="w-full flex gap-1">
          <img src={Message_Image} alt="Pin" className="w-[15px]" />
          <Label className="text-xs text-[#6D6D6D]">
            {feedbackCount === 0
              ? "No comments yet"
              : "Feedbacks: " + feedbackCount}
          </Label>
        </div>
        <div className="flex justify-between">
          {item.isOpened ? (
            <div className="w-max h-max px-2 py-1 border-[1px] border-green-500 rounded-4xl text-[10px] bg-green-200 text-green-800 mt-2">
              Link opened
            </div>
          ) : (
            <div className="w-max h-max px-2 py-1 border-[1px] border-[#FDE68A] rounded-4xl text-[10px] bg-[#FFFBEB] text-[#B5540B] mt-2">
              Link not yet opened
            </div>
          )}

          <div
            className="w-max h-max flex gap-1 px-2 py-1 border-[1px] border-neutral-200 rounded-4xl text-[10px] bg-white text-neutral-500 mt-2"
            onClick={(e) => {
              e.stopPropagation();
              handleCopyLink();
            }}
          >
            Copy link{" "}
            <img src={Copy_Image} alt="Pin" className="w-[13px] h-[13px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
