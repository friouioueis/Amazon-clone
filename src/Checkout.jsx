import React, { forwardRef } from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
import "./Checkout.css";

function Checkout() {
  const RemovingAnimation = forwardRef(({ product }, ref) => (
    <div ref={ref}>
      <CheckoutProduct
        id={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        rating={product.rating}
      />
    </div>
  ));
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3 className="Checkout__address">hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <FlipMove
            staggerDelayBy={150}
            enterAnimation="accordionVertical"
            leaveAnimation="accordionVertical"
          >
            {basket?.map((product) => (
              <RemovingAnimation key={product.id} product={product} />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
