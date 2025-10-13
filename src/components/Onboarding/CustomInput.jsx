import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const CustomInput = ({
  label,
  placeholder,
  name,
  value,
  data,
  setData,
  type = "text",
  required = true,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
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
    </div>
  );
};

export default CustomInput;
