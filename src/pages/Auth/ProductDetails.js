import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import CardLoading from "../../components/loading/CardLoading";
import { setAlertPopModal } from "../../store/alert/alertSlice";
import { getSingleProduct } from "../../store/productSlice/actions";
import { addToCart } from "../../store/productSlice/productSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  let idQuery = searchParams.get("id");
  const singleProduct = useSelector((state) => state.products.singleProduct);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(getSingleProduct(idQuery));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idQuery]);

  const addProductToCart = (e, product) => {
    e.preventDefault();

    dispatch(addToCart(product));
    dispatch(
      setAlertPopModal({
        status: true,
        type: "success",
        message: "product added to cart",
      })
    );

    navigate("/cart");
  };

  return (
    <div className="product-wrapper pt-lg--7 pt-5 pb-5 pb-lg--7 bg-greyblue">
      <div className="container">
        {loading ? (
          <div className="row mt-2" style={{ width: "100%" }}>
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5 mb-4">
              <CardLoading />
            </div>
          </div>
        ) : singleProduct ? (
          <div className="row">
            <div className="col-lg-5 offset-lg-1 mb-4">
              <img
                class=" rounded-lg"
                src={singleProduct?.image}
                style={{ width: "100%", height: "530px" }}
                alt=""
              />
            </div>
            <div className="col-lg-6  col-md-12 pad-top-lg-200 pad-bottom-lg-100 pad-top-100 pad-bottom-75 pl-md--5">
              <h4 className="text-danger font-xssss fw-700 ls-2">
                {singleProduct?.category}
              </h4>
              <h2 className="fw-700 text-grey-900 display1-size lh-3 porduct-title display2-md-size">
                {singleProduct?.title}
              </h2>

              <div className="clearfix"></div>
              <p className="font-xsss fw-400 text-grey-500 lh-30 pr-5 mt-3 mr-5">
                {singleProduct?.description}
              </p>

              <h6 className="display2-size fw-700 text-current ls-2 mb-2">
                <span className="font-xl">&#8358;</span>{" "}
                {Math.trunc(singleProduct?.price)}.00
              </h6>

              <div className="clearfix"></div>

              <div class="form--action mt-4 mb-3">
                <div class="product-action flex-row align-items-center">
                  <a
                    href="true"
                    onClick={(e) => addProductToCart(e, singleProduct)}
                    class="add-to-cart bg-dark text-white fw-700 pl-lg-5 pr-lg-5 text-uppercase font-xssss float-left border-dark border rounded-lg border-size-md d-inline-block mt-0 p-3 text-center ls-3"
                  >
                    Add to cart
                  </a>
                </div>
              </div>

              <div className="clearfix"></div>
              {/* <ul className="product-feature-list mt-5">
                <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">
                  <b className="text-grey-900"> Category : </b>Furniture
                </li>
              </ul> */}
            </div>
          </div>
        ) : (
          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-12">
              <div className="card">
                <div className="card-body text-center">
                  <h3>No Product Found</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
