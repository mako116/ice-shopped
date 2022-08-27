import React, { useEffect } from "react";
import Products from "../../components/shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../store/productSlice/actions";
import { setSelectedCategory } from "../../store/productSlice/productSlice";

const Home = () => {
  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      dispatch(getProducts());
      dispatch(getCategories());
    }

    return () => {
      if (selectedCategory === "") {
        dispatch(setSelectedCategory(""));
        dispatch(getProducts());
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await Axios.get("/products").catch((error) =>
  //       console.log(error)
  //     );
  //     dispatch(addProducts(response.data));

  //     console.log(response);

  //     return () => {
  //       dispatch(saveProductDetails(null));
  //     };
  //   };

  //   fetchProducts();
  // });

  return (
    <div className="shop-wrapper pt-lg--7 pt-5 pb-lg--7 pb-5">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-4 w__30">
              <div className="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                <div className="form-group mb-1">
                  <label htmlFor="Search" className="fw-600 text-grey-900">
                    Search by Keyword
                  </label>
                </div>
                <div className="form-group icon-input mb-0">
                  <input
                    type="text"
                    className="form-control style1-input pl-5 border-size-md border-light font-xsss"
                    placeholder="To search type and hit enter"
                  />
                  <i className="ti-search text-grey-500 font-xs"></i>
                </div>
              </div>
  
              <div className="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                <div className="form-group mb-0">
                  <label htmlFor="Search" className="fw-600 text-grey-900">
                    Categories
                  </label>
                </div>
                <ul className="recent-post mt-2">
                  <li className="mb-0">
                    <Link to={`/shop/6`} className="fw-600">
                      Drress
                    </Link>
                  </li>
                </ul>
              </div>
  
              <div className="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                <div className="form-group mb-0">
                  <label htmlFor="Search" className="fw-600 text-grey-900">
                    Brand
                  </label>
                </div>
                <div className="form-group mb-2 mt-2">
                  <div className="custom-control mr-0 custom-radio size-sm custom-control-inline d-block">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="customRadio1"
                      name="Depart"
                      value="customEx"
                      checked=""
                    />
                    <label
                      className="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block"
                      htmlFor="customRadio1"
                    >
                      Addidas
                      <span className="float-right fw-500 text-grey-500 font-xssss mt-1">
                        12
                      </span>
                    </label>
                  </div>
                </div>
                <div className="form-group mb-2">
                  <div className="custom-control mr-0 custom-radio size-sm custom-control-inline d-block">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="customRadio5"
                      name="Depart"
                      value="customEx"
                    />
                    <label
                      className="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block"
                      htmlFor="customRadio5"
                    >
                      Levis
                      <span className="float-right fw-500 text-grey-500 font-xssss mt-1">
                        15
                      </span>
                    </label>
                  </div>
                </div>
                <div className="form-group mb-2">
                  <div className="custom-control mr-0 custom-radio size-sm custom-control-inline d-block">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="customRadio3"
                      name="Depart"
                      value="customEx"
                    />
                    <label
                      className="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block"
                      htmlFor="customRadio3"
                    >
                      Cape Town
                      <span className="float-right fw-500 text-grey-500 font-xssss mt-1">
                        7
                      </span>
                    </label>
                  </div>
                </div>
                <div className="form-group mb-2">
                  <div className="custom-control mr-0 custom-radio size-sm custom-control-inline d-block">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="customRadio4"
                      name="Depart"
                      value="customEx"
                    />
                    <label
                      className="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block"
                      htmlFor="customRadio4"
                    >
                      Nikes
                      <span className="float-right fw-500 text-grey-500 font-xssss mt-1">
                        34
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div> */}
          {/* <div className="col-lg-8 w__70"> */}
          <div className="col-lg-12">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
