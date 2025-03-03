import React from 'react';
import Collapsible from 'react-collapsible';
import Toolbar from './components/toolbar';
import "./styles/soilders-styles.css";
import ReactVideoGallery from "./components/videoGallery"


const Soilders = () => {
  return (
    <div>
      <div className="toolbar">
        <Toolbar />
      </div>
      <div id="core" className="container-soilders">
        <h1 className='title'>Filmy o westerplatte</h1>
        <ReactVideoGallery/>
      </div>
    </div>
  );
};

export default Soilders;
