import styles from "./sigin.module.css";
import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Config";
import { useUserAuth } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const emailOnChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsPending(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Log the userCredential to help with debugging
      console.log("User Credential:", userCredential);

      const user = userCredential.user;
      console.log("User logged in:", user);
      // console.log(user);

      // You can redirect the user to their dashboard or another page upon successful login.
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      // Log error information
      console.error("Login failed:", errorCode, errorMessage);

      if (errorCode === "auth/user-not-found") {
        setError("User not found. Kindly sign up.");
      } else if (errorCode === "auth/wrong-password") {
        setError("Wrong password");
      } else {
        setError(
          "An error occurred during sign-in. Check your email and password, and try again later."
        );
      }
    } finally {
      setIsPending(false);
    }
    if (user) {
      navigate("/home");
    }
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError(null);
    }, 3000);
  }, [error]);

  return (
    <>
      {user && <p>signed in as: {user.displayName}</p>}

      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Email:</span>
          <input type="email" value={email} onChange={emailOnChange} required />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={onPasswordChange}
            required
          />
        </label>
        {error && <p>{error}</p>}
        {isPending && <button className="btn">Loading.......</button>}
        {!isPending && <button className="btn">Sign in</button>}
      </form>
    </>
  );
};

export default Login;
