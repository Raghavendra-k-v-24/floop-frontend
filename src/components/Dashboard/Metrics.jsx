import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { BASE_URL_SERVER } from "../../../config";
import { useSelector } from "react-redux";
import { decryptData } from "../../encryption";
import axios from "axios";
const Metrics = ({ page, portfolio }) => {
  const [receivedFeedbackCount, setReceivedFeedbackCount] = useState([]);
  const [givenFeedbackCount, setGivenFeedbackCount] = useState([]);
  const loggedInUser = useSelector((state) => state.loggedInUser.data);
  const decryptUser = decryptData(loggedInUser);

  const receivedPortfolioCount = portfolio.filter(
    (item) => item.revieweeEmail === decryptUser.email
  ).length;

  const givenPortfolioCount = portfolio.filter(
    (item) => item.reviewerEmail === decryptUser.email
  ).length;

  useEffect(() => {
    if (page === "received") {
      const getFeedbackCount = async () => {
        const response = await axios.get(
          `${BASE_URL_SERVER}/feedback-count?email=${decryptUser.email}`
        );
        const data = response.data.data;
        setReceivedFeedbackCount(data.receivedFeedbackCount);
        setGivenFeedbackCount(data.givenFeedbackCount);
      };
      getFeedbackCount();
    }
  }, []);
  return (
    <div className="w-full h-max flex flex-col gap-2">
      <Label className="text-lg">Metrics</Label>
      <div className="w-full h-[130px] border-2 border-[#EBEFF4] rounded-2xl px-8 py-5 flex gap-5">
        <div className="flex flex-col gap-2">
          <Label className="text-3xl">
            {page === "received" ? receivedPortfolioCount : givenPortfolioCount}
          </Label>
          <Label className="text-xs text-[#6D6D6D] w-[100px]">
            {page === "received"
              ? "Total reviews received"
              : "Total websites reviewed"}
          </Label>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-3xl">
            {page === "received" ? receivedFeedbackCount : givenFeedbackCount}
          </Label>
          <Label className="text-xs text-[#6D6D6D] w-[100px]">
            {page === "received"
              ? "Total comments received"
              : "Total feedbacks given"}
          </Label>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
