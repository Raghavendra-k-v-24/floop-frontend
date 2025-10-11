import Mouse_Image from "../../assets/mouse.png";
import Mouse_Color_Image from "../../assets/mouse_color.png";
import Received from "../../assets/received.png";
import { Label } from "@/components/ui/label";
import Floop_Image from "../../assets/floop.png";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Header = ({ data, commentMode, toggleCommentMode }) => {
  return (
    <div className="w-full flex px-5 py-3 justify-between items-center">
      <div className="flex gap-5 h-[30px]">
        <img src={Floop_Image} alt="Floop Image" className="w-max" />
        {data?.reviewerName && (
          <Label className="text-xs">
            Giving feedback to{" "}
            <span className="text-[#3a3cff]">{data?.reviewerName}</span>
          </Label>
        )}
      </div>
      {data?.portfolioLink && (
        <span className="text-xs bg-[#e5eaf8] text-[#3a3cff] px-5 py-1 rounded-md">
          {data?.portfolioLink}
        </span>
      )}

      <div className="flex gap-2">
        <Button
          className={`bg-white w-max rounded-4xl ${
            commentMode
              ? "text-[#3C3FFE] border-[1px] border-[#3C3FFE]"
              : "text-black"
          } text-[10px] hover:bg-white`}
          onClick={toggleCommentMode}
        >
          Add Feedback
          <img
            src={commentMode ? Mouse_Color_Image : Mouse_Image}
            alt="Mouse"
            className="w-[12px]"
          />
        </Button>
        <Button className="bg-white w-[150px] rounded-4xl text-black text-[10px] hover:bg-white">
          Portfolio review goals
          {/* <img src={Sign_Image} alt="Mouse" className="w-[12px]" /> */}
        </Button>
      </div>
    </div>
  );
};

export default Header;
