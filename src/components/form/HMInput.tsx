import { Controller } from "react-hook-form";
import { Input } from "../ui/input";

type TInputProps = {
  type: string;
  name: string;
  defaultValue?: string | number;
  placeholder: string;
};
const HMInput = ({ type, name, placeholder, defaultValue }: TInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        )}
      />
    </>
  );
};

export default HMInput;
