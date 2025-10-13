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

const Activity = () => {
  return (
    <div className="w-full h-max flex flex-col gap-2">
      <div className="w-full h-max flex justify-between items-center">
        <Label className="text-lg">Activity</Label>
        <img src={Bell_Image} alt="Bell" className="w-[20px] h-[20px]" />
      </div>
      <Timeline>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>13-10-2025</TimelineTime>
            <TimelineBody className="text-xs text-justify">
              You created an account and shared your first link for review
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Activity;
