// import React from "react";
// import "./Home.css";

// function Home() {
//   return (
//     <div className="home">
//       <div className="content">
//         <h1>Bring every <span className="highlight">idea to life just like magic!</span></h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sapien a massa viverra tristique. Aliquam vestibulum placerat felis.</p>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sapien a massa?</p>
//         <div className="buttons">
//           <button className="deployed">Deployed</button>
//           <button className="undeployed">Undeployed</button>
//         </div>
//       </div>
//       <div className="right-shape">
//         {/* Add the SVG or shape component here */}
//       </div>
//     </div>
//   );
// }

// export default Home;




import React from "react";
import "./Home.css";
import Variant1 from "../../Assets/Variant1.svg";
import Variant2 from "../../Assets/Variant2.svg";
import Variant3 from "../../Assets/Variant3.svg";
import React from 'react';
import Navbar from '../../components/navbar/Navbar';

function Home() {
  return (
    <div className="home">
       <div>
    <Navbar backgroundColor="linear-gradient(to right, #a855f7, #3b82f6)" logoSrc="http://localhost:3000/images/LOGO-01.png"/>
  <h1>Home Page</h1> 
  </div>
      <div className="content">
        <h1>Bring every <span className="highlight">idea to life just like magic!</span></h1>
        <p>Welcome to AppSight, your AI-driven tool for predicting app success! We provide data-driven insights to help developers launch with confidence. Join us to redefine app development with accurate predictions and powerful insights.</p>
        <p>Pick our pre-trial model to predict success or post-trial to analyze performance and reviews</p>
        <div className="buttons">
          <button className="deployed">Deployed</button>
          <button className="undeployed">Undeployed</button>
        </div>
      </div>
      <div className="right-shape">
        <img src={Variant1} alt="Variant 1" className="variant variant1" />
        <img src={Variant2} alt="Variant 2" className="variant variant2" />
        <img src={Variant3} alt="Variant 3" className="variant variant3" />
      </div>
    </div>
  );
}
export default Home;
