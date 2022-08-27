import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAlertPopModal } from "../../store/alert/alertSlice";
import { addToCart } from "../../store/productSlice/productSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

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

    // console.log(product);
  };

  return (
    <div className="col-lg-3 col-md-6">
      <div
        className="card w-100 border-0 mt-4 productCard"
        style={{ position: "relative" }}
      >
        <div className="card-image w-100 p-0 text-center bg-greylight rounded-lg mb-2">
          <img
            src={product.image}
            alt="productImage"
            style={{ width: "250px", height: "250px", objectFit: "contain" }}
            className="w-100 mt-0 mb-0 p-5 mt-4 mb-4 hover-shadow"
          />
        </div>
        <div className="card-body w-100 p-0 text-center">
          <h2 className="mt-2 mb-1">
            <span className="text-black fw-600 font-xss lh-26">
              {product.title}
            </span>
          </h2>
          <h6 className="font-xsss fw-500 text-grey-500 ls-2">
            <b>${product.price}</b>
          </h6>
        </div>

        <div className="product-overlay">
          <div className="text-center">
            <a
              style={{ width: "100%" }}
              href="true"
              onClick={(e) => addProductToCart(e, product)}
              className="add-to-cart bg-dark mb-2 text-white fw-700 pl-lg-5 pr-lg-5 text-uppercase font-xssss float-left border-dark border rounded-lg border-size-md d-inline-block mt-0 p-3 text-center ls-3"
            >
              Add to cart
            </a>
            <Link
              to={`/product?id=${product.id}`}
              style={{ width: "100%", display: "block" }}
              className="add-to-cart bg-light text-dark fw-700 pl-lg-5 pr-lg-5 text-uppercase font-xssss float-left border-dark border rounded-lg border-size-md d-block mt-0 p-3 text-center ls-3"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
