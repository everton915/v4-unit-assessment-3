import React, { Component } from "react";

class ClearSearch extends Component {
  constructor() {
    super();

    this.state = {
  
    }

  
    this.handleClearSearch= this.handleClearSearch.bind(this);
  }

  handleClearSearch() {
    this.props.clearSearch(this.state.input);
    this.setState({ input: clear });

  }

  render() {
    return (
      <div>
        <input value={this.state.input}
        onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleClearSearch}>Search</button>
     </div>
    );
  }
}

export default ClearSearch;