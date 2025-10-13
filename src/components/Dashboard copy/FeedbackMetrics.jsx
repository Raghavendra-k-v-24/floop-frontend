const FeedbackMetrics = ({ feedbackData }) => {
  const reviewedBy = [...new Set(feedbackData?.map((item) => item.reviewedBy))];
  return (
    <div className="w-full h-max flex flex-col gap-2">
      <span className="text-lg">Feedback Metrics</span>
      <div className="w-full h-full flex flex-col gap-3">
        <span className="text-xs text-[#6D6D6D]">This week</span>
        <div className="w-full flex gap-2">
          <div className="w-full h-max flex flex-col gap-1 border-[1px] border-[#EBEFF4] rounded-lg justify-center p-3">
            <span className="text-2xl">1</span>
            <span className="text-[10px] text-[#6D6D6D]">Total Reviews</span>
          </div>
          <div className="w-full h-max flex flex-col gap-1 border-[1px] border-[#EBEFF4] rounded-lg justify-center p-3">
            <span className="text-2xl">0</span>
            <span className="text-[10px] text-[#6D6D6D]">
              Feedbacks received
            </span>
          </div>
        </div>
        <span className="text-xs text-[#6D6D6D]">All Time</span>
        <div className="w-full flex gap-2">
          <div className="w-full h-max flex flex-col gap-1 border-[1px] border-[#EBEFF4] rounded-lg justify-center p-3">
            <span className="text-2xl">1</span>
            <span className="text-[10px] text-[#6D6D6D]">Total Reviews</span>
          </div>
          <div className="w-full h-max flex flex-col gap-1 border-[1px] border-[#EBEFF4] rounded-lg justify-center p-3">
            <span className="text-2xl">{reviewedBy.length}</span>
            <span className="text-[10px] text-[#6D6D6D]">
              Feedbacks received
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackMetrics;
