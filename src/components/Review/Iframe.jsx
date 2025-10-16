import { BASE_URL_SERVER } from "../../../config";
import { Spinner } from "@/components/ui/spinner";
const Iframe = ({ id, portfolio }) => {
  const reviewerName = portfolio?.reviewerName;
  const reviewerEmail = portfolio?.reviewerEmail;
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      {portfolio.portfolioLink ? (
        <iframe
          id="review-iframe"
          src={`${BASE_URL_SERVER}/proxy?url=${encodeURIComponent(
            portfolio.portfolioLink
          )}&portfolioId=${encodeURIComponent(
            id
          )}&reviewerName=${encodeURIComponent(
            reviewerName
          )}&reviewerEmail=${encodeURIComponent(reviewerEmail)}`}
          width="100%"
          height="100%"
          style={{
            border: "none",
            overflow: "hidden",
          }}
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
