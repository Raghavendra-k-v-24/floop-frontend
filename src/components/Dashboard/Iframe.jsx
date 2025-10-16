import { BASE_URL_SERVER } from "../../../config";
const Iframe = ({ portfolioLink }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full h-full overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-gray-600"></div>
        </div>
      )}
      <iframe
        id="review-iframe"
        src={`${BASE_URL_SERVER}/proxy-preview?url=${encodeURIComponent(
          portfolioLink
        )}`}
        width="100%"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals"
        onLoad={() => setLoading(false)}
      ></iframe>
    </div>
  );
};

export default Iframe;
