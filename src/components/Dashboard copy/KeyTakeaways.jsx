import React from "react";
import Star from "../../assets/star.png";
import Ghost from "../../assets/ghost.png";
const KeyTakeaways = () => {
  return (
    <div className="w-full h-max rounded-2xl custom-border-card p-3 gap-2 flex flex-col">
      <div className="flex justify-between">
        <span className="font-medium">Key takeaways</span>
        <img src={Star} alt="Star" className="w-[20px]" />
      </div>
      <div className="w-full flex-1 flex bg-[#F9FAFB] rounded-2xl py-5 px-3 border-[#EBEFF4 border-2 flex-col gap-5">
        <img src={Ghost} alt="Ghost" className="w-[40px]" />
        <span className="text-xs text-[#6D6D6D]">
          You will see 3 takeaways from all your feedbacks here.
        </span>
      </div>
    </div>
  );
};

export default KeyTakeaways;
