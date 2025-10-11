import Mouse_Image from "../../assets/mouse.png";
import Sign_Image from "../../assets/sign.png";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Floop_Image from "../../assets/floop.png";
import { Button } from "@/components/ui/button";
import Review from "../Review/Review";
const Preview = ({ data }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <Card className="h-[1000px] w-[1300px] border-0 shadow-md gap-1 bg-[#EBEFF4]">
        <CardHeader className="relative flex items-center py-1 justify-between">
          <div className="flex gap-5">
            <img src={Floop_Image} alt="Floop Image" className="w-[50px]" />
            {data.reviewerName && (
              <Label className="text-xs">
                Getting feedback from{" "}
                <span className="text-[#3a3cff]">{data.reviewerName}</span>
              </Label>
            )}
          </div>
          {data.portfolioLink && (
            <span className="absolute left-[45%] text-xs max-w-[200px] text-nowrap overflow-hidden bg-[#e5eaf8] text-[#3a3cff] px-5 py-1 rounded-md">
              {data.portfolioLink}
            </span>
          )}
          <div className="flex gap-2">
            <Button className="bg-white w-max rounded-4xl text-black text-[10px] hover:bg-white">
              Add Feedback
              <img src={Mouse_Image} alt="Mouse" className="w-[12px]" />
            </Button>
            <Button className="bg-white w-[150px] rounded-4xl text-black text-[10px] hover:bg-white">
              Portfolio review goals
              <img src={Sign_Image} alt="Mouse" className="w-[12px]" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="w-full h-full py-5 bg-white flex relative justify-center">
          <div className="absolute w-max h-max rounded-4xl px-5 py-2 shadow-xl">
            <div className="flex gap-5 text-xs font-medium">
              <span>WORK</span>
              <span>PLAY</span>
              <span>LIFE</span>
              <span>STARTUP</span>
            </div>
          </div>
          <div className="w-full flex-1 flex relative overflow-auto">
            {data.portfolioLink && (
              <iframe
                id="review-iframe"
                src={`http://localhost:3000/proxy-preview?url=${encodeURIComponent(
                  data?.portfolioLink
                )}`}
                width="100%"
                height="100%"
                style={{ border: "none", overflow: "auto" }}
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals"
              ></iframe>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Preview;
