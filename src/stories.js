import React from 'react';
import Collapsible from 'react-collapsible';
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
      {List.sections.map((storie, index) => (
        <Collapsible key={index} trigger={storie.title}>
            <p>{storie.desc}</p>
        </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default Stories;
