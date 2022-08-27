import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "../components/cart/Cart";
import LoggedInLayout from "../components/layouts/LoggedInLayout";
import OauthLayout from "../components/layouts/OauthLayout";
import Home from "../pages/Auth/Home";
import ProductDetails from "../pages/Auth/ProductDetails";
import Users from "../pages/Auth/Users";
import Login from "../pages/Oauth/Login";
import PageNotFound from "../pages/PageNotFound";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoggedInLayout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/users" element={<Users />} />
        </Route>

        <Route element={<OauthLayout />}>
          <Route path="/login" exact element={<Login />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
};

export default Routers;
