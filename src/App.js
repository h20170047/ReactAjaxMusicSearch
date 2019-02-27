import React, { Component } from 'react';
import './App.css';
import SearchForm from "./components/searchform";


class App extends Component {
  render() {
    return (
      <div>
        <div align="center">Search Music</div>
      <SearchForm></SearchForm>
      </div>
    );
  }
}

export default App;
