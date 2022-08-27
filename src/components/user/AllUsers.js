import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserModal } from "../../store/alert/alertSlice";
import { getAllUsers } from "../../store/users/actions";
import CardLoading from "../loading/CardLoading";
import UserCard from "./UserCard";

const AllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    if (!users) {
      dispatch(getAllUsers());
    }

    return () => {
      dispatch(getAllUsers());
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addNewUser = () => {
    dispatch(
      setUserModal({
        status: true,
        type: "ADD",
        payload: null,
      })
    );
  };

  return (
    <div className="row">
      <div className="col-lg-12 mt-0 mb-5">
        <h4 className="float-left font-xss fw-700 text-grey-700 text-uppercase ls-3 mt-2 pt-1">
          All Users
        </h4>

        <span
          onClick={() => addNewUser()}
          style={{ cursor: "pointer" }}
          className="float-right bg-dark mb-2 text-white fw-700 pl-lg-5 pr-lg-5 text-uppercase font-xssss float-left border-dark border rounded-lg border-size-md d-inline-block mt-0 p-2 text-center ls-3"
        >
          Add User
        </span>
      </div>
      {loading ? (
        <div className="row" style={{ width: "100%" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 8, 9].map((i, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-6 mb-4">
              <CardLoading />
            </div>
          ))}
        </div>
      ) : users && users?.length ? (
        users.map((user, index) => <UserCard key={index} user={user} />)
      ) : (
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body text-center">
                <h4>No User Found</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
