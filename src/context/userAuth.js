import { useReducer, createContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged from Firebase Auth
import { auth } from "../Firebase/Config";

export const userAuth = createContext();

export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const UserAuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    // Set up the onAuthStateChanged listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch({ type: "LOGIN", payload: user });
      } else {
        // No user is signed in
        dispatch({ type: "LOGOUT" });
      }

      // Mark authentication as ready
      dispatch({ type: "AUTH_READY", payload: user });
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuth.Provider value={{ ...state, dispatch }}>
      {children}
    </userAuth.Provider>
  );
};
