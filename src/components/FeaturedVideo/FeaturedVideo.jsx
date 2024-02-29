import React from "react";
import "./FeaturedVideo.scss";

import titleImg from "./../../assets/FeaturedTitleImage.png";

const FeaturedVideo = ({ featured }) => {
  function formatSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours}h ${minutes}m`;
  }

  return (
    <div className="featured-video">
      {featured && (
        <div className="data-container">
          <p>{featured.Category}</p>
          <img src={titleImg} alt="" />
          <div className="movie-details">
            <span>{featured.ReleaseYear}</span>
            <span>{featured.MpaRating}</span>
            <span>{formatSeconds(featured.Duration)}</span>
          </div>
          <div className="movie-description">{featured.Description}</div>
          <div className="control-buttons">
            <button className="Play">Play</button>
            <button className="More Info">More Info</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedVideo;
