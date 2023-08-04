import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genre: [],
      currGenre: "All Genre",
      currText: "",
      limit: 5,
      currPage: 1,
    };
  }

  async componentDidMount() {
    console.log("CDM is called ");
    // Commented out the fetch for local development
    // let res = await fetch(
    //   "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=2"
    // );
    // let data = await res.json();

    // For local development, you can use a mock data array as an example
    let data = [
      {
        id: 1,
        original_title: "Movie 1",
        genre_ids: [28],
        popularity: 123.45,
        vote_average: 7.8,
        backdrop_path: "/path_to_image.jpg",
      },
      // ... other movie objects ...
    ];

    // Rest of your code remains unchanged
    // ...
  }

  // Rest of your component methods

  render() {
    let genreId = {
      // ... your genreId mapping ...
    };
    let filteredMovies = this.state.movies;

    // Rest of your filtering logic

    return (
      <div className="row">
        {/* Rest of your component's JSX */}
      </div>
    );
  }
}
