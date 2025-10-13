import Iframe from "./Iframe";
import { Label } from "@/components/ui/label";
const Body = ({ id, portfolio, commentMode }) => {
  return (
    <div className="w-full flex-1 flex overflow-auto px-5 py-2 rounded-2xl">
      <div className="w-full flex-1 flex flex-col rounded-2xl bg-white overflow-hidden">
        {commentMode && (
          <div className="w-full bg-[#3C3FFE] rounded-t-2xl flex items-center justify-center">
            <Label className="text-xs text-white py-1">
              Click anywhere on the screen to give feedback
            </Label>
          </div>
        )}

        <Iframe id={id} portfolio={portfolio} />
      </div>
    </div>
  );
};

export default Body;
