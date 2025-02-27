import React from "react";
import ReactPlayer from "react-player";
import "../styles/video-styles.css";
import img1 from "../assets2/westerplatte1.jpg";
import video1 from "../assets2/video.mp4";
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
      <div className="gap"></div>
      <div className="video-container">
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="dQw4w9WgXcQ" />
        </div>
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="dQw4w9WgXcQ" />
        </div>
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="dQw4w9WgXcQ" />
        </div>
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="dQw4w9WgXcQ" />
        </div>
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="dQw4w9WgXcQ" />
        </div>
        <div className="video">
          {/* Pass the desired YouTube video ID */}
          <YouTubeVideo videoId="dQw4w9WgXcQ" />
        </div>

      </div>
    </>
  );
};

export default ReactVideoGallery;
