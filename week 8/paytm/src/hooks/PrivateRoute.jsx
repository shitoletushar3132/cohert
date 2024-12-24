import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "./authState";

const PrivateRoute = ({ children }) => {
  const auth = useRecoilValue(authState);

  if (!auth.isAuthenticated || !auth.token) {
    return <Navigate to="/signIn" />;
  }

  return children;
};

export default PrivateRoute;
