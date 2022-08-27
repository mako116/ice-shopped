import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const carts = useSelector((state) => state.products.carts);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [shipping] = useState(20);

  useEffect(() => {
    let items = 0;
    let price = 0;

    carts.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
    console.log(price);
  }, [carts, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="cart-wrapper pt-lg--7 pt-5 pb-lg--7 pb-5">
      <div className="container mw-75">
        {carts && carts?.length ? (
          <div className="row">
            <div className="col-lg-8 mb-3">
              <div className="table-content table-responsive">
                <table className="table text-center">
                  <thead className="bg-greyblue rounded-lg">
                    <tr>
                      <th className="border-0 p-4">&nbsp;</th>
                      <th className="border-0 p-4 text-left">Product</th>
                      <th className="border-0 p-4">Price</th>
                      <th className="border-0 p-4">Quantity</th>
                      <th className="border-0 p-4">Total</th>
                      <th className="border-0 p-4">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts?.map((item, index) => (
                      <CartItem item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="checkout-payment card border-0 mb-3 bg-greyblue p-5">
                <div className="cart-totals">
                  <h4 className="mont-font fw-600 font-lg mb-5">Cart totals</h4>
                  <div className="table-content table-responsive">
                    <table className="table order-table">
                      <tbody>
                        <tr>
                          <td className="fmont pt-2 fw-600">Subtotal</td>
                          <td className="fmont pt-2 text-right">
                            &#8358; {Math.trunc(totalPrice)}.00
                          </td>
                        </tr>
                        <tr>
                          <td className="fmont pt-2 fw-600">Shipping</td>
                          <td className="fmont pt-2 text-right">
                            <span>&#8358; {Math.trunc(shipping)}.00</span>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <td className="fmont pt-2 fw-600">Total</td>
                          <td className="fmont pt-2 text-right">
                            <span className="product-price-wrapper">
                              <span className="money fmont">
                                &#8358; {Math.trunc(totalPrice + shipping)}.00
                              </span>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <Link
                to={`/checkout`}
                className="bg-dark float-right text-white fw-600 text-uppercase font-xsss border-dark border rounded-lg border-size-md d-inline-block w-100 p-3 text-center ls-3"
              >
                Proceed To Checkout
              </Link>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body text-center">
                  <h4 className="mt-5">No Products in cart</h4>
                  <div className="mt-5 mb-5">
                    <Link
                      style={{ width: "200px" }}
                      to={"/"}
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                    >
                      All Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
