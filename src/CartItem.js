import React from "react";
import "./index.css";
const CartItem=(props)=> {
  

   
    const { price, title, qty } =props.product;
    const {
      product,
       onIncreaseQuantity,
       onDecreaseQuantity,
        onDeleteProduct
    } = props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>{price}</div>
          <div style={{ color: "#777" }}>{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons*/}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={()=> onIncreaseQuantity(product)}
            
            /> 
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={()=>onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
              onClick = {()=>onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }

export default CartItem;
const styles = {
  image: {
    height: 100,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};
