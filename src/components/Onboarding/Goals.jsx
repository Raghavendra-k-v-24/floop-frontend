import { Label } from "@/components/ui/label";
import Plus_Image from "../../assets/plus.png";
import Tick_Image from "../../assets/tick.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { SignUpFormData } from "../../redux";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { toast } from "sonner";
import { BASE_URL_CLIENT } from "../../../config";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import ShareLink from "./ShareLink";
const Goals = ({ setStep }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const signupFormData = useSelector((state) => state.signupFormData);
  // const [selected, setSelected] = useState(
  //   signupFormData.goals
  //     ? signupFormData.goals
  //         .split(",")
  //         .map((g) => g.trim())
  //         .filter(Boolean)
  //     : []
  // );
  const goalsList = signupFormData.goals.split(",").filter(Boolean);
  // const tags = [
  //   "I want to get feedback on a particular case study",
  //   "Improve story telling",
  //   "I want a perspective of a hiring manager",
  // ];
  // const toggleTag = (tag) => {
  //   setSelected((prev) =>
  //     prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
  //   );
  // };

  const [goals, setGoals] = useState(signupFormData.goals);

  const handleChange = (e) => {
    const { value } = e.target;
    // dispatch(SignUpFormData.setSignUpFormData({ [name]: value }));
    setGoals(value);
  };

  const handleAdd = () => {
    dispatch(SignUpFormData.setSignUpFormData({ "goals": goals }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL_SERVER}/signup`,
        signupFormData
      );
      if (response.status == 200) {
        const portfolioId = response.data.data;
        const reviewLink = `${BASE_URL_CLIENT}/${portfolioId}`;
        dispatch(SignUpFormData.setSignUpFormData({ reviewLink: reviewLink }));
        // setStep(4);
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
            className="bg-[#3a3cff] hover:bg-[#3a3cff]/95 px-2"
            type="button"
            onClick={handleAdd}
          >
            <img src={Plus_Image} alt="Plus" className="w-max" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-3">
          {/* {tags.length > 0 && (
            <span
              key={tags[0]}
              onClick={() => toggleTag(tags[0])}
              className={`flex items-center justify-center gap-1 w-full p-2 rounded-md text-[10px]
        bg-neutral-200 text-neutral-600 border transition-colors
        hover:cursor-pointer ${
          selected.includes(tags[0]) ? "custom-border" : "border-transparent"
        }`}
            >
              {tags[0]}
              {selected.includes(tags[0]) && (
                <img
                  src={Tick_Image}
                  alt="Tick"
                  className="w-[12px] h-[12px]"
                />
              )}
            </span>
          )}

          <div className="flex gap-2">
            {tags.slice(1).map((tag) => (
              <span
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`flex items-center justify-center gap-1 w-1/2 p-2 rounded-md text-[10px]
          bg-neutral-200 text-neutral-600 border transition-colors
          hover:cursor-pointer ${
            selected.includes(tag) ? "custom-border" : "border-transparent"
          }`}
              >
                {tag}
                {selected.includes(tag) && (
                  <img
                    src={Tick_Image}
                    alt="Tick"
                    className="w-[12px] h-[12px]"
                  />
                )}
              </span>
            ))} 
          </div> */}
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
        className="bg-[#3a3cff] w-full h-[45px] rounded-4xl hover:bg-[#3a3cff]/95 mt-2"
        type="submit"
      >
        Generate a portfolio review link
      </Button>
      <Dialog open={open}>
        <form>
          {/* <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger> */}
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Sharing your portfolio</DialogTitle>
              <DialogDescription>
                You can send this link to the person that will give you feedback
                on your portfolio/website.
              </DialogDescription>
            </DialogHeader>
            <ShareLink />
            {/* <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter> */}
          </DialogContent>
        </form>
      </Dialog>
    </form>
  );
};

export default Goals;
