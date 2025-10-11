import React, { useEffect, useState } from "react";

import RecentlyShared from "./RecentlyShared";
import FeedbackMetrics from "./FeedbackMetrics";
import KeyTakeaways from "./KeyTakeaways";
import axios from "axios";
import BASE_URL from "../../../config";
import FeedbackDetails from "./FeedbackDetails";
const Sidebar = ({ id }) => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [feeedbackDetailsToggle, setFeedbackDetailsToggle] = useState(false);
  const [selectedReviewerName, setSelectedReviewerName] = useState(null);

  useEffect(() => {
    const getFeedback = async () => {
      const response = await axios.get(`${BASE_URL}/feedback/${id}`);
      const data = response.data.data;
      setFeedbackData(data);
    };
    getFeedback();
  }, [id]);
  return (
    <div className="w-[380px] h-full p-2 flex flex-col gap-5 overflow-auto">
      {feeedbackDetailsToggle ? (
        <FeedbackDetails
          setFeedbackDetailsToggle={setFeedbackDetailsToggle}
          selectedReviewerName={selectedReviewerName}
          feedbackData={feedbackData}
        />
      ) : (
        <>
          <KeyTakeaways />
          <RecentlyShared
            feedbackData={feedbackData}
            setFeedbackDetailsToggle={setFeedbackDetailsToggle}
            setSelectedReviewerName={setSelectedReviewerName}
          />
          <FeedbackMetrics feedbackData={feedbackData} />
        </>
      )}
    </div>
  );
};

export default Sidebar;
