import React, { Component } from "react";

export default class DetailGlass extends Component {
  render() {
    let{url, name, desc} = this.props.detail
    return (
      <div>
        <div className="wrapper">
          <header>
            <h3 className="text-center fs-3 text-white py-4">
              TRY CLASS APP ONLINE
            </h3>
          </header>
          <div className="container">
            <div className="content pt-5 d-flex justify-content-around">
              <figure className="item rounded-3">
                <img
                  className="img-fluid rounded-3"
                  src="./glassesImage/model.jpg"
                  alt=""
                />
                <img className="classes" src="./glassesImage/v1.png" alt="" />
                <figcaption className="overlay">
                  <div className="text p-2">
                    <p className="fw-bold m-0 fs-4">GUCCI G8850U</p>
                    <p>
                      Light pink square lenses define these sunglasses, ending
                      with amother of pearl effect tip.
                    </p>
                  </div>
                </figcaption>
              </figure>
              <figure className="item rounded-3">
                <img
                  className="img-fluid rounded-3"
                  src={"./glassesImage/model.jpg"}
                  alt=""
                />
                <img className="classes" src={url} alt="" />
                <figcaption className="overlay">
                  <div className="text p-2">
                    <p className="fw-bold m-0 fs-4">{name}</p>
                    <p>
                      {desc}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
