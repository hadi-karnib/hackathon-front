import streamlit as st
import plotly.graph_objs as go

# Set page config to wide mode
st.set_page_config(layout="wide")

# Inject custom CSS to set the background color to white and hide unwanted elements
st.markdown(
    """
    <style>
    body {
        background-color: white;
        margin: 0;
    }
    .main {
        background-color: white;
    }
    .reportview-container {
        background-color: white;
    }
    header {
        display: none;  /* Hide the header */
    }
    .css-1k4b6nd {
        display: none;  /* Hide the deploy button and top right menu if it has this class */
    }
    .css-1f3dpw3 {
        display: none;  /* Hide the top right menu if it has this class */
    }
    .css-1crf0be {
        display: none;  /* Hide the top right menu if it has this class */
    }
    .css-1k62w1h {
        display: none;  /* Hide the top right menu if it has this class */
    }
    .css-1f84yl1 {
        display: none;  /* Hide the top right menu if it has this class */
    }
    .css-1a8k2hu {
        display: none;  /* Hide the top right menu if it has this class */
    }
    </style>
    """,
    unsafe_allow_html=True
)

# Function to extract URL parameters
def get_url_params():
    query_params = st.query_params
    return query_params

# Get the URL parameters
params = get_url_params()

# Display raw data for debugging
if params:
    #st.write("Raw URL Parameters:")
    #st.write(params)  # Display raw query parameters

    try:
        # Extract parameters
        category = params.get('installation_category', [''])
        installation_number_str = params.get('installation_number', [''])
        
        #st.write(f"Category: {category}")
        #st.write(f"Installation Number (raw): {installation_number_str}")
        
        if installation_number_str:
            try:
                installation_number = int(installation_number_str)
            except ValueError:
                st.error("Invalid number format")
                installation_number = 0

            # Define colors and proportions based on category
            category_data = {
                'no': {'color': '#e5e5e5', 'proportion': [0, 1]},
                'Very low': {'color': '#27e2fb', 'proportion': [0.05, 0.95]},
                'Low': {'color': '#3d10f9', 'proportion': [0.25, 0.75]},
                'Moderate': {'color': '#bf1add', 'proportion': [0.5, 0.5]},
                'More than Moderate': {'color': '#ffcc00', 'proportion': [0.75, 0.25]},
                'High': {'color': '#ff0000', 'proportion': [0.85, 0.15]},
                'Very High': {'color': '#ff8800', 'proportion': [0.95, 0.05]},
                'Top Notch': {'color': '#00ff00', 'proportion': [1, 0]}
            }
            
            category_info = category_data.get(category, category_data['no'])
            category_color = category_info['color']
            category_proportion = category_info['proportion']

            # Create the first figure (installation category)
            fig1 = go.Figure()

            fig1.add_trace(go.Bar(
                x=[category],
                y=[category_proportion[0] * 100],  # Convert proportion to percentage
                marker_color=category_color,
                text=[f'{category_proportion[0] * 100:.1f}%'],
                textposition='auto',  # Position the text inside the bar
                textfont_color='black'  # Change text color to black
            ))

            fig1.update_layout(
                width=500,
                height=500,
                title='Installation Category',
                title_font_color='black',
                xaxis_title='Category',
                xaxis_title_font_color='black',
                yaxis_title='Percentage',
                yaxis_title_font_color='black',
                xaxis=dict(
                    tickvals=[category],
                    ticktext=[category],
                    tickfont_color='black'
                ),
                yaxis=dict(
                    range=[0, 100],  # Percentage range from 0% to 100%
                    tickprefix='',
                    ticksuffix='%',
                    tickfont_color='black'
                ),
                margin=dict(l=20, r=20, t=40, b=20),
                plot_bgcolor='white',  # White background for the plot area
                paper_bgcolor='white'  # White background for the entire figure
            )

           # Create the second figure (number of installations)
            fig2 = go.Figure()
            fig2.add_trace(go.Bar(
                x=['Installations'],  # Single category for the bar chart
                y=[installation_number],  # Display the actual number of installations
                marker_color=category_color,  # Use the same color as the category
                text=[f'{installation_number:,}'],  # Display the number with commas
                textposition='auto',  # Position the text inside the bar
                textfont_color='black'  # Change text color to black
            ))
            fig2.update_layout(
                width=500,
                height=500,
                title='Number of Installations',
                title_font_color='black',
                xaxis_title='',  # No title for x-axis
                yaxis_title='Installations',
                yaxis_title_font_color='black',
                xaxis=dict(
                    tickvals=['Installations'],
                    ticktext=[''],
                    tickfont_color='black'
                ),
                yaxis=dict(
                    range=[0, 10000000],  # Limit y-axis between 0 and 10,000,000
                    tickprefix='',
                    ticksuffix='',
                    tickfont_color='black'
                ),
                margin=dict(l=20, r=20, t=40, b=20),
                plot_bgcolor='white',  # White background for the plot area
                paper_bgcolor='white'  # White background for the entire figure
            )

            # Display the charts side by side
            col1, col2 = st.columns(2)
            with col1:
                st.plotly_chart(fig1, use_container_width=True)
            with col2:
                st.plotly_chart(fig2, use_container_width=True)

        else:
            st.write("Installation number not found in URL parameters")

    except ValueError as e:
        st.error(f"Error processing data: {e}")
else:
    st.write("No data received")
