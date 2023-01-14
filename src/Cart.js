import React from "react";
import "./index.css";
import CartItem from "./CartItem";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {  
        id:1,
          price: 99,
          title: "Watch",
          qty: 10,
          img: "",
        },
        {
            id:2,
          price: 999,
          title: "Laptop",
          qty: 4,
          img: "",
        },
        {
            id:3,
          price: 9999,
          title: "Smart Phone",
          qty: 12,
          img: "",
        },
      ],
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return( <CartItem product={product}
           key = {product.id}
           />)
        })}
      </div>
    );
  }
}
export default Cart;
