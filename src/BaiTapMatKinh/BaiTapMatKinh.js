import React, { Component } from 'react'
import { GlassesArr} from './Data'
import ListGlass from './ListGlass'
import DetailGlass from './DetailGlass'

export default class BaiTapMatKinh extends Component {
  state ={
    GlassesArr : GlassesArr,
    DetailGlass: GlassesArr
  }
  render() {
    console.log(this.state.GlassesArr);
    return (
      <div>
        <ListGlass list={this.state.GlassesArr}/> 
        <DetailGlass />
      </div>
    )
  }
}
