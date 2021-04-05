import { forwardRef } from "react";
import CheckoutProduct from "./CheckoutProduct";

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

export default RemovingAnimation;
