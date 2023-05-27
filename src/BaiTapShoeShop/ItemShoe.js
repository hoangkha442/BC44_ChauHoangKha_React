import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let {image, name} = this.props.data
    return (
      <div className="col-6 p-4">
        <div className="card text-left h-100 border border-dark">
          <img className="card-img-top 0" src={image} alt />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
          </div>
          <button onClick={() => { 
            this.props.handleViewDetail(this.props.data)
           }} className="btn btn-success">Xem chi tiết</button>
           <button onClick={() => { 
            this.props.handleAddToCart(this.props.data)
            }} className="btn btn-danger mt-3">Mua</button>
        </div>
      </div>
    );
  }
}
