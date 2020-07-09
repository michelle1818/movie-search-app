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
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
}

export default App;
