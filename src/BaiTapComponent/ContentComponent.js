import React, { Component } from "react";

export default class ContentComponent extends Component {
  render() {
    return (
      <div className="content-component">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-4 mb-5">
              <div className="box text-center bg-light rounded-3 px-4 pb-4 pt-0">
                <div className="box-header text-center bg-primary text-white rounded-3 mb-4 mt-n4">
                  <i class="fa fa-layer-group"></i>
                </div>
                <div className="box-body">
                  <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                  <p >
                    With Bootstrap 5, we've created a fresh new layout for this
                    template!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-5">
              <div className="box text-center bg-light rounded-3 px-4 pb-4 pt-0">
                <div className="box-header text-center bg-primary text-white rounded-3 mb-4 mt-n4">
                <i class="fa fa-cloud-download-alt"></i>
                </div>
                <div className="box-body">
                  <h2 className="fs-4 fw-bold">Free to download</h2>
                  <p >
                  As always, Start Bootstrap has a powerful collectin of free templates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-5">
              <div className="box text-center bg-light rounded-3 px-4 pb-4 pt-0">
                <div className="box-header text-center bg-primary text-white rounded-3 mb-4 mt-n4">
                <i class="fa fa-comment-alt"></i>
                </div>
                <div className="box-body">
                  <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                  <p >
                  The heroic part of this template is the jumbotron hero header!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-5">
              <div className="box text-center bg-light rounded-3 px-4 pb-4 pt-0">
                <div className="box-header text-center bg-primary text-white rounded-3 mb-4 mt-n4">
                <i class="fa fa-bold"></i>
                </div>
                <div className="box-body">
                  <h2 className="fs-4 fw-bold">Feature boxes</h2>
                  <p >
                  We've created some custom feature boxes using Bootstrap icons!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-5">
              <div className="box text-center bg-light rounded-3 px-4 pb-4 pt-0">
                <div className="box-header text-center bg-primary text-white rounded-3 mb-4 mt-n4">
                <i class="fa fa-code"></i>
                </div>
                <div className="box-body">
                  <h2 className="fs-4 fw-bold">Simple clean code</h2>
                  <p >
                  We keep our dependencies up to date and squash bugs as they come!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 mb-5">
              <div className="box text-center bg-light rounded-3 px-4 pb-4 pt-0">
                <div className="box-header text-center bg-primary text-white rounded-3 mb-4 mt-n4">
                <i class="fa fa-check"></i>
                </div>
                <div className="box-body">
                  <h2 className="fs-4 fw-bold">A name you trust</h2>
                  <p >
                  Start Bootstrap has been the leader in free Bootstrap templates since 2013!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
