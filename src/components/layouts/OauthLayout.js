import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const OauthLayout = () => {
  const isLoggedIn = useSelector((state) => state.oauth.isUserLoggedIn);
  useLayoutEffect(() => {}, [isLoggedIn]);

  return (
    <div className="main-wrap">
      {isLoggedIn ? <Navigate to="/" /> : <Outlet />}
    </div>
  );
};

export default OauthLayout;
