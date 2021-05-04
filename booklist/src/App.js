import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header';
import Shelf from './Components/Shelf';
import data from './data.js';
import React, { Component } from "react";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: data, 
      shelf: [],
    }
    this.addToShelf = this.addToShelf.bind(this);
  }

  addToShelf() {
    this.setState({ })
  } 

  clearShelf() {

  }

  filterBooks() {

  }

  reset() {

  }

  handleChange(value) {
    this.setState({ message: value });
  }

render() {
  return (
    <div className="App">
      <Header />
     <BookList addToShelf={this.addToShelf} books={this.state.books} />
     <Shelf />
      <input class="searchBar" onChange={e => this.handleChange(e.target.value)} type="text" />
      <button>Search</button>
      <button>Clear Search</button>
      <button>Clear Shelf</button>
    </div>
  );
}
}
export default App;
