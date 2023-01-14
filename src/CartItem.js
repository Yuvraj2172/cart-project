import React from "react";
import "./index.css";
class CartItem extends React.Component {
  
  // testing(){
  //   const promise = new Promise((resolve , reject) =>{
  //     setTimeout(()=>{
  //       resolve('done');
  //     },5000);
  //   })
  //   promise.then(()=>{
  //     //setState acts like a synchronus call
  //     this.setState({qty :this.state.qty + 10});
  //     this.setState({qty :this.state.qty + 10});
  //     this.setState({qty :this.state.qty + 10});
  //     console.log('state', this.state);
  //   })
  // }

  increaseQuantity= ()=>{
    // this.state.qty +=1;
    // console.log(this.state);
    //setState form 1 
    // this.setState({
    //   qty : this.state.qty +1
    // });

    // setState form 2 - if prevState is required use this...
    this.setState((prevState) =>{
      return {
        qty : prevState.qty +1
      }
    }); 

    

   
      
  }
  decreaseQuantity = () =>{
    const  {qty}  = this.state;
    if(qty == 0 ){
      return;
    }
    // console.log(this.state)
    this.setState((prevState)=>{
      return {
        qty : prevState.qty -1
      }
    });
  }
  render() {
    console.log("Props ", this.props);
    // console.log('render');
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        {this.props.jsx}
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
              onClick={this.increaseQuantity}
            /> 
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
            />
          </div>
        </div>
      </div>
    );
  }
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
