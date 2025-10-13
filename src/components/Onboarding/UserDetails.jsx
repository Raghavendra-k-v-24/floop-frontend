import { Label } from "@/components/ui/label";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
const UserDetails = ({ setStep }) => {
  const [page, setPage] = useState("signup");
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="w-full flex justify-between">
        <Label
          className={`text-lg hover:cursor-pointer ${
            page === "signup" ? "text-black" : "text-neutral-400"
          }`}
          onClick={() => setPage("signup")}
        >
          {page === "signup" ? "Sign up" : "Sign up?"}
        </Label>
        <Label
          className={`text-lg ${
            page === "login" ? "text-black" : "text-neutral-400"
          } hover:cursor-pointer`}
          onClick={() => setPage("login")}
        >
          {page === "login" ? "Login" : "Login?"}
        </Label>
      </div>
      {page === "signup" ? <Signup setStep={setStep} /> : <Login />}
    </div>
  );
};

export default UserDetails;
