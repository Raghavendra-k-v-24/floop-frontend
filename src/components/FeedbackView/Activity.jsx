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
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { useParams } from "react-router";

const Activity = ({ page }) => {
  const { id } = useParams();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const getActivity = async () => {
      const response = await axios.get(
        `${BASE_URL_SERVER}/history?associatedToPortfolio=${id}`
      );
      setActivities(response.data.data);
    };
    getActivity();
  }, []);

  const groupByActivityDate = (activities) => {
    return activities.reduce((acc, activity) => {
      const dateKey =
        activity.activityDate ||
        new Date(activity.createdAt).toISOString().slice(0, 10);

      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(activity);

      return acc;
    }, {});
  };

  const groupedActivities = groupByActivityDate(activities);

  const sortedDates = Object.keys(groupedActivities).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  sortedDates.forEach((date) => {
    groupedActivities[date].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  });

  return (
    <div className="w-full h-max flex-1 flex-col gap-2 overflow-auto p-2">
      <div className="w-full h-max flex justify-between items-center">
        <Label className="text-lg">Activity</Label>
        <img src={Bell_Image} alt="Bell" className="w-[20px] h-[20px]" />
      </div>
      {/* <Timeline className="flex flex-col gap-0">
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
      </Timeline> */}
      <Timeline className="flex flex-col gap-0">
        {sortedDates.map((date) => (
          <TimelineItem key={date}>
            <TimelinePoint />
            <TimelineContent>
              {/* ✅ Logical activity date */}
              <TimelineTime>
                {new Date(date).toLocaleDateString(undefined, {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </TimelineTime>

              {groupedActivities[date].map((activity) => (
                <TimelineBody
                  key={activity._id}
                  className="text-xs text-justify mt-2"
                >
                  {activity.message}

                  {/* ✅ Exact time */}
                  <span className="block text-[10px] text-gray-500 mt-0.5">
                    {new Date(activity.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
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
