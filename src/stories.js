import React from 'react';
import Collapsible from 'react-collapsible';
import ReactMarkDown from 'react-markdown';
import Toolbar from './components/toolbar';
import "./styles/soilders-styles.css";
import List from "./assets2/stories-list.json";

const Stories = () => {
  return (
    <div>
      <div className="toolbar">
        <Toolbar />
      </div>
      <div id="core" className="container-soilders">
      <img className="zdjecie" alt='zdjecie' src='/assets/westerplatte_zolnierze_pomnik.jpg'></img>
        <div className='textSoilder'>
          <p>Poniżej znajdują się różne historie z okresu Westerplatte</p>
        </div>
      {List.sections.map((storie, index) => (
        <Collapsible key={index} trigger={storie.title}>
            {storie.desc.split("\n").map((history) =>(
                <ReactMarkDown>{history}</ReactMarkDown>
            ))}
        </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default Stories;
