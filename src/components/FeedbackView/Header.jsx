import Floop_Image from "../../assets/floop.png";
const Header = ({ portfolio }) => {
  return (
    <div className="w-full flex px-5 py-3 justify-between items-center">
      <div className="flex gap-5 h-[30px]">
        <img src={Floop_Image} alt="Floop Image" className="w-max" />
      </div>

      <div className="w-[300px] py-1 bg-white text-center text-xs text-[#6D6D6D] rounded-full">
        {portfolio.portfolioLink}
      </div>

      <div className="w-[200px] h-max border-[1px] rounded-full flex items-center justify-center py-2 text-xs bg-white border-[#EBEFF4]">
        Feedback from: {portfolio.reviewerName}
      </div>
    </div>
  );
};

export default Header;
