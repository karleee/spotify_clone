import React from 'react';
const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class SearchIndex extends React.Component {
  // Constructor for Search Index component
  constructor(props) {
    super(props);

    this.state = {
      inputVal: "",
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

  // Finds matches with user input
  matches(input) {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return matches;
    }

    this.props.values.forEach(value => {
      let sub;
      if (value.title && input.length >= 2) { 
          sub = value.title.slice(0, input.length);
      } else if (value.name && input.length >= 2) {
          sub = value.name.slice(0, input.length);
      }

      if (input.length >= 2 && sub.toLowerCase() === input.toLowerCase()) {
          matches.push(value);
      }
    });
    
    if (matches.length === 0) {
        matches.push('No results found for ' + `\"${input}\"`);
    }
    return matches;
  }


//     handleInput(e) {
//         e.preventDefault();
//         let results = this.matches(e.target.value);
//         this.setState({ inputVal: e.target.value, results });


//     }

//     render() {
//         const { logout, currentUser } = this.props;
//         let result;
//         let notFound;


//         if (typeof this.state.results[0] === "string") {
//             notFound = <div className="search-error"><h1 className="error-text">{this.state.results}</h1></div>;
//         } else {
//             result = this.state.results;

//             notFound = "";
//         }
//         return (
//             <div className="search-main-container">
//                 <NavSidebar logout={logout} currentUser={currentUser} />
//                 <div className="search-wrapper">

//                     <section className="search-container">
//                         <div className="search-bar">
//                             <label className="search-bar-label">
//                                 Search for a Artist, Album, Playlist</label>
//                             <input className="search-input"
//                                 onChange={this.handleInput}
//                                 placeholder="Start typing..." type="text">
//                             </input>
//                         </div>
//                     </section>

//                     <section className="search-results">
//                         {notFound ? notFound :
//                             <SearchResultContainer
//                                 inputVal={this.state.inputVal}
//                                 result={result}
//                             />}
//                     </section>
//                 </div>

//             </div>
//         );
//     }
}

export default SearchIndex;