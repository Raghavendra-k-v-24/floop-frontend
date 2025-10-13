import Sidebar from "./Sidebar";
import Iframe from "./Iframe";
import { Separator } from "@/components/ui/separator";
const Body = ({ id, data }) => {
  return (
    <div className="w-full flex-1 flex relative overflow-auto px-5 py-2">
      <div className="w-full flex-1 flex rounded-2xl bg-white overflow-hidden">
        <Iframe id={id} data={data} />
        <Separator orientation="vertical" />
        <Sidebar id={id} />
      </div>
    </div>
  );
};

export default Body;
