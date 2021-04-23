import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      // userInput: string
    }

    // props: {
    //   filterBooks: function,
    //   reset: function
    // }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    this.props.search(this.state.input);
    this.setState({ input: "" });

  }

  render() {
    return (
      <div>
        <input value={this.state.input}
        placeholder="Find your book here!"
        onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleSearch}>Search</button>
     </div>
    );
  }
}

export default SearchBar;