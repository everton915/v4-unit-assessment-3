import './App.css';
import SearchBar from './SearchBar';
import React, { Component } from "react";
import Shelf from './Shelf';
import Booklist from './Booklist';
import data from './Data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: data,
      shelf: [],

    };

    this.handleSearchBar = this.handleSearchBar.bind(this);
  }



  handleSearchBar(value) {
    this.setState({ input: value });
  }

  render() {
    console.log(this.state)
    return (
      
      <div className="App">
      <SearchBar add={this.handleSearchBar} />
      <Booklist />
      <Shelf />
      </div>
    );
  }
}

export default App;
