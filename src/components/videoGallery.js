import React from "react";
import ReactPlayer from "react-player";
import "../styles/video-styles.css";
import YouTube from "react-youtube";

// Functional Component to Render a YouTube Video
const YouTubeVideo = ({ videoId }) => {
  const options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return <YouTube videoId={videoId} opts={options} onReady={(e) => e.target.pauseVideo()} id="video" />;
};

// Main Video Gallery Component
const ReactVideoGallery = () => {
  return (
    <>
      <div className="video-container">
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="99Qn0nfdIec" />
        </div>
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="kAlon-hQ2tw" />
        </div>
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="J9iG2JBYqcQ" />
        </div>
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="ORqBiToHllQ" />
        </div>
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="vVKVW2rH9G0" />
        </div>
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="YFlNDcXwW6w" />
        </div>

      </div>
    </>
  );
};

export default ReactVideoGallery;
