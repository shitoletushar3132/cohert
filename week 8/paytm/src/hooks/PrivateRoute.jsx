import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authAtom } from "../store/atoms/authAtom";

const PrivateRoute = ({ children }) => {
  const [auth, setAuth] = useRecoilState(authAtom); // Use Recoil state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if localStorage has the auth token
    const storedToken = localStorage.getItem("GoWallet");
    if (storedToken) {
      const tokenData = JSON.parse(storedToken);

      // Update Recoil state if not already set
      if (!auth.isAuthenticated && tokenData.token) {
        setAuth({
          isAuthenticated: true,
          token: tokenData.token,
        });
      }
    } else {
      // If no token in localStorage, set auth to unauthenticated
      setAuth({
        isAuthenticated: false,
        token: null,
      });
    }
    setIsLoading(false); // Done loading
  }, [auth.isAuthenticated, setAuth]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading spinner
  }

  // If the user is not authenticated, redirect to the sign-in page
  if (!auth.isAuthenticated || !auth.token) {
    return <Navigate to="/signIn" />;
  }

  return children;
};

export default PrivateRoute;
