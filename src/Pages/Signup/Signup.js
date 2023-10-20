import styles from "./Signup.module.css";
import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase/Config";
import { useUserAuth } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth"; // Import updateProfile and signInWithEmailAndPassword

const Signup = () => {
  const navigate = useNavigate();
  const { dispatch, user } = useUserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIspending] = useState(false);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIspending(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update the display name after the user is created
      await updateProfile(userCredential.user, {
        displayName: displayName,
      });

      // Sign in the user after a successful signup
      await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      console.log(user);
      dispatch({ type: "LOGIN", payload: userCredential.user });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

      if (errorCode === "auth/email-already-in-use") {
        setError("Email is already in use. Please use a different email.");
      } else if (error.code == "auth/weak-password") {
        setError(
          "The password is too weak. Password should at least be 6 characters long"
        );
      } else {
        setError(
          "An error occurred during sign-up or check your email and password. Please try again later."
        );
      }
    } finally {
      setIspending(false);
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
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>Email:</span>
        <input type="email" value={email} onChange={onEmailChange} required />
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
      <label>
        <span>Display Name</span>
        <input
          type="text"
          value={displayName}
          onChange={onDisplayNameChange}
          required
        />
      </label>

      {error && <p>{error}</p>}
      {isPending && <button className="btn">Loading..</button>}
      {!isPending && <button className="btn">Signup</button>}
    </form>
  );
};

export default Signup;
