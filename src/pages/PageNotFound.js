import React from "react";
import image from "../images/bg-43.png";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="shop-wrapper ">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 mx-auto vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
            <div className="card shadow-none rounded-0 w-100 p-2 pt-3 border-0 text-center">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img style={{ width: "180px" }} src={image} alt="" />

                <div className="card-body rounded-0 text-left p-3">
                  <h2 className="fw-700 display1-size display2-md-size mb-4 text-center">
                    Page Not Found
                  </h2>

                  <div className="col-sm-12 p-0 text-center">
                    <div className="form-group mb-1">
                      <p className="mt-3">
                        Looks like we couldn't find the page you are requesting.
                        Feel free to ask and open a support request.
                      </p>
                      <div>
                        <span
                          onClick={() => navigate(-1)}
                          className="form-control cursor-pointer text-center border-1 style2-input text-dark fw-600 bg-light border-0 p-0 "
                        >
                          Go Back
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
