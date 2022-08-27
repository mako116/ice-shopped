import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductByCategory,
  getProducts,
} from "../../store/productSlice/actions";
import { setSelectedCategory } from "../../store/productSlice/productSlice";
import CardLoading from "../loading/CardLoading";
import ProductCard from "./ProductCard";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.products.categories);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );
  const loading = useSelector((state) => state.products.loading);

  const handleChange = (value) => {
    if (value === "") {
      dispatch(getProducts());
      dispatch(setSelectedCategory(""));

      return;
    }
    dispatch(setSelectedCategory(value));
    dispatch(getProductByCategory(value));
  };

  let renderProducts = products ? (
    products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))
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
  );

  return (
    <div className="row">
      <div className="col-lg-12 mt-0">
        <h4 className="float-left font-xss fw-700 text-grey-700 text-uppercase ls-3 mt-2 pt-1">
          {selectedCategory ? selectedCategory : "All Products"}
        </h4>
        <select
          className="searchCat float-right sort"
          value={selectedCategory}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="">All</option>
          {categories &&
            categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          {/* <option value="151781441596 ">Fashion</option>
          <option value="139119624252 ">- Men</option>
          <option value="139118313532 ">- Women</option>
          <option value="139360141372 ">Electronics</option>
          <option value="152401903676 ">Home &amp; Garden</option>
          <option value="138866720828 ">- Decor</option>
          <option value="138866917436 ">- Lighting</option> */}
        </select>
      </div>
      {loading ? (
        <div className="row mt-5" style={{ width: "100%" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 8, 9].map((i, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <CardLoading />
            </div>
          ))}
        </div>
      ) : (
        renderProducts
      )}
    </div>
  );
};

export default Products;
