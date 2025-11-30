import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
} from "flowbite-react";
import Bell_Image from "../../assets/bell.png";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { decryptData } from "../../encryption";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";

const Activity = ({ page }) => {
  const loggedInUser = useSelector((state) => state.loggedInUser.data);
  const decryptUser = decryptData(loggedInUser);
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const getActivity = async () => {
      const response = await axios.get(
        `${BASE_URL_SERVER}/history?associatedToUser=${decryptUser.id}`
      );
      setActivities(response.data.data);
    };
    getActivity();
  }, []);

  const groupByDate = (activities) => {
    return activities.reduce((acc, activity) => {
      const dateKey = new Date(activity.createdAt).toISOString().slice(0, 10);

      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }

      acc[dateKey].push(activity);
      return acc;
    }, {});
  };

  const filteredActivities =
    page === "received"
      ? activities.filter((r) => r.type == null || r.type === "Received")
      : activities.filter((r) => r.type == null || r.type === "Given");

  const groupedActivities = groupByDate(filteredActivities);

  return (
    <div className="w-full h-max flex flex-col gap-2">
      <div className="w-full h-max flex justify-between items-center">
        <Label className="text-lg">Activity</Label>
        <img src={Bell_Image} alt="Bell" className="w-[20px] h-[20px]" />
      </div>
      <Timeline className="flex flex-col gap-0">
        {Object.entries(groupedActivities).map(([date, items]) => (
          <TimelineItem key={date}>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>{date}</TimelineTime>

              {items.map((activity, index) => (
                <TimelineBody
                  key={activity._id || index}
                  className="text-xs text-justify mt-2"
                >
                  {activity.message}
                </TimelineBody>
              ))}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Activity;
