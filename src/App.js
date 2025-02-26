import logo from './logo.svg';
import './App.css';
import  Toolbar from './components/toolbar.js'
import  Section1 from './components/section1.js'
import  Section2 from './components/section2.js'
import  Section3 from './components/section3.js'
import  VideoGallery from './components/videoGallery.js'

function App() {
  return (
    <div className="App">
      <div className="toolbar">
        <Toolbar/>
      </div>
      <div  className="section1">
        <Section1/>
      </div>
      <div  className="section2">
        <Section2/>
      </div>
      <div  className="section2">
        <Section3/>
      </div>
      <VideoGallery/>
    </div>
  );
}

export default App;
