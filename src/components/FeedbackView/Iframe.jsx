import { BASE_URL_SERVER } from "../../../config";
import { Spinner } from "@/components/ui/spinner";
const Iframe = ({ id, portfolio }) => {
  return (
    <div className="w-full h-full flex items-center justify-center rounded-2xl overflow-hidden">
      {portfolio.portfolioLink ? (
        <iframe
          id="review-iframe"
          src={`${BASE_URL_SERVER}/proxy-dashboard?url=${encodeURIComponent(
            portfolio.portfolioLink
          )}&portfolioId=${encodeURIComponent(id)}`}
          width="100%"
          height="100%"
          style={{ border: "none", overflow: "hidden" }}
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals"
        />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner className="size-8" />
        </div>
      )}
    </div>
  );
};

export default Iframe;
