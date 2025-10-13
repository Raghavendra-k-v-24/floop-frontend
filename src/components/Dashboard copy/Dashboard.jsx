import Header from "./Header";
import Body from "./Body";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";

const Dashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const getApplication = async () => {
      const response = await axios.get(`${BASE_URL_SERVER}/user/${id}`);
      const data = response.data.data;
      setData(data);
    };
    getApplication();
  }, [id]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#EBEFF4]">
      <Header />
      <Body id={id} data={data} />
    </div>
  );
};

export default Dashboard;
