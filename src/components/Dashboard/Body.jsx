import Sidebar from "./Sidebar";
import { Separator } from "@/components/ui/separator";
import Received from "./Received";
import Given from "./Given";

const Body = ({ loading, page, portfolio }) => {
  return (
    <div className="w-full flex-1 flex px-5 py-2">
      <div className="w-full flex-1 flex rounded-2xl bg-white">
        {page === "received" ? (
          <Received loading={loading} portfolio={portfolio} />
        ) : (
          <Given loading={loading} portfolio={portfolio} />
        )}
        <Separator orientation="vertical" />
        <Sidebar page={page} portfolio={portfolio} />
      </div>
    </div>
  );
};

export default Body;
