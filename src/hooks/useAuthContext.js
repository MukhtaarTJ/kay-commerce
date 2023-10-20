import { userAuth } from "../context/userAuth";
import { useContext } from "react";

export const useUserAuth = () => {
  const context = useContext(userAuth);
  if (context === undefined) {
    throw new Error("useUserAuth must be used within a UserAuthProvider");
  }
  return context;
};
