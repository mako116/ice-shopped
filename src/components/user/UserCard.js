import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserModal } from "../../store/alert/alertSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const defaultImage = useSelector((state) => state.oauth.defaultImage);

  const EditUser = () => {
    dispatch(
      setUserModal({
        status: true,
        type: "EDIT",
        payload: user,
      })
    );
  };

  return (
    <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
      <div
        className="card  border-0 rounded-lg text-center"
        style={{ background: "#f4f4f4", position: "relative" }}
      >
        <i
          className="ti-pencil"
          style={{
            position: "absolute",
            right: "12px",
            top: "15px",
            fontSize: "17px",
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => EditUser()}
        ></i>
        <div className="card-body p-2 ml-1 ">
          <a href="hgfdh" className="btn-round-xl bg-white">
            <img src={defaultImage} alt="icon" className="p-2" />
          </a>
          <h4 className="fw-600 font-xssss mt-3 mb-0">
            {user?.username}

            <span className="d-block font-xsssss fw-500 text-cyan-900 mt-2">
              {user?.email}
            </span>
            <span className="d-block font-xsssss fw-700 text-grey-500 mt-2">
              {user?.phone}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
