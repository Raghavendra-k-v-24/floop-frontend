import Iframe from "./Iframe";
const Body = ({ id, data }) => {
  return (
    <div className="w-full flex-1 flex relative overflow-auto px-5 py-2">
      <div className="w-full h-full flex rounded-2xl bg-white overflow-hidden">
        <Iframe id={id} data={data} />
      </div>
    </div>
  );
};

export default Body;
