import React from "react";
import "./FeaturedVideo.scss";
import { FaPlay } from "react-icons/fa6";

import titleImg from "./../../assets/FeaturedTitleImage.png";

const FeaturedVideo = ({ featured }) => {
  function formatSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours}h ${minutes}m`;
  }
  console.log(featured);

  const backgroundStyle = {
    backgroundImage: `url(${featured.CoverImage})`,
  };
  return (
    <div className="featured-video" style={backgroundStyle}>
      {featured && (
        <div className="data-container">
          <p>{featured.Category}</p>
          <img src={titleImg} alt="titleImg" />
          <div className="movie-details">
            <span>{featured.ReleaseYear}</span>
            <span>{featured.MpaRating}</span>
            <span>{formatSeconds(featured.Duration)}</span>
          </div>
          <div className="movie-description">{featured.Description}</div>
          <div className="control-buttons">
            <button className="play-btn">
              <FaPlay />
              <span>Play</span>
            </button>
            <button className="more-info-btn">More Info</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedVideo;
