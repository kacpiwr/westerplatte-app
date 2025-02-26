import React from "react";
import ReactPlayer from "react-player";
import  "../styles/video-styles.css";
import img1 from "../assets2/westerplatte1.jpg";
import video1 from "../assets2/video.mp4";

const ReactVideoGallery = () => {
  return (
    <><div className="gap"></div>
    <div className="video-container">
          <div className="video">
            <ReactPlayer
                url={video1}
                controls
                playing={false}
                width="100%"
                height="300px" // Wymuszona wysokość miniatury
                light={img1} 
                />

          </div>
          <div className="video">
              <ReactPlayer
                url={video1}
                controls
                playing={false}
                width="100%"
                height="300px"
                light={img1} // Miniatura przed odtworzeniem
              />
          </div>
          <div className="video">
              <ReactPlayer
                url={video1}
                controls
                playing={false}
                width="100%"
                height="300px"
                light={img1} // Miniatura przed odtworzeniem
              />
          </div>
          <div className="video">
              <ReactPlayer
                url={video1}
                controls
                playing={false}
                width="100%"
                height="300px"
                light={img1} // Miniatura przed odtworzeniem
              />
          </div>
          <div className="video">
              <ReactPlayer
                url={video1}
                controls
                playing={false}
                width="100%"
                height="300px"
                light={img1} // Miniatura przed odtworzeniem
              />
          </div>
          <div className="video">
              <ReactPlayer
                url={video1}
                controls
                playing={false}
                width="100%"
                height="300px"
                light={img1} // Miniatura przed odtworzeniem
              />
          </div>
      </div></>
   
  );
};

export default ReactVideoGallery;
