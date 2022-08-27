import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../header/Header";

const LoggedInLayout = () => {
  const isLoggedIn = useSelector((state) => state.oauth.isUserLoggedIn);

  return (
    <>
      <Header />
      {isLoggedIn ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
};

export default LoggedInLayout;
