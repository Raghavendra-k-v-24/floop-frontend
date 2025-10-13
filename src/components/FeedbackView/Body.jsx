import Iframe from "./Iframe";
import Sidebar from "./Sidebar";
import { Separator } from "@/components/ui/separator";
const Body = ({ id, portfolio }) => {
  return (
    <div className="w-full flex-1 flex px-5 py-2">
      <div className="w-full flex-1 flex rounded-2xl bg-white">
        <Iframe id={id} portfolio={portfolio} />
        <Separator orientation="vertical" />
        <Sidebar id={id} />
      </div>
    </div>
  );
};

export default Body;
