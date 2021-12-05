import React, { Component } from "react";

export default class GifList extends Component {
  state = {
    images: this.props.images
  }

  render() {
    return (
      <div>
        <ul>
          <li><img src={this.state.images[0]} alt={this.state.images[0]}/></li>
          <li><img src={this.state.images[1]} alt={this.state.images[1]}/></li>
          <li><img src={this.state.images[2]} alt={this.state.images[2]}/></li>
        </ul>
      </div>
    )
  }
}
