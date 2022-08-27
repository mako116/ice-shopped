import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlertPopModal } from "../../store/alert/alertSlice";
import {
  adjustQty,
  removeItemFromCart,
} from "../../store/productSlice/productSlice";

const CartItem = ({ item }) => {
  let url = "";
  const dispatch = useDispatch();

  const [input, setInput] = useState(item.qty);

  const decreaseQuantity = () => {
    if (input === 1) {
      return;
    }

    let newQty = input;

    newQty--;

    setInput(newQty);
    let payload = {
      id: item.id,
      qty: newQty,
    };
    dispatch(adjustQty(payload));
  };

  const increaseQuantity = () => {
    let newQty = input;
    newQty++;
    setInput(newQty);
    let payload = {
      id: item.id,
      qty: newQty,
    };
    dispatch(adjustQty(payload));
  };

  const removeItem = () => {
    let payload = {
      id: item.id,
    };
    dispatch(removeItemFromCart(payload));
    dispatch(
      setAlertPopModal({
        status: true,
        type: "success",
        message: "product removed from cart",
      })
    );
  };

  return (
    <tr>
      <td className="product-thumbnail text-left">
        <img
          src={item?.image}
          alt="Product Thumnail"
          className="w50 rounded-lg"
        />
      </td>
      <td className="product-headline text-left wide-column">
        <h4>
          <a href={url} className="text-grey-900 fw-600">
            {item?.title}
          </a>
        </h4>
      </td>
      <td className="product-p" style={{ whiteSpace: "nowrap" }}>
        <span className="product-price-wrapper">
          <span className="money text-grey-500 fw-500">
            &#8358; {Math.trunc(item?.price)}.00
          </span>
        </span>
      </td>
      <td className="product-quantity">
        <div className="quantity">
          <span className="quantity-input pl-0">{input}</span>
          <div className="dec qtybutton" onClick={() => decreaseQuantity()}>
            -
          </div>
          <div className="inc qtybutton" onClick={() => increaseQuantity()}>
            +
          </div>
        </div>
      </td>
      <td className="product-total-price" style={{ whiteSpace: "nowrap" }}>
        <span className="product-price-wrapper">
          <span className="money fmont">
            <strong>&#8358; {Math.trunc(item?.price * input)}.00</strong>
          </span>
        </span>
      </td>
      <td className="product-remove text-right">
        <span onClick={() => removeItem()} style={{ cursor: "pointer" }}>
          <i className="ti-trash font-xs text-grey-500"></i>
        </span>
      </td>
    </tr>
  );
};

export default CartItem;
