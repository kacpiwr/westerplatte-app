import React from 'react';
import Collapsible from 'react-collapsible';
import Toolbar from './components/toolbar';

const Soilders = () => {
  return (
    <div className="App">
      <div className="toolbar">
        <Toolbar/>
      </div>
      <div  className="section1">
      <Collapsible trigger="Start here">
          <p>
              This is the collapsible content. It can be any element or React
              component you like.
          </p>
          <p>
              It can even be another Collapsible component. Check out the next
              section!
          </p>
      </Collapsible>
        </div>
    </div>
  );
};

export default Soilders;