import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import BannerComponent from './BannerComponent'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'

export default class BaiTapComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BannerComponent />
        <ContentComponent />
        <FooterComponent />
      </div>
    )
  }
}
