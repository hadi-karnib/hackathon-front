// import React, { useState } from 'react';

// const StreamlitEmbed = ({ data }) => {
//     // Generate query parameters from the data object
//     const queryParams = new URLSearchParams(data).toString();
//     const streamlitUrl = `http://localhost:8501/?${queryParams}`;

//     return (
//         <div>
//             <iframe
//                 src={streamlitUrl}
//                 style={{ width: '30%', height: '70vh', border: 'none' }}
//                 title="Streamlit"
//             ></iframe>
//         </div>
//     );
// };

// const App = () => {
//     // Sample data to be visualized in a bar chart
//     const [data, setData] = useState({
//         'Category_A': 10,
//         'Category_B': 15,
//         'Category_C': 7
//     });

//     return (
//         <div>
//             <h1>Your Custom React UI</h1>
//             <StreamlitEmbed data={data} />
//         </div>
//     );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PreLaunch from "./pages/PreLaunch/PreLaunch";
import PostLaunch from "./pages/PostLaunch/PostLaunch";
import OurStory from "./pages/OurStory/OurStory";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pre-launch" element={<PreLaunch />} />
          <Route path="/post-launch" element={<PostLaunch />} />
          <Route path="/our-story" element={<OurStory />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
