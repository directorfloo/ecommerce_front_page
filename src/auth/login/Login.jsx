import React, { useState } from "react";
import { Link, useNavigate } from "react-router"; // fixed import
import { useLoginMutation } from "../../apis/loginApi";
import style from "./Login.module.css";

const Login = () => {
  const [login] = useLoginMutation(); // only need login function
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData).unwrap();
      if (!response || !response.token) {
        alert("Login failed");
        return;
      }

      console.log("Login response:", response);
      localStorage.setItem("token", response.token);
      navigate("/products");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={style.LoginWrapper}>
      <form onSubmit={submitHandler} className={style.loginForm}>
        <section className={style.image}>
          <img src="/images/mama.jpg" alt="headline" />
        </section>

        <h1 className={style.welcome}>WELCOME TO MAMA SHOPPING STORE</h1>
        <p className={style.enter}>Enter your username and password to login.</p>

        <input
          className={style.userNameInput}
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          className={style.passwordInput}
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className={style.loginButton} type="submit">
          Login
        </button>
      </form>

      <div className={style.accountWrapper}>
        <span className={style.account}>Don't have an account?</span>
        <Link className={style.signUpLink} to="/register">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
