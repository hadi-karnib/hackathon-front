import React, { useState } from 'react';
import "./postLaunch.css";
import Navbar from '../../components/navbar/Navbar';
import StreamlitEmbed from "../../components/streamlitEmbed/StreamlitEmbed"

function PostLaunch() {
  const [showResults, setShowResults] = useState(false);
  const data ="?installation_category=high&installation_number=5000"

  const handleShowResults = () => {
    setShowResults(!showResults);
  };

  return (
    <div>
      <Navbar backgroundColor={"#FFF9F9"} linkColor={"black"} />
      <div className="post-launch-form-container">
        <h1 className="post-launch-form-heading">Get Your Post Launch Insights!</h1>
        <p className="post-launch-form-paragraph">Please complete the contact form for your deployed app.</p>
        <form className="post-launch-form">
          <div>
            <label className="post-launch-form-label" htmlFor="app-name">App Name</label>
            <input type="text" id="app-name" className="post-launch-form-input" placeholder="Enter app name" />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="category">Category</label>
            <select id="category" className="post-launch-form-select">
              <option value="">Select category</option>
            </select>
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="release-date">Release Date</label>
            <input type="date" id="release-date" className="post-launch-form-input" />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="size">Size</label>
            <input type="text" id="size" className="post-launch-form-input" placeholder="Enter size" />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="targeted-audience">Targeted Audience</label>
            <select id="targeted-audience" className="post-launch-form-select">
              <option value="">Select audience</option>
            </select>
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="number-review">Number of Reviews</label>
            <input type="number" id="number-review" className="post-launch-form-input" placeholder="Enter number of reviews" />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="type">Type</label>
            <select id="type" className="post-launch-form-select">
              <option value="">Select type</option>
            </select>
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="android-version">Android Version</label>
            <select id="android-version" className="post-launch-form-select">
              <option value="">Select version</option>
            </select>
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="average-rating">Average Rating</label>
            <input type="number" id="average-rating" className="post-launch-form-input" placeholder="Enter average rating" step="0.1" />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="price">Price</label>
            <input type="text" id="price" className="post-launch-form-input" placeholder="Enter price" />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="genre">Genre</label>
            <select id="genre" className="post-launch-form-select">
              <option value="">Select genre</option>
            </select>
          </div>
          <div className='buttons'>
            <button
              type="button"
              className="post-launch-form-button post-launch-form-button-primary"
              onClick={handleShowResults}
            >
              {showResults ? 'Hide Result' : 'Show Result'}
            </button>
            <button type="button" className="post-launch-form-button post-launch-form-button-secondary">Cancel</button>
          </div>
        </form>
        {showResults && (
          <div className="results-container">
            <h2 className="post-launch-form-heading">Here's your app insights</h2>
            <StreamlitEmbed data={data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostLaunch;
