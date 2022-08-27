import React from "react";
import AllUsers from "../../components/user/AllUsers";

const Users = () => {
  return (
    <div className="shop-wrapper pt-lg--7 pt-5 pb-lg--7 pb-5">
      <div className="container">
        <AllUsers />
        {/* <div className="row" style={{ width: "100%" }}>
          <div className="col-lg-12">
            <div className="row" style={{ width: "100%" }}>
              
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Users;
