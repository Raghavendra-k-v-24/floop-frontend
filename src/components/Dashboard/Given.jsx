import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import EmptyPlaceholder from "./EmptyPlaceholder";
import { useSelector } from "react-redux";
import { decryptData } from "../../encryption";
import DashboardCard from "./DashboardCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
const Given = ({ portfolio }) => {
  const navigate = useNavigate();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const loggedInUser = useSelector((state) => state.loggedInUser.data);
  const decryptUser = decryptData(loggedInUser);
  const given = portfolio.filter(
    (item) => item.reviewerEmail === decryptUser.email
  );

  const givenWithinAWeek = portfolio.filter(
    (item) =>
      item.reviewerEmail === decryptUser.email &&
      new Date(item.createdAt) >= oneWeekAgo
  );

  return (
    <div className="w-[calc(100%-380px)] h-full flex p-10 flex-col gap-5">
      <div className="w-full h-max flex justify-between">
        <Label className="text-xl">Given Feedbacks</Label>
        <Button
          className="rounded-4xl px-6 text-xs text-white bg-[#3A3CFF] hover:cursor-pointer hover:bg-[#3A3CFF]/95"
          onClick={() => navigate("/give-feedback")}
        >
          Give feedback to others
        </Button>
      </div>
      <div className="w-full h-max flex flex-col gap-2 overflow-auto py-2">
        <Label className="text-sm">Recently shared for review</Label>
        <div className="w-full h-max flex gap-10">
          {givenWithinAWeek.length != 0 ? (
            givenWithinAWeek.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <DashboardCard item={item} panel="given" />
              </motion.div>
            ))
          ) : (
            <EmptyPlaceholder message="Your recent website/portfolio links that you share with others will be shown here" />
          )}
        </div>
      </div>
      <div className="w-full h-max flex flex-col gap-2 overflow-auto py-2">
        <Label className="text-sm">All received feedbacks</Label>
        <div className="w-full h-max flex gap-10">
          {given.length != 0 ? (
            given.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
              >
                <DashboardCard item={item} panel="given" />
              </motion.div>
            ))
          ) : (
            <EmptyPlaceholder message="List of all the feedbacks you have given will be showed here" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Given;
