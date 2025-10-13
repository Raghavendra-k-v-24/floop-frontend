import { BASE_URL_SERVER } from "../../../config";
const Iframe = ({ id, data }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <iframe
        id="review-iframe"
        src={`${BASE_URL_SERVER}/proxy-dashboard?url=${encodeURIComponent(
          data.portfolioLink
        )}&userId=${encodeURIComponent(id)}`}
        width="100%"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals"
      ></iframe>
    </div>
  );
};

export default Iframe;
