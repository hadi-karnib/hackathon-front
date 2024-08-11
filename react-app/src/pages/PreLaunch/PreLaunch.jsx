import React, { useState } from "react";
import "./PreLaunch.css";
import StreamlitEmbed from "../../components/streamlitEmbed/StreamlitEmbed";

const PreLaunch = () => {
  const [formData, setFormData] = useState({
    App: '',
    Category: '',
    Size_in_MB: '',
    Type: '',
    Price: '',
    Content_Rating: '',
    Genres: '',
    Last_Updated: '',
    Android_Ver: '',
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/your-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setResponse(result); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
                    {/* Add categories here */}
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
                    {/* Add types here */}
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
                    {/* Add ratings here */}
                  </select>
                  <label>Genres</label>
                  <input
                    type="text"
                    name="Genres"
                    value={formData.Genres}
                    onChange={handleChange}
                  />
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
            {response && <StreamlitEmbed data={response} />} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLaunch;
