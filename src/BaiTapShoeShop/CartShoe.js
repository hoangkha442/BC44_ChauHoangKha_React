import React, { Component } from "react";

export default class CartShoe extends Component {
  render() {
    let {} = this.props.cart;
    return (
      <div className="col-6">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <button
                    onClick={() => { 
                      this.props.handleChangeAmout(item.id, -1)
                     }}
                     className="btn btn-outline-success">-</button>
                    <span className="mx-2">{item.soLuong}</span>
                    <button
                    onClick={() => { 
                      this.props.handleChangeAmout(item.id, +1)
                     }}
                     className="btn btn-outline-success">+</button>
                  </td>
                  <td>{item.price * item.soLuong}</td>
                  <td>
                    <img style={{ width: 60 }} src={item.image} alt="" />
                  </td>
                  <td>
                    <button onClick={() => { 
                      this.props.handleDelete(item.id)
                     }} className="btn btn-danger">X</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
