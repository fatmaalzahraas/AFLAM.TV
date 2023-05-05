import { useEffect, useState } from "react";
import Image from "../assets/aflam02.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { UserAuth } from "../context/authContext";
import validation from "../validation";
import { toast } from "react-toastify";
import PageTitle from "../components/PageTitle";
const Signin = () => {
  const { user, signIn } = UserAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(email, password));
    try {
      await signIn(email, password);
      navigate("/");
      toast.success("Logged In successfully");
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);
  return (
    <PageTitle title="Sign In">
      <div className="h-screen w-full relative">
        <img
          className=" absolute w-full h-full object-cover"
          src={Image}
          alt="/"
        />
        <div className=" absolute w-full h-screen top-0 left-0 bg-darkBlue/50 dark:bg-darkBlue/60"></div>
        <div className="absolute top-[50%] translate-y-[-50%] z-40 w-full">
          <div className=" max-w-[450px] min-h-[600px] mx-auto text-lightColor bg-darkBlue/80 xxs:h-[460px]">
            <div className="max-w-[300px] xxs:max-w-[250px] mx-auto py-14">
              <h2 className="text-[1.5rem] font-bold">Sign In</h2>
              <form
                className="flex flex-col w-full py-4 xxs:py-2"
                onSubmit={handleSubmit}
              >
                <input
                  className="py-3 my-2 px-1 rounded  bg-lightColor text-darkBlue"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="text-main text-[0.8rem] mt-[0.2rem]">
                    {errors.email}
                  </span>
                )}
                <div className="relative w-full">
                  <input
                    className="py-3 mt-2 px-1 rounded bg-lightColor text-darkBlue w-full"
                    type={showPass ? "text" : "password"}
                    maxLength={25}
                    placeholder="Password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute top-[58%] translate-y-[-50%] right-[3px] z-20 cursor-pointer text-[1.4rem]">
                    {showPass ? (
                      <AiFillEye
                        className="text-darkBlue "
                        onClick={() => setShowPass(false)}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        className="text-darkBlue"
                        onClick={() => setShowPass(true)}
                      />
                    )}
                  </div>
                </div>
                {errors.password && (
                  <span className="text-main text-[0.8rem] mt-[0.2rem]">
                    {errors.password}
                  </span>
                )}
                <button className="bg-main py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-[0.9rem] text-gray-500">
                  <p>
                    <input type="checkbox" className="mr-1" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-500 text-[0.9rem]">
                    Don't have an account?
                  </span>{" "}
                  {"   "}
                  <Link to="/register">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTitle>
  );
};
export default Signin;
