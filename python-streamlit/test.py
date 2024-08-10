import streamlit as st
import plotly.express as px
import plotly.graph_objs as go

# Set page config to wide mode
st.set_page_config(layout="wide")

# Function to extract URL parameters
def get_url_params():
    query_params = st.query_params
    return query_params

# Get the URL parameters
params = get_url_params()

# Prepare data for visualization
if params:
    try:
        categories = list(params.keys())
        values = [int(v[0]) for v in params.values()]

        # Create a bar chart using Plotly
        fig = px.bar(x=categories, y=values, labels={'x': 'Category', 'y': 'Count'})
        
        # Update layout to use full width and height
        fig.update_layout(
            width=1000,  # width of the plot (you can adjust this if needed)
            height=500,  # height of the plot
            autosize=True,
            margin=dict(l=20, r=20, t=20, b=20),  # reduce margins
        )

        # Use custom CSS to set width to 100vw
        st.markdown(
            """
            <style>
            .css-1aumxhk.e1fqkh3o4 {
                width: 100vw;
                position: absolute;
                left: 0;
            }
            </style>
            """,
            unsafe_allow_html=True
        )

        # Display the bar chart with adjusted styles
        st.plotly_chart(fig, use_container_width=True)
    except ValueError as e:
        st.error(f"Failed to convert parameters to integers: {e}")
else:
    st.write("No data received")
