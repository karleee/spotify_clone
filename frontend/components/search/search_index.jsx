import React from 'react';
import SearchResultIndex from './search_result_index_container';

class SearchIndex extends React.Component {
  // Constructor for Search Index component
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: []
    };

    // Binding functions for context of this
    this.handleInput = this.handleInput.bind(this);
    this.matches = this.matches.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleArtist = this.handleArtist.bind(this);
  }

 
  // Handles title
  handleTitle(title) {
    this.setState({ title }); 
  }

  // Handles artist
  handleArtist(artist) {
    this.setState({ artist });
  }

  // Finds matching artist, playlist, album, and tracks with user input
  matches(input) {
    const matches = [];

    if (this.state.query.length === 0) return matches;

    this.props.values.forEach(value => {
      let sub;
      let attr = [];

      if (value.artist) attr.push(value.artist);
      if (value.title) attr.push(value.title);
      if (value.name) attr.push(value.name);


      attr.forEach(attr => {
        if (attr && input.length >= 2) sub = attr.slice(0, input.length);
        if (input.length >= 2 && sub.toLowerCase() === input.toLowerCase()) matches.push(value);
      });
    });

    if (matches.length === 0)  matches.push('No results found for ' + `\"${input}\"`);
    
    return matches;
  }

  // Handles user input
  handleInput(e) {
    e.preventDefault();
    let results = this.matches(e.target.value);
    this.setState({ query: e.target.value, results });
  }

  // Renders SearchIndex component
  render() {
    let found;
    let notFound;


    if (typeof this.state.results[0] === 'string') {
      notFound = <div className="search-error-wrapper">
        <h2>{this.state.results}</h2>
        <p>Please make sure your words are spelled correctly or use less or different keywords.</p>
      </div>;
    } else {
      found = this.state.results;
      notFound = "";
    }

    return ( 
      <div className="search-index search-bar-container">
        <div className="search-index bar-wrapper">
          <input type="text" onChange={this.handleInput} placeholder="Search for Artists, Songs, or Playlists" />
          <i className="search-index search-icon-wrapper"></i>
        </div>

        { notFound ? <p>{notFound}</p> : <SearchResultIndex query={this.state.query} found={found} /> }
      </div>
    );
  }
}

export default SearchIndex;