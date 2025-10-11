import { EllipsisVertical } from "lucide-react";
const SharedInfoCard = ({
  setFeedbackDetailsToggle,
  setSelectedReviewerName,
  name,
  timeline,
  linkStatus,
}) => {
  const handleClick = () => {
    setFeedbackDetailsToggle(true);
    setSelectedReviewerName(name);
  };
  return (
    <div
      className="w-full h-max border-[1px] rounded-md border-[#EBEFF4] custom-border-card-hover p-3 shadow-md flex flex-col gap-1"
      onClick={handleClick}
    >
      <div className="w-full flex justify-between">
        <span className="text-md">{name}</span>
        <EllipsisVertical size={20} />
      </div>
      <span className="text-[10px] text-[#6D6D6D]">{timeline}</span>
      <div className="w-max h-max px-2 py-1 border-[1px] border-[#FDE68A] rounded-4xl text-[10px] bg-[#FFFBEB] text-[#B5540B] mt-2">
        {linkStatus}
      </div>
    </div>
  );
};

export default SharedInfoCard;
