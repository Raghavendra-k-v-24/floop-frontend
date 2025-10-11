import React from "react";

const FeedbackDetails = ({
  setFeedbackDetailsToggle,
  selectedReviewerName,
  feedbackData,
}) => {
  return (
    <div className="w-full h-full">
      <button onClick={() => setFeedbackDetailsToggle(false)}>hi</button>
      FeedbackDetails
    </div>
  );
};

export default FeedbackDetails;
