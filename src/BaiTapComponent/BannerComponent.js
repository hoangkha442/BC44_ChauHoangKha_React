import React, { Component } from "react";

export default class BannerComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="py-5">
          <div className="bg-light rounded-3 p-4 p-lg-5">
            <div className="wrapper m-4 m-lg-5 text-center">
              <h1 className="display-5 font-weight-bold">A warm welcome!</h1>
              <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
              <a href="" className="btn btn-primary btn-lg">Call to action</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
