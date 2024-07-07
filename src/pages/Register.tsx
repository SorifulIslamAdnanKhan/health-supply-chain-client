import HMForm from "@/components/form/HMForm";
import HMInput from "@/components/form/HMInput";
import { Button } from "@/components/ui/button";
import { useCreateUserMutation } from "@/redux/features/createUser/createUserApi";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/images/login.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    createUser(data);
    navigate("/login");
  };

  return (
    <div className="h-screen max-w-[1200px] mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <div className="p-2">
          <img src={loginImage} alt="" className="max-w-[600px] mx-auto" />
        </div>
        <div>
          <h2 className="my-10 text-center">Register</h2>
          <div className="w-full md:max-w-[450px] mx-auto p-4">
            <HMForm onSubmit={onSubmit}>
              <div>
                <HMInput
                  type="text"
                  name="name"
                  className="dark:text-white"
                  placeholder="User Name"
                />
              </div>
              <div className="my-4">
                <HMInput
                  type="email"
                  name="email"
                  className="dark:text-white"
                  placeholder="Email"
                />
              </div>
              <div>
                <HMInput
                  type="password"
                  name="password"
                  className="dark:text-white"
                  placeholder="Password"
                />
              </div>

              <div className="my-4">
                <Button type="submit">Submit</Button>
              </div>
            </HMForm>
            <div>
              <span className="mr-2">Already have an account! Please</span>
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
