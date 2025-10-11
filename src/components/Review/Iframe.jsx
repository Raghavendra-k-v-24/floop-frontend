const Iframe = ({ id, data }) => {
  const reviewerName = data?.reviewerName;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <iframe
        id="review-iframe"
        src={`http://localhost:3000/proxy?url=${encodeURIComponent(
          data.portfolioLink
        )}&userId=${encodeURIComponent(id)}&reviewerName=${encodeURIComponent(
          reviewerName
        )}`}
        width="100%"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals"
      ></iframe>
    </div>
  );
};

export default Iframe;
