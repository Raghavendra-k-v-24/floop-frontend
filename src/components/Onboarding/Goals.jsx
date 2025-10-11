import { Label } from "@/components/ui/label";
import Plus_Image from "../../assets/plus.png";
import Tick_Image from "../../assets/tick.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { SignUpFormData } from "../../redux";
import axios from "axios";
import BASE_URL from "../../../config";
const Goals = ({ setStep }) => {
  const dispatch = useDispatch();
  const signupFormData = useSelector((state) => state.signupFormData);
  const [selected, setSelected] = useState(
    signupFormData.goals
      ? signupFormData.goals
          .split(",")
          .map((g) => g.trim())
          .filter(Boolean)
      : []
  );
  const tags = [
    "I want to get feedback on a particular case study",
    "Improve story telling",
    "I want a perspective of a hiring manager",
  ];
  const toggleTag = (tag) => {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(SignUpFormData.setSignUpFormData({ [name]: value }));
  };

  const handleAdd = () => {
    dispatch(
      SignUpFormData.setSignUpFormData({ "goals": selected.join(", ") })
    );
  };

  const handleFormSubmit = async (e) => {
    console.log("coming");
    e.preventDefault();
    const response = await axios.post(`${BASE_URL}/signup`, signupFormData);
    console.log(response);
    // setStep(4);
  };
  return (
    <form
      className="w-full h-full flex flex-col gap-5"
      onSubmit={handleFormSubmit}
    >
      <div className="grid w-full items-center gap-3 relative">
        <Label htmlFor="picture" className="text-xs text-black">
          Goals for the portfolio review (Max 3)
        </Label>
        <div className="flex gap-2 items-center">
          <Textarea
            type="text"
            name="goals"
            placeholder="What do you want to get out from portfolio review?"
            value={signupFormData.goals}
            className="w-full"
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
        <div className="flex flex-col gap-3">
          {tags.length > 0 && (
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
          </div>
        </div>
      </div>
      <Button
        className="bg-[#3a3cff] w-full h-[45px] rounded-4xl hover:bg-[#3a3cff]/95 mt-2"
        type="submit"
      >
        Generate a portfolio review link
      </Button>
    </form>
  );
};

export default Goals;
