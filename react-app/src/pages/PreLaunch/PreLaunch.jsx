import React, { useState } from "react";
import "./PreLaunch.css";
import StreamlitEmbed from "../../components/streamlitEmbed/StreamlitEmbed";
import Navbar from "../../components/navbar/Navbar";

const PreLaunch = () => {
  const [formData, setFormData] = useState({
    App: '',
    Category: '',
    Size_in_MB: 0, 
    Type: '',
    Price: 0,
    Content_Rating: '',
    Genres: '',
    Last_Updated: '',
    Android_Ver: ''
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name === 'Size_in_MB' || name === 'Price') {
      setFormData({
        ...formData,
        [name]: type === 'number' ? parseInt(value) : value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch('http://localhost:8000/predict_decision_tree', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await res.json();

        console.log('Response from backend:', result);

        const installation_category = result.Installs_category;
        const installation_number = result.Installs;

        if (installation_category && installation_number) {
            const embedData = `?installation_category=${installation_category}&installation_number=${installation_number}`;
            setResponse(embedData);
            console.log('Embed data:', embedData);
        } else {
            console.error('installation_category or installation_number is missing in the response.');
        }

    } catch (error) {
        console.error('Error:', error);
    }
  };

  return (
    <div className="mainprelaunch">
      <Navbar backgroundColor={"#FFF9F9"} linkColor={"black"} />
      <div className="market-insights-container">
        <div className="title-section">
          <h2>Get Your Market Insights!</h2>
          <p>Please complete the contact form to get the best outcome!</p>
        </div>
        <div className="market-insights-content">
          <div className="market-insights-text">
            <p>
              Get insights to enhance the installation rate of your already
              deployed app on the App Store with our service!
            </p>
          </div>
          <div className="market-insights-form">
            <form className="model1-form" onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="form-group">
                  <label>App Name</label>
                  <input
                    type="text"
                    name="App"
                    value={formData.App}
                    onChange={handleChange}
                  />
                  <label>Category</label>
                  <select
                    name="Category"
                    value={formData.Category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    {['ART_AND_DESIGN', 'AUTO_AND_VEHICLES', 'BEAUTY',
                      'BOOKS_AND_REFERENCE', 'BUSINESS', 'COMICS', 'COMMUNICATION',
                      'DATING', 'EDUCATION', 'ENTERTAINMENT', 'EVENTS', 'FINANCE',
                      'FOOD_AND_DRINK', 'HEALTH_AND_FITNESS', 'HOUSE_AND_HOME',
                      'LIBRARIES_AND_DEMO', 'LIFESTYLE', 'GAME', 'FAMILY', 'MEDICAL',
                      'SOCIAL', 'SHOPPING', 'PHOTOGRAPHY', 'SPORTS', 'TRAVEL_AND_LOCAL',
                      'TOOLS', 'PERSONALIZATION', 'PRODUCTIVITY', 'PARENTING', 'WEATHER',
                      'VIDEO_PLAYERS', 'NEWS_AND_MAGAZINES', 'MAPS_AND_NAVIGATION'].map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <label>Size (in MB)</label>
                  <input
                    type="number"
                    name="Size_in_MB"
                    value={formData.Size_in_MB}
                    onChange={handleChange}
                  />
                  <label>Type</label>
                  <select
                    name="Type"
                    value={formData.Type}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    {['Free', 'Paid'].map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <label>Last Updated</label>
                  <input
                    type="date"
                    name="Last_Updated"
                    value={formData.Last_Updated}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    step="0.01"
                    name="Price"
                    value={formData.Price}
                    onChange={handleChange}
                  />
                  <label>Content Rating</label>
                  <select
                    name="Content_Rating"
                    value={formData.Content_Rating}
                    onChange={handleChange}
                  >
                    <option value="">Select Rating</option>
                    {['Everyone', 'Teen', 'Everyone 10+', 'Mature 17+',
                      'Adults only 18+', 'Unrated'].map(rating => (
                      <option key={rating} value={rating.toLowerCase()}>{rating}</option>
                    ))}
                  </select>
                  <label>Genres</label>
                  <select
                    name="Genres"
                    value={formData.Genres}
                    onChange={handleChange}
                  >
                    <option value="">Select Genre</option>
                    { [
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
  'Casual;Action & Adventure', 'Simulation', 'Adventure', 'Board', 'Trivia',
  'Role Playing', 'Simulation;Education', 'Action;Action & Adventure',
  'Casual;Brain Games', 'Simulation;Action & Adventure', 'Educational;Creativity',
  'Puzzle;Brain Games', 'Educational;Education', 'Card;Brain Games',
  'Educational;Brain Games', 'Educational;Pretend Play', 'Entertainment;Education',
  'Casual;Education', 'Music;Music & Video', 'Racing;Action & Adventure',
  'Arcade;Pretend Play', 'Role Playing;Action & Adventure', 'Simulation;Pretend Play',
  'Puzzle;Creativity', 'Sports;Action & Adventure', 'Educational;Action & Adventure',
  'Arcade;Action & Adventure', 'Entertainment;Action & Adventure', 'Puzzle;Action & Adventure',
  'Strategy;Action & Adventure', 'Music & Audio;Music & Video', 'Health & Fitness;Education',
  'Adventure;Education', 'Board;Brain Games', 'Board;Action & Adventure',
  'Board;Pretend Play', 'Casual;Music & Video', 'Role Playing;Pretend Play',
  'Entertainment;Pretend Play', 'Video Players & Editors;Creativity', 'Card;Action & Adventure',
  'Medical', 'Social', 'Shopping', 'Photography', 'Travel & Local',
  'Travel & Local;Action & Adventure', 'Tools', 'Tools;Education', 'Personalization',
  'Productivity', 'Parenting', 'Parenting;Music & Video', 'Parenting;Education',
  'Parenting;Brain Games', 'Weather', 'Video Players & Editors',
  'Video Players & Editors;Music & Video', 'News & Magazines', 'Maps & Navigation',
  'Health & Fitness;Action & Adventure', 'Educational', 'Casino', 'Adventure;Brain Games',
  'Trivia;Education', 'Lifestyle;Education', 'Books & Reference;Creativity',
  'Books & Reference;Education', 'Puzzle;Education', 'Role Playing;Education',
  'Role Playing;Brain Games', 'Strategy;Education', 'Racing;Pretend Play',
  'Communication;Creativity', 'Strategy;Creativity'
].map(genre => (
                      <option key={genre} value={genre}>{genre}</option>
                    ))}
                  </select>
                  <label>Android Version</label>
                  <input
                    type="text"
                    name="Android_Ver"
                    value={formData.Android_Ver}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="button-group">
                <button type="submit" className="show-results">Show Results</button>
                <button
                  type="button"
                  className="cancel"
                  onClick={() => setResponse(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {response && (
        <div className="streamlit-embed-container">
          <h2>Here Is Your App Insights</h2>
          <div className="streamlit-embed-content">
            <StreamlitEmbed data={response} />
          </div>
          <div className="app-insight-text">
          <h3>Appsight Note</h3>
        <p>Please be aware that the insights and results provided by this application are based on the data and algorithms used, and while we strive for accuracy, they may not always reflect 100% accurate information.</p>
      </div>
        </div>
      )}

      
    </div>
  );
};

export default PreLaunch;
