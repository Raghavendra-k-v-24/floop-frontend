import Activity from "./Activity";
import Comments from "./Comments";
const Sidebar = () => {
  return (
    <div className="w-[380px] h-full p-2 flex flex-col gap-5 overflow-auto">
      <Activity />
      <Comments />
    </div>
  );
};
export default Sidebar;
