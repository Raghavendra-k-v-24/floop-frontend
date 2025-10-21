import { Label } from "@/components/ui/label";
import Plus_Image from "../../assets/plus.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { toast } from "sonner";
import { BASE_URL_CLIENT } from "../../../config";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ShareLink from "./ShareLink";
const Goals = ({ data, setData }) => {
  const [open, setOpen] = useState(false);
  const goalsList = data.goals.split(",").filter(Boolean);

  const [goals, setGoals] = useState(data.goals);

  const handleChange = (e) => {
    const { value } = e.target;
    setGoals(value);
  };

  const handleAdd = () => {
    setData((prev) => ({ ...prev, "goals": goals }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL_SERVER}/portfolio`, data);
      if (response.status == 200) {
        const portfolioId = response.data.data;
        const reviewLink = `${BASE_URL_CLIENT}/${portfolioId}`;
        setData((prev) => ({ ...prev, "reviewLink": reviewLink }));
        setOpen(true);
      }
    } catch (err) {
      toast.error(err.response.data.data);
    }
  };
  return (
    <form
      className="w-full h-full flex flex-col gap-5 "
      onSubmit={handleFormSubmit}
    >
      <div className="grid w-full items-center gap-3 relative">
        <Label htmlFor="picture" className="text-xs text-black">
          Goals for the portfolio review (Max 3)
        </Label>
        <div className="w-full flex gap-2 items-center overflow-hidden">
          <Textarea
            type="text"
            name="goals"
            placeholder="What do you want to get out from portfolio review?"
            value={goals}
            className="max-w-full"
            required
            onChange={handleChange}
          />
          <Button
            className="bg-[#3a3cff] hover:bg-[#3a3cff]/95 px-2 hover:cursor-pointer"
            type="button"
            onClick={handleAdd}
          >
            <img src={Plus_Image} alt="Plus" className="w-[18px]" /> Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-3">
          {goalsList.length > 0 &&
            goalsList.map((item, index) => (
              <Label
                key={index}
                className="w-max h-max px-2 py-1 rounded-sm bg-[#EBEFF4] text-[#6D6D6D]"
              >
                {item}
              </Label>
            ))}
        </div>
      </div>
      <Button
        className="bg-[#3a3cff] w-full h-[45px] rounded-4xl hover:bg-[#3a3cff]/95 mt-2 hover:cursor-pointer"
        type="submit"
      >
        Generate a portfolio review link
      </Button>
      <Dialog open={open}>
        <form>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Sharing your portfolio</DialogTitle>
              <DialogDescription>
                You can send this link to the person that will give you feedback
                on your portfolio/website.
              </DialogDescription>
            </DialogHeader>
            <ShareLink data={data} setData={setData} />
          </DialogContent>
        </form>
      </Dialog>
    </form>
  );
};

export default Goals;
