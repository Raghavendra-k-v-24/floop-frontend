import Activity from "./Activity";
import Metrics from "./Metrics";

// import { HiArrowNarrowRight } from "react-icons/hi";
const Sidebar = ({ page, portfolio }) => {
  return (
    <div className="w-[380px] h-full p-5 flex flex-col gap-5 overflow-auto">
      <Metrics page={page} portfolio={portfolio} />
      <Activity />
    </div>
  );
};

export default Sidebar;
