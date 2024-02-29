import React, { useState } from "react";
import FeaturedVideo from "../../components/FeaturedVideo/FeaturedVideo";
import TrendingNow from "../../components/TrendingNow/TrendingNow";
import "./HomePage.scss";
import data from "./../../data.json";

const HomePage = () => {
  const [featured, setFeatured] = useState(data.Featured);
  const handleFeaturedChange = (movie) => {
    setFeatured(movie);
  };
  return (
    <div className="home-page">
      <FeaturedVideo featuredMovie={featured} />
      <TrendingNow
        handleFeaturedChange={handleFeaturedChange}
        trendingNow={data.TendingNow}
      />
    </div>
  );
};

export default HomePage;
