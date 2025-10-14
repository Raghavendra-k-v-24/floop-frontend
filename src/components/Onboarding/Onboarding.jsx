import Floop_Image from "../../assets/floop.png";
import "react-device-frameset/styles/marvel-devices.min.css";
import Background_Image from "../../assets/background.png";
import Form from "./Form";

const Onboarding = () => {
  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center p-10 gap-10 bg-cover`}
      style={{ backgroundImage: `url(${Background_Image})` }}
    >
      <img src={Floop_Image} alt="Floop Image" className="w-[100px]" />
      <Form />
    </div>
    // <div className="w-full h-screen">
    //   <iframe
    //     id="review-iframe"
    //     src="https://www.dharamlokhandwala.work/floop"
    //     width="100%"
    //     height="100%"
    //     style={{ border: "none", overflow: "hidden" }}
    //     sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals"
    //   ></iframe>
    // </div>
  );
};

export default Onboarding;
