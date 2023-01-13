import React from "react";
import './index.css';
class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25}}>Phone</div>
                    <div style={{color  : '#777'}}>Rs. 999</div>
                    <div style={{color : '#777'}}>Qty : 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                    </div>
                </div>
            </div>
        )
    }
}
export default CartItem;
const styles ={
    image : {
        height: 100,
        width:110,
        borderRadius: 4,
        background : '#ccc'
    }
}