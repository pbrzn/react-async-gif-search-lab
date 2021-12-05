import React, { Component } from "react";

export default class GifList extends Component {
  handleImages = (props) => {
    return props.map((img) => {
      return (
        <li><img src={img} alt={img} /></li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.handleImages(this.props.images)}
        </ul>
      </div>
    )
  }
}
