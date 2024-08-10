import React from "react";
import PropTypes from "prop-types";

const StreamlitEmbed = ({ data }) => {
  const queryParams = new URLSearchParams(data).toString();
  const streamlitUrl = `http://localhost:8501/?${queryParams}`;

  return (
    <div>
      <iframe
        src={streamlitUrl}
        style={{ width: "100%", height: "70vh", border: "none" }}
        title="Streamlit"
        onError={(e) => console.error("Error loading Streamlit app:", e)}
      ></iframe>
    </div>
  );
};

StreamlitEmbed.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StreamlitEmbed;
