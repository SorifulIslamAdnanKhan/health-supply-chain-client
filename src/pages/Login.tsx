import HMForm from "@/components/form/HMForm";
import HMInput from "@/components/form/HMInput";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.token) as TUser;

    dispatch(setUser({ user: user, token: res.token }));

    navigate("/dashboard");
  };
  return (
    <div className="h-screen max-w-[1200px] mx-auto ">
      <h2 className="my-10 text-center">Login</h2>
      <div className="w-full md:max-w-[450px] mx-auto p-4">
        <HMForm onSubmit={onSubmit}>
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
          <span className="mr-2">Don't have an account! Please</span>
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
