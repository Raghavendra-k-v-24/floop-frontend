import { BASE_URL_SERVER } from "../../../config";
const Iframe = ({ id, portfolio }) => {
  const reviewerName = portfolio?.reviewerName;
  const reviewerEmail = portfolio?.reviewerEmail;
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
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
      ></iframe>
    </div>
  );
};

export default Iframe;
