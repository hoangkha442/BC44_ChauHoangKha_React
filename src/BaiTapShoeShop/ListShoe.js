import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.list.map((item, index) => {
      return (
        <ItemShoe
          handleAddToCart={this.props.handleAddToCart}
          handleViewDetail={this.props.handleViewDetail}
          key={index}
          data={item}
        />
      );
    });
  };
  render() {
    return <div className="row col-6">{this.renderListShoe()}</div>;
  }
}
