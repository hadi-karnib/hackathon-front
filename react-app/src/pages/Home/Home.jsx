import { useNavigate } from 'react-router-dom';
import "./Home.css";
import Variant1 from "../../Assets/Variant1.svg";
import Variant2 from "../../Assets/Variant2.svg";
import Variant3 from "../../Assets/Variant3.svg";
import Navbar from '../../components/navbar/Navbar';


function Home() {
  const navigate = useNavigate();

  return (
    <div className="homemaindiv">
      <Navbar 
        backgroundColor="linear-gradient(to right, #a855f7, #3b82f6)" 
        logoSrc="http://localhost:3000/images/LOGO-01.png" 
      />
      <div className="home">
        <div className="content">
          <h1>
            <span className="bring-every">Bring every</span>
            <br />
            <span className="highlight">idea to life just like magic!</span>
          </h1>
          <p>Welcome to AppSight, your AI-driven tool for predicting app success! We provide data-driven insights to help developers launch with confidence. Join us to redefine app development with accurate predictions and powerful insights.</p>
          <p className="bold-text">Pick our pre-trial model to predict success or post-trial to analyze performance and reviews</p>
          <div className="buttons">
            <button 
              className="deployed" 
              onClick={() => navigate('/postlaunch')}
            >
              Deployed
            </button>
            <button 
              className="undeployed" 
              onClick={() => navigate('/prelaunch')}
            >
              Undeployed
            </button>
          </div>
        </div>
        <div className="right-shape">
          <img src={Variant1} alt="Variant 1" className="variant variant1" />
          <img src={Variant2} alt="Variant 2" className="variant variant2" />
          <img src={Variant3} alt="Variant 3" className="variant variant3" />
        </div>
      </div>
    </div>
  );
}

export default Home;
