import React from "react";
import SearchMovies from "./searchMovies";
import "./App.css";

function App() {
  return <Main />;
}

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <p className="p">
          Browse through your favorite movies to see release date, IMDB rating,
          and synopsis
        </p>
        <SearchMovies />
      </div>
    );
  }
}

export default App;
