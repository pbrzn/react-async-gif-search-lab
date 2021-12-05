import React, { Component } from "react";

export default class GifSearch extends Component {
  state = {
    query: ""
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmission(this.state.query)}>
        <label>Search GIPHY: </label>
        <input type="text" id="query" onChange={this.handleChange}></input>
      </form>
    )
  }
}
