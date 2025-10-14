import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { BASE_URL_SERVER } from "../../../config";
import { useState } from "react";
import { LoggedInUser } from "../../redux";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { encryptData } from "../../encryption";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL_SERVER}/login`,
        loginFormData
      );
      if (response.status == 200) {
        const userData = response.data.data;
        const encryptedUserData = encryptData(userData);
        dispatch(LoggedInUser.setLoggedInUser(encryptedUserData));
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err.response.data.data);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form
      className="w-full h-[400px] flex flex-col gap-5 mt-5"
      onSubmit={handleFormSubmit}
    >
      <div className="grid w-full items-center gap-2 relative">
        <Label htmlFor="picture" className="text-xs text-neutral-500">
          Your email
        </Label>

        <Input
          type="email"
          name="email"
          placeholder="john.deer@example.com"
          value={loginFormData.email}
          className="w-full"
          required
          onChange={handleChange}
        />
      </div>
      <div className="grid w-full items-center gap-2 relative">
        <Label htmlFor="picture" className="text-xs text-neutral-500">
          Your Password
        </Label>

        <Input
          type="password"
          name="password"
          placeholder="**********"
          value={loginFormData.password}
          className="w-full"
          required
          onChange={handleChange}
        />
      </div>
      <div className="w-full flex-1 flex items-end justify-center">
        <Button
          className="bg-[#3a3cff] w-full h-[45px] rounded-4xl hover:bg-[#3a3cff]/95 hover:cursor-pointer"
          type="submit"
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;
