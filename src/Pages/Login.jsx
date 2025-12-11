import { useContext, useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { MyContext } from "../App";
import { IoMdEyeOff, IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import google from "../assets/google.webp";

const Login = () => {
  const [inputIndex, setinputIndex] = useState(null);
  const [isShowPassword, setisShowPassword] = useState(true);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setisHideSideBarAndHeader(true);
  }, []);

  const focusInput = (index) => {
    setinputIndex(index);
  };

  return (
    <section className="loginSection">
      <div className="loginBox">
        <div className="logo text-center">
          <img src={Logo} alt="logo" width={"150px"} />
          <h5 className="font-weight-bold">Login to Bacola</h5>
        </div>

        <div className="wrapper card border">
          <form>
            {/* First Input */}
            <div
              className={`form-group position-relative ${
                inputIndex === 0 && "focus"
              }`}
            >
              <span className="icon">
                <IoMdMail size={"20"} />
              </span>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="enter your email"
                onFocus={() => focusInput(0)}
                onBlur={() => setinputIndex(null)}
              />
            </div>

            {/* Second Input */}
            <div
              className={`form-group position-relative ${
                inputIndex === 1 && "focus"
              }`}
            >
              <span className="icon">
                <RiLockPasswordFill size={"20"} />
              </span>
              <input
                type={`${isShowPassword === true ? "text" : "password"}`}
                className="form-control mb-2"
                placeholder="enter your Password"
                onFocus={() => focusInput(1)}
                onBlur={() => setinputIndex(null)}
              />
              <span
                className="toggleShowPassword"
                onClick={() => setisShowPassword(!isShowPassword)}
              >
                {isShowPassword === true ? (
                  <>
                    <IoEye size={"20"} />
                  </>
                ) : (
                  <>
                    <IoMdEyeOff size={"20"} />
                  </>
                )}
              </span>
            </div>

            {/* Sign In Button */}
            <div className="form-group">
              <Button className="btn-blue btn-big w-100">Sign In</Button>
            </div>
            {/* End */}

            {/* LINK */}

            <div className="form-group text-center">
              <p className="text-center">
                <Link to={"forgot-password"} className="forgotpass-link">
                  Forgot Passoword
                </Link>
              </p>

              <div className="d-flex align-items-center justify-content-center or mb-3">
                <span className="line"></span>
                <span className="txt">Or</span>
                <span className="line"></span>
              </div>

              <Button
                variant="outlined"
                className="w-100 btn-lg btn-big loginwithgoogle"
              >
                <img src={google} width={"25"} height={"25"} /> &nbsp; Sign In
                With Google
              </Button>
            </div>
          </form>
        </div>

        <div className="wrapper card border footer p-3">
          <p className="text-center mb-0">
            Don't have't a account
            <Link to={"/signup"} className="link color ml-2">
              Register{" "}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
