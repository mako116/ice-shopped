import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPageLoading } from "../../store/loading/LoadingSlice";
import { setLogout } from "../../store/oauth/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.products.carts);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    carts.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [carts, cartCount]);

  const handleLogout = () => {
    dispatch(
      setPageLoading({
        status: true,
        message: "logging out...",
      })
    );

    setTimeout(() => {
      dispatch(
        setPageLoading({
          status: false,
          message: "",
        })
      );
      dispatch(setLogout());
    }, 1500);
  };
  return (
    <div className="header-wrapper pt-3 pb-3 shadow-xss">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 navbar pt-0 pb-0">
            <Link to={`/`}>
              <h1 className="fredoka-font ls-3 fw-700 text-current font-xxl">
                ICE SHOP
              </h1>
            </Link>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
          </div>
          <div className="col-lg-3 text-right text-sm-center ">
            <span
              onClick={() => handleLogout()}
              style={{ cursor: "pointer" }}
              className="float-right  text-center mt-1 ml-4 text-grey-800"
            >
              <i className="ti-power-off font-lg"></i>
              {/* <span className="font-xssss fw-500 d-block lh-1">Users</span> */}
            </span>
            <Link
              to={`/cart`}
              data-toggle="modal"
              data-target="#ModalCart"
              className="float-right text-center mt-1 ml-4 text-grey-800 position-relative"
            >
              <i className="ti-shopping-cart font-lg"></i>
              <span className="font-xssss fw-500 d-block lh-1">Cart</span>
              {cartCount ? (
                <span
                  className="icon-count "
                  style={{ backgroundColor: "#05f" }}
                >
                  {cartCount}
                </span>
              ) : null}
            </Link>

            <Link
              to={"/users"}
              className="float-right  text-center mt-1 ml-4 text-grey-800"
            >
              <i className="ti-user font-lg"></i>
              <span className="font-xssss fw-500 d-block lh-1">Users</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
