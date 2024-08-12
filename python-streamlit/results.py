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
#st.write("Received URL Parameters:", params)  # Log the entire params dictionary

if params:
    try:
        # Extract parameters
        category = params.get('installation_category', [''])
        installation_number_str = params.get('installation_number', [''])

        #st.write("Installation Category:", category)  # Log category
        #st.write("Installation Number String:", installation_number_str)  # Log the installation number string

        if installation_number_str:
            try:
                # Split the range string into start and end values
                installation_start, installation_end = map(int, installation_number_str.split('-'))
                #st.write("Installation Start:", installation_start)  # Log installation start
                #st.write("Installation End:", installation_end)  # Log installation end
            except ValueError:
                st.error("Invalid number format or range")
                installation_start = 0
                installation_end = 0

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

            # Create the figure
            fig2 = go.Figure()

            # Add an empty bar to show the range
            fig2.add_trace(go.Bar(
                x=['Installations'],  # Single category for the bar chart
                y=[1000000],  # Maximum value for the range
                marker_color='white',  # Light color for the full range
                textposition='none'  # No text needed for the full bar
            ))

            # Add a filled rectangle to indicate the installation range
            fig2.add_shape(
                type="rect",
                x0=-2, x1=2,  # X-axis values to cover the single bar
                y0=installation_start, y1=installation_end,  # Y-axis range to fill
                fillcolor= category_info['color'],  # Color of the filled rectangle (change as needed)
                opacity=0.6,  # Transparency level
                line=dict(width=0)  # No border line
            )

            # Add text annotation to display the range on top of the bar
            fig2.add_annotation(
                x=0,  # Position it at the center of the bar
                y=installation_end,  # Position the text just above the filled range
                text=f'{installation_start:,} - {installation_end:,}',  # Display the range as text
                showarrow=False,
                font=dict(color='black', size=14),  # Customize the text color and size
                yshift=10  # Adjust the vertical position of the text
            )

            # Update layout
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
                    range=[0, 1000000],  # Full range of the bar from 0 to 1 million
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
