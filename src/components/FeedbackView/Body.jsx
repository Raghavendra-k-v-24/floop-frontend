import Iframe from "./Iframe";
import Sidebar from "./Sidebar";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
const Body = ({ id, portfolio, commentMode }) => {
  return (
    <div className="w-full flex-1 flex px-5 py-2">
      <div className="w-full flex-1 flex rounded-2xl bg-white">
        <div className="w-full flex flex-col">
          {commentMode && (
            <div className="w-full bg-[#3C3FFE] rounded-t-2xl flex items-center justify-center">
              <Label className="text-xs text-white py-1">
                Click anywhere on the screen to give feedback
              </Label>
            </div>
          )}
          <Iframe id={id} portfolio={portfolio} />
        </div>
        <Separator orientation="vertical" />
        <Sidebar id={id} />
      </div>
    </div>
  );
};

export default Body;
