import './App.css';
import SearchBar from './SearchBar';
import React, { Component } from "react";
import Shelf from './Shelf';
import Booklist from './Booklist';
import data from './Data';
// import ClearSearch from './ClearSearch';

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: data,
      shelf: [],

    }

    this.handleSearchBar = this.handleSearchBar.bind(this);
  }

  // this.handleClearSearch = this.handleClearSearch.bind(this);

  // // handleClearSearch(value){
  // //   this.setState({ input: clear });
  // // }

  handleSearchBar(value) {
    this.setState({ input: value });
  }

  render() {
    console.log(this.state)
    return (
      
      <div className="App">
       
      <SearchBar add={this.handleSearchBar} />
      <Booklist />
      {/* {this.state.array} */}
      <Shelf />
      </div>
    );
  }
}

export default App;
