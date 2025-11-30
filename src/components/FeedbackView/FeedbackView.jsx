import Header from "./Header";
import Body from "./Body";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { useParams } from "react-router";

const FeedbackView = () => {
  const { id, panel } = useParams();
  const [portfolio, setPortfolio] = useState([]);
  const [commentMode, setCommentMode] = useState(false);
  useEffect(() => {
    const getPortfolio = async () => {
      const response = await axios.get(`${BASE_URL_SERVER}/portfolio?id=${id}`);
      setPortfolio(response.data.data);
    };
    getPortfolio();
  }, []);

  const toggleCommentMode = () => {
    setCommentMode((prev) => !prev);
    const iframe = document.getElementById("review-iframe");
    iframe?.contentWindow?.postMessage(
      { type: "toggleCommentMode", mode: !commentMode },
      "*"
    );
  };
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#EBEFF4]">
      <Header
        portfolio={portfolio}
        panel={panel}
        commentMode={commentMode}
        toggleCommentMode={toggleCommentMode}
      />
      <Body id={id} portfolio={portfolio} commentMode={commentMode} />
    </div>
  );
};

export default FeedbackView;
