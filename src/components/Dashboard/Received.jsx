import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import EmptyPlaceholder from "./EmptyPlaceholder";
import { useSelector } from "react-redux";
import { decryptData } from "../../encryption";
import DashboardCard from "./DashboardCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
const Received = ({ portfolio }) => {
  const navigate = useNavigate();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const loggedInUser = useSelector((state) => state.loggedInUser.data);
  const decryptUser = decryptData(loggedInUser);
  const received = portfolio.filter(
    (item) => item.revieweeEmail === decryptUser.email
  );

  const receivedWithinAWeek = portfolio
    .filter(
      (item) =>
        item.revieweeEmail === decryptUser.email &&
        new Date(item.createdAt) >= oneWeekAgo
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <div className="w-[calc(100%-380px)] h-full flex p-10 flex-col gap-5 ">
      <div className="w-full h-max flex justify-between">
        <Label className="text-xl">Received Feedbacks</Label>
        <Button
          className="rounded-4xl px-6 text-xs text-white bg-[#3A3CFF] hover:cursor-pointer hover:bg-[#3A3CFF]/95"
          onClick={() => navigate("/share-website")}
        >
          Share your website
        </Button>
      </div>
      <div className="w-full h-max flex flex-col gap-2 py-2">
        <Label className="text-sm">Recently shared for review</Label>
        <div className="w-full grid grid-cols-4 gap-10">
          {receivedWithinAWeek.length != 0 ? (
            receivedWithinAWeek.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <DashboardCard item={item} panel="received" />
              </motion.div>
            ))
          ) : (
            <EmptyPlaceholder message="Your recent website/portfolio links that you share with others will be shown here" />
          )}
        </div>
      </div>
      <div className="w-full h-max flex flex-col gap-2 py-2">
        <Label className="text-sm">All received feedbacks</Label>
        <div className="w-full grid grid-cols-4 gap-10">
          {received.length != 0 ? (
            received.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <DashboardCard item={item} panel="received" />
              </motion.div>
            ))
          ) : (
            <EmptyPlaceholder message="List of all the feedbacks you have received will be showed here" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Received;
