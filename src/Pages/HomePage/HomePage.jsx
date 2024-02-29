import React from "react";
import FeaturedVideo from "../../components/FeaturedVideo/FeaturedVideo";
import TrendingNow from "../../components/TrendingNow/TrendingNow";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <FeaturedVideo />
      <TrendingNow />
    </div>
  );
};

export default HomePage;
