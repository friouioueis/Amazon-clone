import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";
import "./Checkout.css";
import RemovingAnimation from "./Animation";

function Checkout() {
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
            staggerDurationBy="50"
            duration={400}
            enterAnimation="accordionVertical"
            leaveAnimation="accordionVertical"
          >
            {basket?.map((product, i) => (
              <RemovingAnimation
                key={`${product.id} + ${i}`}
                product={product}
              />
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
