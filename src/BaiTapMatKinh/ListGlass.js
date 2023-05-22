import React, { Component } from 'react'
import ItemGlass from './ItemGlass'

export default class ListGlass extends Component {
  renderListGlass = () => { 
    return this.props.list.map((item, index) => { 
      return <ItemGlass key={index} data={item} />
     })
   }
  render() {
    return (
      <div>
        {this.renderListGlass()}
      </div>
    )
  }
}
