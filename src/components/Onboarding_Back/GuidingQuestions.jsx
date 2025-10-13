import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Plus_Image from "../../assets/plus.png";
import Tick_Image from "../../assets/tick.png";
import { useState } from "react";
import { BASE_URL_CLIENT, BASE_URL_SERVER } from "../../../config";
import axios from "axios";
const GuidingQuestions = ({ setStep, data, setData }) => {
  const [selected, setSelected] = useState([]);
  const tags = [
    "I want to get a job as product designer",
    "I want to get a job as frontend developer",
    "I want to get a job as ML engineer",
  ];
  const toggleTag = (tag) => {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleAdd = () => {
    setData({ ...data, goals: selected.join(", ") });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStep(3);
    try {
      const user_response = await axios.post(`${BASE_URL_SERVER}/user`, {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      if (user_response.status == 200) {
        const user_id = user_response.data.data;

        const portfolio_response = await axios.post(
          `${BASE_URL_SERVER}/portfolio`,
          {
            portfolioLink: data.portfolioLink,
            goals: data.goals,
            associatedToUser: user_id,
          }
        );

        if (portfolio_response.status == 200) {
          const portfolio_id = portfolio_response.data.data;

          const token_response = await axios.post(
            `${BASE_URL_SERVER}/generate-token`,
            {
              portfolioId: portfolio_id,
              reviewerName: data.reviewerName,
              reviewerEmail: data.reviewerEmail,
            }
          );

          if (token_response.status == 200) {
            const token = token_response.data.data;

            setData({
              ...data,
              "reviewLink": `${BASE_URL_CLIENT}/${token}`,
            });
          } else {
          }
        } else {
        }
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="w-full h-full flex flex-col gap-8 items-center">
        <div className="grid w-full items-center gap-2 relative">
          <Label htmlFor="picture" className="text-xs text-black">
            Goals for the portfolio review (Max 3)
          </Label>
          <div className="flex gap-2">
            <Input
              type="text"
              name="goals"
              placeholder="What do you want to get out from portfolio review?"
              value={data.goals}
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
          <div className="flex gap-2 ">
            {tags.map((tag) => (
              <span
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`flex gap-1 items-center bg-neutral-200 text-[10px] p-2 rounded-md hover:cursor-pointer text-neutral-600 border transition-colors
            ${selected.includes(tag) ? "custom-border" : "border-transparent"}`}
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
        <Button
          className="bg-[#3a3cff] w-[400px] h-[40px] rounded-4xl hover:bg-[#3a3cff]/95"
          type="submit"
          disabled={data.goals.length == 0}
        >
          Generate sharing link
        </Button>
      </div>
    </form>
  );
};

export default GuidingQuestions;
