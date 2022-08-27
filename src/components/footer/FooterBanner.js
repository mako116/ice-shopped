import React from "react";

const FooterBanner = () => {
  return (
    <div className="payment-option pt-0 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-3 text-left">
            <i className="ti-shopping-cart text-grey-900 display1-size float-left mr-3"></i>
            <h4 className="mt-1 fw-600 text-grey-900 font-xss mb-0">
              100% Secure Payments
            </h4>
            <p className="font-xssss fw-500 text-grey-500 lh-26 mt-0 mb-0">
              100% Payment Protection.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-3 text-left">
            <i className="ti-headphone-alt text-grey-900 display1-size float-left mr-3"></i>
            <h4 className="mt-1 fw-600 text-grey-900 font-xss mb-0">Support</h4>
            <p className="font-xssss fw-500 text-grey-500 lh-26 mt-0 mb-0">
              Alway online feedback 24/7
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-3 text-left">
            <i className="ti-lock text-grey-900 display1-size float-left mr-3"></i>
            <h4 className="mt-1 fw-600 text-grey-900 font-xss mb-0">
              Trust pay
            </h4>
            <p className="font-xssss fw-500 text-grey-500 lh-26 mt-0 mb-0">
              Easy Return Policy.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-3 text-left">
            <i className="ti-reload text-grey-900 display1-size float-left mr-3"></i>
            <h4 className="mt-1 fw-600 text-grey-900 font-xss mb-0">
              Return and Refund
            </h4>
            <p className="font-xssss fw-500 text-grey-500 lh-26 mt-0 mb-0">
              100% money back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
