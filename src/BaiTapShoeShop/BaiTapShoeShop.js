import React, { Component } from "react";
import { shoeArr } from "./Data";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import CartShoe from "./CartShoe";

export default class BaiTapShoeShop extends Component {
  state = {
    shoeArr: shoeArr,
    detailShoe: shoeArr[0],
    cart: [],
  };
  handleViewDetail = (shoe) => {
    this.setState({
      detailShoe: shoe,
    });
  };
  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];

    let index = cloneCart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      // -1 => chưa có
      // coppy object cũ vào newShoe và thêm số lượng
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      // đã có => update soLuong + 1
      cloneCart[index].soLuong++;
    }

    //th1 sản phẩm chưa có trong giỏ hàng => push
    // th2 spham đã có trong giỏ hàng => k push
    // cloneCart.push(shoe);
    this.setState({
      cart: cloneCart,
    });
  };
  handleDelete = (id) => {
    let cloneCart = this.state.cart.filter((item) => item.id !== id);
    this.setState({
      cart: cloneCart,
    });
  };
  handleChangeAmout = (id, option) => { 
    let cloneCart = [...this.state.cart]
    let index = cloneCart.findIndex((item) =>  item.id == id )
    cloneCart[index].soLuong = cloneCart[index].soLuong + option
    if(cloneCart[index].soLuong == 0){
      cloneCart.splice(index, 1)
    }
    this.setState({
      cart: cloneCart,
    })
   }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <CartShoe handleChangeAmout={this.handleChangeAmout} handleDelete={this.handleDelete} cart={this.state.cart} />
          <ListShoe
            handleAddToCart={this.handleAddToCart}
            handleViewDetail={this.handleViewDetail}
            list={this.state.shoeArr}
          />
        </div>
        <DetailShoe detail={this.state.detailShoe} />
      </div>
    );
  }
}
