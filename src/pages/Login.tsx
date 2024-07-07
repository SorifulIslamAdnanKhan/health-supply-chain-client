import HMForm from "@/components/form/HMForm";
import HMInput from "@/components/form/HMInput";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/images/login.jpg";

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
    <div className="max-w-[1200px] mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <div className="p-2">
          <img src={loginImage} alt="" className="max-w-[600px] mx-auto" />
        </div>
        <div className="w-full md:max-w-[450px] mx-auto p-4">
          <h2 className="my-10 text-center">Login</h2>
          <div className="p-2">
            <p>Email: adnan@gmail.com</p>
            <p>password: adnan</p>
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
      </div>
    </div>
  );
};

export default Login;
