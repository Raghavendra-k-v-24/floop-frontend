import Multiple_Users from "../../assets/multiple_users.png";
import SharedInfoCard from "./SharedInfoCard";
const RecentlyShared = ({
  feedbackData,
  setFeedbackDetailsToggle,
  setSelectedReviewerName,
}) => {
  const reviewedBy = [...new Set(feedbackData?.map((item) => item.reviewedBy))];
  return (
    <>
      <div className="w-full h-max flex flex-col gap-1">
        <div className="w-full h-full flex justify-between items-center">
          <span className="text-lg">Recently shared</span>
          <img src={Multiple_Users} alt="Users" className="size-[20px]" />
        </div>
        <span className="text-[11px] text-[#6D6D6D]">
          Shared with 3 this week
        </span>
      </div>
      {reviewedBy.map((item, index) => (
        <SharedInfoCard
          setFeedbackDetailsToggle={setFeedbackDetailsToggle}
          setSelectedReviewerName={setSelectedReviewerName}
          name={item}
          timeline="shared 1 week ago"
          linkStatus="Link not yet opened"
        />
      ))}
    </>
  );
};

export default RecentlyShared;
