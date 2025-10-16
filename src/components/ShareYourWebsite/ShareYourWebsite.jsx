import Background_Image from "../../assets/background.png";
import Floop_Image from "../../assets/floop.png";
import Form from "./Form";
const ShareYourWebsite = () => {
  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center p-10 gap-10 bg-cover`}
      style={{ backgroundImage: `url(${Background_Image})` }}
    >
      <img src={Floop_Image} alt="Floop Image" className="w-[100px]" />
      <Form />
    </div>
  );
};

export default ShareYourWebsite;
