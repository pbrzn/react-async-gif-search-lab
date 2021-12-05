import React, { Component } from "react";
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {
  state = {
    images: []
  }

  handleSubmit = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=EFCoL2Rrf20fmXIcRXeBYbctQDIDHlfv&q=${query}&limit=3&offset=0&rating=g&lang=en`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          images: json.data.map(img => img.images.original.url)
        })
      })
  }

  componentDidMount() {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=EFCoL2Rrf20fmXIcRXeBYbctQDIDHlfv&q=dog&limit=3&offset=0&rating=g&lang=en")
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        images: json.data.map(img => img.images.original.url)
      })
    })
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmission={this.handleSubmit} />
        <GifList images={this.state.images}/>
      </div>
    )
  }
}
