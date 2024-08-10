import streamlit as st
import plotly.graph_objs as go

# Set page config to wide mode
st.set_page_config(layout="wide")

# Function to extract URL parameters
def get_url_params():
    query_params = st.query_params
    return query_params

# Get the URL parameters
params = get_url_params()

# Display the URL parameters for debugging
#st.write("URL Parameters:", params)

# Prepare data for visualization
if params:
    try:
        # Extract and display parameters for debugging
        category_list = params.get('installation_category', [])
        number_list = params.get('installation_number', [])
        
        if category_list and number_list:
            category = category_list
            number_str = number_list
            #st.write("Processed Installation Category:", category)
            #st.write("Processed Number of Installations:", number_str)

            # Validate and convert number
            try:
                number = int(number_str)
            except ValueError:
                st.error("Invalid number format")
                number = 0

            # Define colors and proportions based on category
            if category == 'low':
                category_color = '#ADD8E6'  # Light blue
                category_proportion = [0.25, 0.75]  # 25% for 'Low', 75% handled internally
                category_labels = ['Low']  # Only 'Low' is visible
            elif category == 'mid':
                category_color = '#FFFFE0'  # Light yellow
                category_proportion = [0.5, 0.5]  # 50% for 'Mid', 50% handled internally
                category_labels = ['Mid']  # Only 'Mid' is visible
            elif category == 'high':
                category_color = '#dc3545'  # Red
                category_proportion = [0.90,0.2]  # 100% for 'High'
                category_labels = ['High']  # Only 'High' is visible
            else:
                st.error("Invalid category provided. Please use 'low', 'mid', or 'high'.")
                category_color = '#e5e5e5'  # Gray for invalid
                category_proportion = [0, 1]
                category_labels = ['Invalid', 'Other']

            # Create a vertical bar chart for the category
            fig1 = go.Figure()

            # Add bars based on the proportions
            for label, proportion in zip(category_labels, category_proportion):
                fig1.add_trace(go.Bar(
                    x=[label],
                    y=[proportion * 100],  # Convert proportion to percentage
                    name=label,
                    marker_color=category_color if label == category_labels[0] else '#e5e5e5',
                    text=[f'{proportion * 100:.1f}%'],
                    textposition='inside',
                    textfont_color='white' if label == category_labels[0] else 'black'
                ))

            fig1.update_layout(
                width=500,
                height=500,
                title='Installation Category',
                xaxis_title='Category',
                yaxis_title='Percentage',
                xaxis=dict(
                    tickvals=category_labels,
                    ticktext=category_labels
                ),
                yaxis=dict(
                    range=[0, 100],  # Percentage range from 0% to 100%
                    tickprefix='',
                    ticksuffix='%'
                ),
                margin=dict(l=20, r=20, t=40, b=20),
                plot_bgcolor=None,  # Transparent background
                paper_bgcolor=None  # Transparent background
)

            # Create a vertical bar chart with a creative touch for the number of installations
            fig2 = go.Figure()
            fig2.add_trace(go.Bar(
                x=['Installations'],  # Single category for the bar chart
                y=[number / 1000],  # Convert to thousands
                marker_color=category_color,  # Use the same color as the category
                text=[f'{number / 1000:.0f}k'],  # Display the number on the bar
                textposition='inside',
                textfont_color='white',  # Color of the text inside the bar
            ))
            fig2.update_layout(
                width=500,
                height=500,
                title='Number of Installations',
                xaxis_title='',  # No title for x-axis
                yaxis_title='Installations (in thousands)',
                xaxis=dict(
                    tickvals=['Installations'],  # Label for the x-axis
                    ticktext=['']  # Remove tick labels for a cleaner look
                ),
                yaxis=dict(
                    range=[0, number / 1000 * 1.1],  # Adjust range to fit the bar
                    tickprefix='',  # Remove default suffix
                    ticksuffix='k',  # Use 'k' for thousands
                    title_standoff=10  # Add space between title and axis
                ),
                margin=dict(l=20, r=20, t=40, b=20),
                plot_bgcolor=None,  # Transparent background
                paper_bgcolor=None  # Transparent background
            )

            # Display the charts side by side
            col1, col2 = st.columns(2)
            with col1:
                st.plotly_chart(fig1, use_container_width=True)
            with col2:
                st.plotly_chart(fig2, use_container_width=True)

        else:
            st.write("Category or number not found in URL parameters")

    except ValueError as e:
        st.error(f"Error processing data: {e}")
else:
    st.write("No data received")
