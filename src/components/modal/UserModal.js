import React, { useState, useEffect } from "react";
import "./userModal.scss";
import { useSelector, useDispatch } from "react-redux";
import { setAlertPopModal, setUserModal } from "../../store/alert/alertSlice";
import { setPageLoading } from "../../store/loading/LoadingSlice";
import { updateUser } from "../../store/users/userSlice";

const UserModal = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const modal = useSelector((state) => state.alert.userModal);
  const baseURL = useSelector((state) => state.oauth.baseURL);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [validInputs, setValidInputs] = useState(true);

  const closeModal = () => {
    dispatch(
      setUserModal({
        status: false,
        type: "",
        payload: null,
      })
    );

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setAddress("");
  };

  useEffect(() => {
    if (modal?.status === true) {
      if (modal?.payload !== null) {
        setFirstName(modal?.payload?.name?.firstname);
        setLastName(modal?.payload?.name?.lastname);
        setEmail(modal?.payload?.email);
        setPhone(modal?.payload?.phone);
        setPassword(modal?.payload?.password);
        setAddress(modal?.payload?.address?.street);
      }
    }
  }, [modal]);

  useEffect(() => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      password === ""
    ) {
      setValidInputs(true);
    } else {
      setValidInputs(false);
    }
  }, [firstName, lastName, email, phone, password, address]);

  const submitForm = () => {
    dispatch(
      setPageLoading({
        status: true,
        message: "Please wait...",
      })
    );
    let payload = {
      email,
      username:
        modal?.payload?.username ||
        firstName.substring(0, 3) +
          lastName.substring(0, 3) +
          phone.slice(phone.length - 4),
      password,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      address: {
        city: address,
        street: address,
        number: 1,
        zipcode: address,
        geolocation: {
          lat: address,
          long: address,
        },
      },
      phone,
    };

    let url =
      modal?.type === "EDIT"
        ? `${baseURL}/users/${modal?.payload?.id}`
        : `${baseURL}/users`;
    let method = modal?.type === "EDIT" ? "PUT" : "POST";

    console.log(JSON.stringify(payload));

    fetch(url, {
      method: method,
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

        closeModal();

        let newUser = response;
        let allUsers;

        if (modal?.type === "EDIT") {
          allUsers = users.filter((user) => user.id !== modal?.payload?.id);
        } else {
          allUsers = users;
        }

        dispatch(updateUser([...allUsers, newUser]));

        setTimeout(() => {
          dispatch(
            setAlertPopModal({
              status: true,
              type: "success",
              message: modal?.type === "EDIT" ? "User Updated" : "User Added",
            })
          );
        }, 500);

        console.log(response);
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
        }, 500);
      });
  };

  return (
    modal?.status && (
      <div className="alert-modal " id="UserModal">
        <div className="alert-modal-overlay" onClick={() => closeModal()}></div>
        <div className="alert-modal-card vivify popInBottom">
          <div className="close-alert-button d-flex justify-content-between align-items-center">
            <i
              className="ti-close"
              id="closeAlertModal"
              onClick={() => closeModal()}
            ></i>

            <span className="ml-2">
              <b>{modal?.type === "ADD" ? "Add New " : "Edit"} User</b>
            </span>
          </div>

          <div className="alert-modal-body">
            <div
              className="card shadow-none border-0 mt-3 "
              style={{ width: "100%" }}
            >
              <div className="card-body rounded-0 text-left">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-user text-grey-500 pr-0"></i>
                        <input
                          value={firstName}
                          type="text"
                          onChange={(e) => setFirstName(e.target.value)}
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-user text-grey-500 pr-0"></i>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-email text-grey-500 pr-0"></i>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Your Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-mobile text-grey-500 pr-0"></i>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          type="text"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-map-alt text-grey-500 pr-0"></i>
                        <input
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          type="text"
                          className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                          placeholder="Street name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div
                        className="form-group icon-input mb-3"
                        style={{ position: "relative" }}
                      >
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
                        {/* <i className="font-sm ti-lock text-grey-500 pr-0"></i> */}
                      </div>
                    </div>
                  </div>
                </form>

                <div className="col-md-6 ml-auto p-0 mt-4 text-right ">
                  <div className="form-group mb-1">
                    <button
                      onClick={() => submitForm()}
                      type="button"
                      disabled={validInputs}
                      style={{ width: "200px" }}
                      className="form-control text-center  text-white fw-600 bg-dark border-0 p-0 "
                    >
                      {modal?.type === "ADD" ? "Add  " : "Edit"} User
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserModal;
