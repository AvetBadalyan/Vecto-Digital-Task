import React from "react";
import "./FeaturedVideo.scss";
import { FaPlay } from "react-icons/fa6";

const FeaturedVideo = ({ featured, isMovie }) => {
  function formatSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours}h ${minutes}m`;
  }

  const backgroundStyle = {
    backgroundImage: `url(${featured.CoverImage})`,
  };

  return (
    <div className="featured-container">
      {featured && isMovie ? (
        <div className="featured-video">
          <video autoPlay>
            <source src={featured.VideoUrl} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="featured-image" style={backgroundStyle}>
          <div className="data-container">
            <p>{featured.Category}</p>
            <img
              src={featured.TitleImage}
              alt="Title"
              className="title-image"
            />
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
        </div>
      )}
    </div>
  );
};

export default FeaturedVideo;
