import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlertPopModal } from "../../store/alert/alertSlice";
import "./alert.scss";
const AlertModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.alert.alertPopModal);

  const closeModal = () => {
    dispatch(
      setAlertPopModal({
        status: false,
        type: "",
        message: null,
      })
    );
  };

  return (
    <div
      className={`alertPopUpModal alert-success vivify ${
        modal?.status === true ? "popInLeft" : ""
      }  ${modal?.type === "success" ? "alert-success" : "alert-error"}`}
    >
      <span className="alertMessage">{modal?.message}</span>
      <span className="alertClose" onClick={() => closeModal()}>
        <i className="ti-close"></i>
      </span>
    </div>
  );
};

export default AlertModal;
