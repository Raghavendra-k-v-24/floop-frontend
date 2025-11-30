import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
} from "flowbite-react";
import CircleCursor_Image from "../../assets/circleCursor.png";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { decryptData } from "../../encryption";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { useParams } from "react-router";

const Comments = ({ page }) => {
  const { id } = useParams();
  const loggedInUser = useSelector((state) => state.loggedInUser.data);
  const decryptUser = decryptData(loggedInUser);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const getFeedbacks = async () => {
      const response = await axios.get(
        `${BASE_URL_SERVER}/feedback?associatedToPortfolio=${id}`
      );
      setFeedbacks(response.data.data);
    };
    getFeedbacks();
  }, []);

  return (
    <div className="w-full h-max flex-1 flex-col gap-2 p-2 overflow-auto">
      <div className="w-full h-max flex justify-between items-center">
        <Label className="text-lg">Feedback</Label>
        <img
          src={CircleCursor_Image}
          alt="Bell"
          className="w-[20px] h-[20px]"
        />
      </div>
      {feedbacks.map((feedback) => (
        <div className="border border-[#EBEFF4] rounded-md p-2 text-sm mt-3">
          {feedback?.feedback}
        </div>
      ))}
    </div>
  );
};

export default Comments;
