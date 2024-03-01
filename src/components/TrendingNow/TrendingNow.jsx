import "./TrendingNow.scss";

const TrendingNow = ({ trendingNow, handleFeaturedChange }) => {
  return (
    <div className="trending-container">
      <span>Trending Now</span>
      <div className="movie-carousel">
        {trendingNow.map((movie) => (
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
