import React, { Component } from 'react'
import { GlassesArr} from './Data'
import ListGlass from './ListGlass'
import DetailGlass from './DetailGlass'

export default class BaiTapMatKinh extends Component {
  state ={
    GlassesArr : GlassesArr,
    DetailGlasses: GlassesArr[0]
  }
  handleViewDetail = (shoe) => { 
    this.setState({DetailGlasses: shoe})
   }
  render() {
    console.log(this.state.GlassesArr);
    return (
      <div>
        <ListGlass handleViewDetail={this.handleViewDetail} list={this.state.GlassesArr}/> 
        <DetailGlass detail={this.state.DetailGlasses}/>
      </div>
    )
  }
}
