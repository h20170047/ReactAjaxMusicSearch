import React, { Component } from 'react';
import './App.css';
import {SearchForm} from "./components/searchform";

class App extends Component {
  render() {
    return (
      <div>
        <div>React</div>
        <SearchForm></SearchForm>
      </div>
      // <div></div>
    );
  }
}

export default App;
