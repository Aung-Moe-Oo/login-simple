import React, { useState } from "react";
import css from "./Home.module.css";
import img from "../images/bg.jpg";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.container}>
      <div className={css.left}>
        <img src={img} alt="BackgroundImage" />
      </div>
      <div className={css.right}>
        <div className={css.card}>
          <h3>Welcome to Panorama,</h3>
          <h3>Sign In to Continue.</h3>
          <div className={css.texts}>
            <p>
              Don't have an account? <span>Create a account</span>
            </p>

            <p>It takes less than a minute.</p>
          </div>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <div className={css.passwordWrapper}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div onClick={toggleShowPassword} className={css.icons}>
                {!showPassword ? <RxEyeClosed /> : <RxEyeOpen />}
              </div>
            </div>
            <div className={css.forgot}>
              <span>forgot password?</span>
            </div>
            <button className={css.btn}>Sign In</button>
            <button className={css.btnGoogle}>
              <FcGoogle /> Sign In with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
