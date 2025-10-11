import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { SignUpFormData } from "../../redux/index";
const CustomInput = ({
  label,
  placeholder,
  name,
  value,
  type = "text",
  required = true,
  passwordMatch = true,
}) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "confirmPassword")
      dispatch(SignUpFormData.setSignUpFormData({ [name]: value }));
  };
  return (
    <div className="grid w-full items-center gap-2 relative">
      <Label htmlFor="picture" className="text-xs text-neutral-500">
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className="w-full"
        required={required}
        onChange={handleChange}
      />
      {!passwordMatch && name == "confirmPassword" && (
        <span className="text-xs text-red-500">Password doesn't match.</span>
      )}
    </div>
  );
};

export default CustomInput;
