import React, { useState } from "react";
import FeaturedVideo from "../../components/FeaturedVideo/FeaturedVideo";
import TrendingNow from "../../components/TrendingNow/TrendingNow";
import "./HomePage.scss";
import data from "./../../data.json";

const storedId = sessionStorage.getItem("lastClickedMovieId");
const getInitialFeaturedState = () => {
  return storedId
    ? data.TendingNow.find((movie) => movie.Id === storedId)
    : data.Featured;
};

const HomePage = () => {
  const [featured, setFeatured] = useState(getInitialFeaturedState());
  const [isMovie, setIsMovie] = useState(false);

  const changePicToMovie = () => {
    setIsMovie(true);
  };
  const handleFeaturedChange = (movie) => {
    setIsMovie(false);
    setFeatured(movie);
    sessionStorage.setItem("lastClickedMovieId", movie.Id);

    setTimeout(() => {
      changePicToMovie();
    }, 2000);
  };

  const sortedMovies = [...data.TendingNow].sort((a, b) => {
    const lastClickedMovieId = storedId;
    if (a.Id === lastClickedMovieId) return -1;
    if (b.Id === lastClickedMovieId) return 1;
    return 0;
  });

  return (
    <div className="home-page">
      <FeaturedVideo
        featured={featured}
        isMovie={isMovie}
        changePicToMovie={changePicToMovie}
      />
      <TrendingNow
        handleFeaturedChange={handleFeaturedChange}
        trendingNow={sortedMovies}
      />
    </div>
  );
};

export default HomePage;
