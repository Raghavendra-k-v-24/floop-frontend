import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import Floop_Image from "../../assets/floop.png";
import Mouse_Image from "../../assets/mouse.png";
import Plane_Image from "../../assets/plane.png";
import { Button } from "@/components/ui/button";
const Header = ({ portfolio, panel }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex px-5 py-3 justify-between items-center">
      <div className="flex gap-5 items-end">
        <div
          className="w-max h-[40px] bg-[#F9FAFB] border-[2px] border-[#EBEFF4] rounded-3xl flex items-center gap-3 px-4 cursor-pointer *:cursor-pointer"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <div className="w-[18px] h-[18px] bg-neutral-400 rounded-full flex items-center justify-center">
            <ArrowLeft size={15} strokeWidth={2} />
          </div>
          <Label className="text-xs">Go back</Label>
        </div>
        <div
          className="flex gap-5 h-[30px] hover:cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          <img src={Floop_Image} alt="Floop Image" className="w-max" />
        </div>
      </div>
      <div className="w-[300px] py-2 bg-white text-center text-xs text-[#6D6D6D] rounded-full">
        {portfolio.portfolioLink}
      </div>

      {panel === "received" ? (
        <div className="w-[200px] h-max border-[1px] rounded-full flex items-center justify-center py-2 text-xs bg-white border-[#EBEFF4]">
          Feedback from: {portfolio.reviewerName}
        </div>
      ) : (
        <div className="flex gap-2">
          <Button
            className="bg-white w-[150px] rounded-4xl text-black text-[10px] hover:bg-white hover:cursor-pointer"
            onClick={() => window.open(`/${portfolio._id}`, "_blank")}
          >
            Add Feedback
            <img src={Mouse_Image} alt="Mouse" className="w-[12px] -ml-1" />
          </Button>
          <Button className="bg-white w-[150px] rounded-4xl text-black text-[10px] hover:bg-white hover:cursor-pointer">
            Share feedback
            <img src={Plane_Image} alt="Plane" className="w-[13px] -ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
