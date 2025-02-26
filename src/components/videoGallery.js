import React from "react";
import ReactPlayer from "react-player";

import img1 from "../assets2/westerplatte1.jpg";
import video1 from "../assets2/video.mp4";

const ReactVideoGallery = () => {
  return (
    <div>
      <ReactPlayer
        url={video1}
        controls
        playing={false}
        width="100%"
        height="auto"
        light={img1} // Miniatura przed odtworzeniem
      />
    </div>
  );
};

export default ReactVideoGallery;
