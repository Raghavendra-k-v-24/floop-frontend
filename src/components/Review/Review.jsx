import Header from "./Header";
import Body from "./Body";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
const Review = () => {
  const [portfolio, setPortfolio] = useState({});
  const [commentMode, setCommentMode] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const getApplication = async () => {
      const response = await axios.get(`${BASE_URL_SERVER}/portfolio?id=${id}`);
      const data = response.data.data;
      setPortfolio(data);
    };
    getApplication();
  }, [id]);

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
        commentMode={commentMode}
        toggleCommentMode={toggleCommentMode}
      />
      <Body id={id} portfolio={portfolio} commentMode={commentMode} />
    </div>
  );
};

export default Review;
