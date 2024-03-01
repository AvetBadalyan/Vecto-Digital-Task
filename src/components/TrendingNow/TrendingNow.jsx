import React, { useState } from "react";
import "./TrendingNow.scss"; // Add your TrendingNow styles here

const TrendingNow = ({ trendingNow, handleFeaturedChange }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleMovies = trendingNow.slice(startIndex);

  return (
    <div className="trending-container">
      <span>Trending Now</span>
      <div className="movie-carousel">
        {visibleMovies.map((movie) => (
          <img
            key={movie.Id}
            src={movie.PosterImage}
            alt={movie.Title}
            onClick={() => handleFeaturedChange(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
