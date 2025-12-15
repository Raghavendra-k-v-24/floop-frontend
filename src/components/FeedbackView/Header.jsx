import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import Floop_Image from "../../assets/floop.png";
import Mouse_Image from "../../assets/mouse.png";
import Plane_Image from "../../assets/plane.png";
import { Button } from "@/components/ui/button";
import Mouse_Color_Image from "../../assets/mouse_color.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ShareLink from "./ShareLink";
import { useState } from "react";

const Header = ({ portfolio, panel, commentMode, toggleCommentMode }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
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
          {/* {portfolio.portfolioLink} */}
          {portfolio?.portfolioLink?.length > 30
            ? portfolio?.portfolioLink.substring(0, 30) + "...."
            : portfolio?.portfolioLink}
        </div>

        {panel === "received" ? (
          <div className="w-[200px] h-max border-[1px] rounded-full flex items-center justify-center py-2 text-xs bg-white border-[#EBEFF4]">
            Feedback from: {portfolio?.reviewerName?.split(" ")[0]}
          </div>
        ) : (
          <div className="flex gap-2">
            <Button
              className={`bg-white w-[150px] rounded-4xl ${
                commentMode
                  ? "text-[#3C3FFE] border-[1px] border-[#3C3FFE]"
                  : "text-black"
              } text-[10px] hover:bg-white hover:cursor-pointer`}
              onClick={toggleCommentMode}
            >
              {commentMode ? "Exit Feedback" : "Add Feedback"}
              <img
                src={commentMode ? Mouse_Color_Image : Mouse_Image}
                alt="Mouse"
                className="w-[12px] -ml-1"
              />
            </Button>
            <Button
              className="bg-white w-[150px] rounded-4xl text-black text-[10px] hover:bg-white hover:cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Share feedback
              <img src={Plane_Image} alt="Plane" className="w-[13px] -ml-1" />
            </Button>
          </div>
        )}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sharing your portfolio</DialogTitle>
            <DialogDescription>
              You can send this link to the person that will give you feedback
              on your portfolio/website.
            </DialogDescription>
          </DialogHeader>
          <ShareLink />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
