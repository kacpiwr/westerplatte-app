import React from 'react';
import Collapsible from 'react-collapsible';
import Toolbar from './components/toolbar';
import "./styles/soilders-styles.css";
import List from "./assets2/soilders-list.json";

const Soilders = () => {
  return (
    <div>
      <div className="toolbar">
        <Toolbar />
      </div>
      <div id="core" className="container-soilders">
        <img className="zdjecie" alt='zdjecie' src='/assets/zaloga1.jpg'></img>
        <div className='textSoilder'>
          <p>Poniżej znajdują się życiorysy żołnierzy walczących na Westerplatte</p>
        </div>
        {Object.entries(List).map(([letter, soilders]) => (
          <Collapsible key={letter} trigger={letter}>
            {soilders.map(soilder => (
              <Collapsible key={soilder.name} trigger={soilder.name}>
                {soilder.description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </Collapsible>
            ))}
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default Soilders;
