import React, { Component } from 'react'
import ItemGlass from './ItemGlass'

export default class ListGlass extends Component {
  renderListGlass = () => { 
    return this.props.list.map((item, index) => { 
      return <ItemGlass handleViewDetail={this.props.handleViewDetail} key={index} data={item} />
     })
   }
  render() {
    return (
      <div className='container d-flex justify-content-center ListGlasses'>
        {this.renderListGlass()}
      </div>
    )
  }
}
