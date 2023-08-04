import React, { Component } from "react";
import axios from "axios";

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1"
      );

      this.setState({
        movies: response.data.results
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        {movies.length === 0 ? (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="card banner-card">
            <img
              src={`https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`}
              className="card-img-top banner-img"
              alt="..."
            />

            <h5 className="card-title banner-title">
              {movies[0].original_title}
            </h5>
            <p className="card-text banner-text">{movies[0].overview}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Banner;
