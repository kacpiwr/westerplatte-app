import { motion } from "framer-motion";
import Toolbar from "./components/toolbar.js";
import Section1 from "./components/section1.js";
import Section2 from "./components/section2.js";
import Section3 from "./components/section3.js";
import VideoGallery from "./components/videoGallery.js";

function Home() {
  return (
    <div className="App">
      <motion.div 
        className="toolbar"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Toolbar />
      </motion.div>

      <motion.div
        className="section1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Section1 />
      </motion.div>

      <motion.div
        className="section2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Section2 />
      </motion.div>

      <motion.div
        className="section2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Section3 />
      </motion.div>

      <motion.div
        className="video-gallery"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <VideoGallery />
      </motion.div>
    </div>
  );
}

export default Home;
