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
  handleIncreaseQuantity = (product)=>{
    console.log('Hey please increse the quantity of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty +=1;  
    this.setState({
        // products: products both the key and value have the same name..
        //Shortcut
        products

    })
  }
  handleDecreaseQuantity=(product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty==0)return;
    products[index].qty -=1;
    this.setState({
        products
    })
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return( <CartItem product={product}
           key = {product.id}
           onIncreaseQuantity = {this.handleIncreaseQuantity}
           onDecreaseQuantity = {this.handleDecreaseQuantity} 
           />)
        })}
      </div>
    );
  }
}
export default Cart;
