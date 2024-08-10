import React, { useState } from 'react';

const StreamlitEmbed = ({ data }) => {
    // Generate query parameters from the data object
    const queryParams = new URLSearchParams(data).toString();
    const streamlitUrl = `http://localhost:8501/?${queryParams}`;

    return (
        <div>
            <iframe
                src={streamlitUrl}
                style={{ width: '30%', height: '70vh', border: 'none' }}
                title="Streamlit"
            ></iframe>
        </div>
    );
};

const App = () => {
    // Sample data to be visualized in a bar chart
    const [data, setData] = useState({
        'Category_A': 10,
        'Category_B': 15,
        'Category_C': 7
    });

    return (
        <div>
            <h1>Your Custom React UI</h1>
            <StreamlitEmbed data={data} />
        </div>
    );
};

export default App;
