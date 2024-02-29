import React, { useState } from "react";
import "./TrendingNow.scss"; // Add your TrendingNow styles here

const TrendingNow = ({ trendingNow, handleFeaturedChange }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleMovies = trendingNow.slice(startIndex, startIndex + 8);

  const handleNext = () => {
    if (startIndex + 8 < trendingNow.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="trending-container">
      <h2>Trending Now</h2>
      <div className="movie-carousel">
        <button onClick={handlePrev}>Prev</button>
        {visibleMovies.map((movie) => (
          <img
            key={movie.Id}
            src={movie.CoverImage}
            alt={movie.Title}
            onClick={() => handleFeaturedChange(movie)}
          />
        ))}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default TrendingNow;
