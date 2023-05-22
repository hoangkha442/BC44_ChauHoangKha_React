import React, { Component } from "react";

export default class ItemGlass extends Component {
  render() {
    return (
      <div className="ItemGlasses">
        <button onClick={() => { 
          this.props.handleViewDetail(this.props.data)
         }}
        >
          <img src={this.props.data.url} alt="" />
        </button>
      </div>
    );
  }
}
