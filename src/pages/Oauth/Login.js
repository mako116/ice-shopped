import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAlertPopModal,
  setAlertPopModal,
} from "../../store/alert/alertSlice";
import { setPageLoading } from "../../store/loading/LoadingSlice";
import { setLogin, setUser } from "../../store/oauth/authSlice";
import { clearCart } from "../../store/productSlice/productSlice";

const Login = () => {
  const dispatch = useDispatch();
  const baseURL = useSelector((state) => state.oauth.baseURL);
  const user = useSelector((state) => state.oauth.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [validInputs, setValidInputs] = useState(true);

  useEffect(() => {
    if (username === "" || password === "") {
      setValidInputs(true);
    } else {
      setValidInputs(false);
    }
  }, [username, password]);

  const submitForm = () => {
    dispatch(
      setPageLoading({
        status: true,
        message: "Please wait...",
      })
    );
    let payload = {
      username,
      password,
    };

    let url = `${baseURL}/auth/login`;

    // console.log(JSON.stringify(payload));

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((response) => {
        dispatch(
          setPageLoading({
            status: false,
            message: "",
          })
        );

        if (response) {
          localStorage.setItem("token", response?.token);

          if (user !== username) {
            dispatch(clearCart());
            localStorage.setItem("username", username);
            dispatch(setUser(username));
          }

          dispatch(setLogin(response?.token));
          dispatch(
            setAlertPopModal({
              status: true,
              type: "success",
              message: "Login Successful",
            })
          );

          setTimeout(() => {
            dispatch(closeAlertPopModal());
          }, 3000);
        }

        // console.log(response);
      })
      .catch(() => {
        dispatch(
          setPageLoading({
            status: false,
            message: "",
          })
        );

        setTimeout(() => {
          dispatch(
            setAlertPopModal({
              status: true,
              type: "success",
              message: "An Error occurred ",
            })
          );

          setTimeout(() => {
            dispatch(closeAlertPopModal());
          }, 3000);
        }, 500);
      });
  };

  return (
    <div className="row">
      <div className="col-xl-4 mx-auto vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
        <div className="card shadow-none rounded-0 w-100 p-2 pt-3 border-0">
          <div className="card-body rounded-0 text-left p-3">
            <h2 className="fw-700 display1-size display2-md-size mb-4">
              Login into <br />
              your account
            </h2>
            <form>
              <div className="form-group icon-input mb-3">
                <i className="font-sm ti-user text-grey-500 pr-0"></i>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                  placeholder="Your Username"
                />
              </div>
              <div className="form-group icon-input mb-1">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className="style2-input pl-2 form-control text-grey-900 font-xss ls-3"
                  placeholder="Password"
                />
                <span
                  className="font-xsss text-grey-700 pr-0"
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "30%",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
              <div className="mb-3"></div>
            </form>

            <div className="col-sm-12 p-0 text-left">
              <div className="form-group mb-1">
                <button
                  onClick={() => submitForm()}
                  type="button"
                  disabled={validInputs}
                  style={{ width: "100%" }}
                  className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
