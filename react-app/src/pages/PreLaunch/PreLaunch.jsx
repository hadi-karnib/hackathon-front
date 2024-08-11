import React from "react";
import "./PreLaunch.css";
import Footer from "./../../components/Footer/Footer";

const PreLaunch = () => {
  return (
    <div className="mainprelaunch">
      <div className="market-insights-container">
        <div className="title-section">
          <h2>Get Your Market Insights!</h2>
          <p>Please complete the contact form, to get the best outcome!</p>
        </div>
        <div className="market-insights-content">
          <div className="market-insights-text">
            <p>
              Get insights to enhance the installation rate of your already
              deployed app on the App Store with our service!
            </p>
          </div>
          <div className="market-insights-form">
            <div className="form-container">
              <div className="form-group">
                <label>App Name</label>
                <input type="text" />
                <label>Category</label>
                <select>
                  <option value="">Select Category</option>
                  {/* Add categories here */}
                </select>
                <label>Size</label>
                <input type="text" />
                <label>Type</label>
                <select>
                  <option value="">Select Type</option>
                  {/* Add types here */}
                </select>
                <label>Release Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input type="text" />
                <label>Targeted Audience</label>
                <select>
                  <option value="">Select Audience</option>
                  {/* Add audiences here */}
                </select>
                <label>Android Version</label>
                <input type="text" />
                <label>Genre</label>
                <select>
                  <option value="">Select Genre</option>
                  {/* Add genres here */}
                </select>
              </div>
            </div>
            <div className="button-group">
              <button className="show-results">Show Results</button>
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PreLaunch;
