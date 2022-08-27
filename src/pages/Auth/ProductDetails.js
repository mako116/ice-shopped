import React from "react";

const ProductDetails = () => {
  return (
    <div className="product-wrapper pt-lg--7 pt-5 pb-5 pb-lg--7 bg-greyblue">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-1 mb-4"></div>
          <div className="col-lg-6  col-md-12 pad-top-lg-200 pad-bottom-lg-100 pad-top-100 pad-bottom-75 pl-md--5">
            <h4 className="text-danger font-xssss fw-700 ls-2">DNMX</h4>
            <h2 className="fw-700 text-grey-900 display1-size lh-3 porduct-title display2-md-size">
              {" "}
              Camisole with Adjustable Straps
            </h2>

            <div className="clearfix"></div>
            <p className="font-xsss fw-400 text-grey-500 lh-30 pr-5 mt-3 mr-5">
              ultrices justo eget, sodales orci. Aliquam egestas libero ac
              turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem
              laoreet, feugiat tellus at, hendrerit arcu.
            </p>

            <h6 className="display2-size fw-700 text-current ls-2 mb-2">
              <span className="font-xl">$</span>449{" "}
            </h6>

            <div className="clearfix"></div>
            <form action="#" className="form--action mt-4 mb-3">
              <div className="product-action flex-row align-items-center">
                <div className="quantity mr-3">
                  <input
                    type="number"
                    className="quantity-input"
                    name="qty"
                    id="qty"
                    value="1"
                    min="1"
                  />
                  <div className="dec qtybutton">-</div>
                  <div className="inc qtybutton">+</div>
                </div>

                <a
                  href="hgffg"
                  className="add-to-cart bg-dark text-white fw-700 pl-lg-5 pr-lg-5 text-uppercase font-xssss float-left border-dark border rounded-lg border-size-md d-inline-block mt-0 p-3 text-center ls-3"
                >
                  Add to cart
                </a>
              </div>
            </form>
            <div className="clearfix"></div>
            <ul className="product-feature-list mt-5">
              <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                <b className="text-grey-900"> Category : </b>Furniture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
