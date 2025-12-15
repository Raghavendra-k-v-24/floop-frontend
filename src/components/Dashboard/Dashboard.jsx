import Header from "./Header";
import Body from "./Body";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { useSelector } from "react-redux";
import { decryptData } from "../../encryption";

const Dashboard = () => {
  const [page, setPage] = useState("received");
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(false);
  const loggedInUser = useSelector((state) => state.loggedInUser.data);
  const decryptUser = decryptData(loggedInUser);
  useEffect(() => {
    const getPortfolio = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL_SERVER}/portfolio?email=${decryptUser.email}`
        );
        setPortfolio(response.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getPortfolio();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#EBEFF4]">
      <Header setPage={setPage} />
      <Body loading={loading} page={page} portfolio={portfolio} />
    </div>
  );
};

export default Dashboard;
