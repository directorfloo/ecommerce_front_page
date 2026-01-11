import { useEffect, useState } from "react";
import style from "./Register.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
// import { useRegister } from "../hooks/useRegister"; // uncomment if you have this hook

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (message) alert(message);
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const userDetails = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      // Example API call (replace with your real one)
      /*
      const { name, message } = await useRegister(userDetails);
      setMessage(message);
      localStorage.setItem("name", name);
      */

      console.log("User registered:", userDetails);
      setMessage("Registration successful!");
      setError("");
    } catch (err) {
      setError("Registration unsuccessful. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.registerForm}>
      <section className={style.image}>
        <img src="/images/mama.jpg" alt="headline" />
      </section>

      <h1 className={style.welcome}>WELCOME TO MAMA SHOPPING STORE</h1>
      <p className={style.enter}>Fill in the required details to sign up.</p>

      {error && <p className={style.error}>{error}</p>}

      <div className={style.registerSignUp}>
        <div>
          <input
            className={style.username}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            className={style.username}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            className={style.email}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            className={style.password}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            className={style.confirmedpassword}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <button className={style.signUpButton} type="submit">
            Sign up
          </button>
        </div>

        <div className={style.socialButton}>
          <button type="button" className={style.googleButton}>
            <FcGoogle className={style.googleIcon} />
            Continue with Google
          </button>

          <button type="button" className={style.facebookButton}>
            <FaFacebookF className={style.facebookIcon} />
            Continue with Facebook
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
