import Ghost_Image from "../../assets/ghost.png";
import { Label } from "@/components/ui/label";
const EmptyPlaceholder = ({ message }) => {
  return (
    <div className="w-full h-[400px] bg-[#F9FAFB] rounded-2xl flex flex-col items-center justify-center gap-3">
      <img src={Ghost_Image} alt="Ghost" className="" />
      <Label className="text-xs text-[#6D6D6D] text-center w-[300px]">
        {message}
      </Label>
    </div>
  );
};

export default EmptyPlaceholder;
