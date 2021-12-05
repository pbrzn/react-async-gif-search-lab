import React, { Component } from "react";

export default class GifSearch extends Component {
  state = {
    query: ""
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmission(this.state.query)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Search GIPHY: </label>
        <input type="text" onChange={this.handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
