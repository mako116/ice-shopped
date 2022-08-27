import React from "react";
// import "./footer.scss";
import FooterBanner from "./FooterBanner";
const footer = () => {
  return (
    <>
      <FooterBanner />

      <div className="footer-wrapper mt-0 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-md-12 col-lg-4 col-sm-9 col-xs-12 md-mb-2">
                  <a href="index-2.html">
                    <h1 className="fredoka-font ls-3 fw-700 text-white font-xxl">
                      Elomoas
                      <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">
                        Online Learning Course
                      </span>
                    </h1>
                  </a>
                  <p className="w-100 mt-5">
                    41 madison ave, floor 24 new work, <br />
                    NY 10010 1-877-932-7111 <br /> support@mail.com
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item mr-3">
                      <a href="#">
                        <i className="ti-facebook font-sm"></i>
                      </a>
                    </li>
                    <li className="list-inline-item mr-3">
                      <a href="#">
                        <i className="ti-twitter-alt font-sm"></i>
                      </a>
                    </li>
                    <li className="list-inline-item mr-3">
                      <a href="#">
                        <i className="ti-linkedin font-sm"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="ti-instagram font-sm"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-3 col-xs-6 md-mb-2">
                  <h5>Language</h5>
                  <ul>
                    <li>
                      <a href="#">English</a>
                    </li>
                    <li>
                      <a href="#">Spanish</a>
                    </li>
                    <li>
                      <a href="#">Arab</a>
                    </li>
                    <li>
                      <a href="#">Urdu</a>
                    </li>
                    <li>
                      <a href="#">Brazil</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                  <h5>Channel</h5>
                  <ul>
                    <li>
                      <a href="#">Makeup</a>
                    </li>
                    <li>
                      <a href="#">Dresses</a>
                    </li>
                    <li>
                      <a href="#">Girls</a>
                    </li>
                    <li>
                      <a href="#">Sandals</a>
                    </li>
                    <li>
                      <a href="#">Headphones</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                  <h5>About</h5>
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Term of use</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-6">
                  <h5 className="mb-3">Office</h5>
                  <p className="w-100">
                    41 madison ave, floor 24 new work, NY 10010 <br />
                    1-877-932-7111
                  </p>
                  <p className="w-100">
                    41 madison ave, floor 24 new work, NY 10010 <br />
                    1-877-932-7111
                  </p>
                </div>
              </div>
              <div className="middle-footer mt-5 pt-4"></div>
            </div>
            <div className="col-sm-12 lower-footer pt-0"></div>
            <div className="col-sm-6 col-xs-12">
              <p className="copyright-text">
                © 2021 copyright. All rights reserved.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 text-right">
              <p className="copyright-text float-right">
                Design by
                <a href="#" className="">
                  uitheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
