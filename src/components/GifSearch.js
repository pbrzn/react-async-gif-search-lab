import React, { Component } from "react";

export default class GifSearch extends Component {
  state = {
    query: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>Search GIPHY: </label>
        <input type="text" id="query" onChange={this.handleChange}></input>
      </form>
    )
  }
}
