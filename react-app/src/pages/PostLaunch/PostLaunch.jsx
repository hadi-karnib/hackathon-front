import React, { useState } from 'react';
import "./postLaunch.css";
import Navbar from '../../components/navbar/Navbar';
import StreamlitEmbed from "../../components/streamlitEmbed/StreamlitEmbed";

function PostLaunch() {
  const [formData, setFormData] = useState({
    App: '',
    Category: '',
    Rating: '',
    Reviews: '',
    Size_in_MB: '',
    Type: '',
    Price: '',
    Content_Rating: '',
    Genres: '',
    Last_Updated: '',
    Android_Ver: '',
  });
  const [responseParams, setResponseParams] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const preparedData = {  
      App: formData.App,
      Category: formData.Category,
      Rating: parseFloat(formData.Rating),
      Reviews: parseInt(formData.Reviews, 10),
      Size_in_MB: parseInt(formData.Size_in_MB, 10),
      Type: formData.Type,
      Price: parseFloat(formData.Price),
      Content_Rating: formData.Content_Rating,
      Genres: formData.Genres,
      Last_Updated: formData.Last_Updated,
      Android_Ver: formData.Android_Ver,
    };

    try {
      const res = await fetch('http://localhost:8000/predict_model2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preparedData),
      });
      const result = await res.json();
      console.log(result);
      const params = `?installation_category=${result.Installs_category}&installation_number=${result.Installs}`;
      setResponseParams(params);
      setShowResults(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Navbar backgroundColor={"#FFF9F9"} linkColor={"black"} />
      <div className="post-launch-form-container">
        <h1 className="post-launch-form-heading">Get Your Post Launch Insights!</h1>
        <p className="post-launch-form-paragraph">Please complete the contact form for your deployed app.</p>
        <form className="post-launch-form" onSubmit={handleSubmit}>
          <div>
            <label className="post-launch-form-label" htmlFor="App">App Name</label>
            <input type="text" id="app-name" name="App" className="post-launch-form-input" placeholder="Enter name" value={formData.App} onChange={handleChange} />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="Category">Category</label>
            <select id="category" name="Category" className="post-launch-form-select" value={formData.Category} onChange={handleChange}>
              <option value="">Choose category</option>
              {[
                'ART_AND_DESIGN', 'AUTO_AND_VEHICLES', 'BEAUTY', 'BOOKS_AND_REFERENCE', 'BUSINESS',
                'COMICS', 'COMMUNICATION', 'DATING', 'EDUCATION', 'ENTERTAINMENT', 'EVENTS', 'FINANCE',
                'FOOD_AND_DRINK', 'HEALTH_AND_FITNESS', 'HOUSE_AND_HOME', 'LIBRARIES_AND_DEMO', 'LIFESTYLE',
                'GAME', 'FAMILY', 'MEDICAL', 'SOCIAL', 'SHOPPING', 'PHOTOGRAPHY', 'SPORTS', 'TRAVEL_AND_LOCAL',
                'TOOLS', 'PERSONALIZATION', 'PRODUCTIVITY', 'PARENTING', 'WEATHER', 'VIDEO_PLAYERS', 
                'NEWS_AND_MAGAZINES', 'MAPS_AND_NAVIGATION'
              ].map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="Last_Updated">Release Date</label>
            <input type="date" id="release-date" name="Last_Updated" className="post-launch-form-select" value={formData.Last_Updated} onChange={handleChange} />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="Size_in_MB">Size</label>
            <input type="number" id="size" name="Size_in_MB" className="post-launch-form-input" placeholder="Enter size in MB" value={formData.Size_in_MB} onChange={handleChange} />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="Content_Rating">Targeted Audience</label>
            <select id="targeted-audience" name="Content_Rating" className="post-launch-form-select" value={formData.Content_Rating} onChange={handleChange}>
              <option value="">Choose target audience</option>
              {[
                'Everyone', 'Teen', 'Everyone 10+', 'Mature 17+', 'Adults only 18+', 'Unrated'
              ].map(rating => (
                <option key={rating} value={rating.toLowerCase()}>{rating}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="Reviews">Number of Reviews</label>
            <input type="number" id="reviews" name="Reviews" className="post-launch-form-input" placeholder="Enter app’s number of reviews" value={formData.Reviews} onChange={handleChange} />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="Type">Type</label>
            <select id="type" name="Type" className="post-launch-form-select" value={formData.Type} onChange={handleChange}>
              <option value="">Choose type</option>
              {['Free', 'Paid'].map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="Android_Ver">Android Version</label>
            <select id="android-version" name="Android_Ver" className="post-launch-form-select" value={formData.Android_Ver} onChange={handleChange}>
              <option value="">Choose android version</option>
              {[
                'Android 4.1', 'Android 4.2', 'Android 4.3', 'Android 4.4', 'Android 5.0',
                'Android 5.1', 'Android 6.0', 'Android 7.0', 'Android 7.1', 'Android 8.0',
                'Android 8.1', 'Android 9.0', 'Android 10.0', 'Android 11.0', 'Android 12.0'
              ].map(version => (
                <option key={version} value={version}>{version}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="Rating">Average Rating</label>
            <input type="number" id="rating" name="Rating" className="post-launch-form-input" placeholder="Enter app’s average rating" step="0.1" value={formData.Rating} onChange={handleChange} />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="Price">Price</label>
            <input type="number" id="price" name="Price" className="post-launch-form-input" placeholder="Enter price" step="0.01" value={formData.Price} onChange={handleChange} />
          </div>
          <div>
            <label className="post-launch-form-label" htmlFor="Genres">Genre</label>
            <select id="genre" name="Genres" className="post-launch-form-select" value={formData.Genres} onChange={handleChange}>
              <option value="">Choose your Genre</option>
              {[
                'Art & Design', 'Art & Design;Pretend Play', 'Art & Design;Creativity',
                'Art & Design;Action & Adventure', 'Auto & Vehicles', 'Beauty',
                'Books & Reference', 'Business', 'Comics', 'Comics;Creativity',
                'Communication', 'Dating', 'Education;Education', 'Education',
                'Education;Creativity', 'Education;Music & Video', 'Education;Action & Adventure',
                'Education;Pretend Play', 'Education;Brain Games', 'Entertainment',
                'Entertainment;Music & Video', 'Entertainment;Brain Games', 'Entertainment;Creativity',
                'Events', 'Finance', 'Food & Drink', 'Health & Fitness', 'House & Home',
                'Libraries & Demo', 'Lifestyle', 'Lifestyle;Pretend Play', 'Adventure;Action & Adventure',
                'Arcade', 'Casual', 'Card', 'Casual;Pretend Play', 'Action', 'Strategy',
                'Puzzle', 'Sports', 'Music', 'Word', 'Racing', 'Casual;Creativity',
                'Casual;Action & Adventure', 'Puzzle;Creativity', 'Puzzle;Strategy',
                'Racing;Action & Adventure', 'Role Playing', 'Simulation', 'Sports;Action & Adventure',
                'Trivia', 'Board', 'Action & Adventure;Creativity', 'Educational', 'Trivia;Education'
              ].map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
          <div className='buttons'>
            <button type="submit" className="post-launch-form-button post-launch-form-button-primary">
              {showResults ? 'Hide Result' : 'Show results'}
            </button>
            <button type="button" className="post-launch-form-button post-launch-form-button-secondary">Cancel</button>
          </div>
        </form>
        {showResults && responseParams && (
          <div>
          <h2 className="result-form-heading">Here's your app insights</h2>
          <div className="results-container">
            <StreamlitEmbed data={responseParams} />
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default PostLaunch;
