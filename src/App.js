import React, { Component } from "react";
import { Header, MovieList, MovieDetails } from "./components";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: 0,
    };
  }
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row  flex-fill pt-4 p-2">
          <MovieList />
          <MovieDetails />
        </div>
      </div>
    );
  }
}

export default App;
