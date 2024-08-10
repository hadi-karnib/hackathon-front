import streamlit as st

# Set page configuration
st.set_page_config(page_title="Custom Navbar", layout="wide")

# Custom CSS for styling
st.markdown("""
    <style>
    /* Navbar container */
    .navbar {
        background: linear-gradient(90deg, rgba(0,36,61,1) 0%, rgba(142,0,255,1) 35%, rgba(0,212,255,1) 100%);
        padding: 10px 20px;
        border-radius: 5px;
    }
    
    /* Navbar items */
    .navbar a {
        color: white;
        text-decoration: none;
        padding: 14px 20px;
        font-weight: 500;
        font-size: 18px;
    }
    
    /* Navbar item hover effect */
    .navbar a:hover {
        color: cyan;
        border-bottom: 3px solid cyan;
    }

    /* Active link styling */
    .navbar a.active {
        color: #00f4ff;
        border-bottom: 3px solid #00f4ff;
    }

    /* Center the navbar items */
    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    </style>
    """, unsafe_allow_html=True)

# Define the navigation menu
selected_page = st.sidebar.selectbox("Navigation", ["Home", "Pre Launch", "Post Launch", "Our Story"])

# HTML code for the navbar
st.markdown(f"""
    <div class="navbar">
        <a href="#home" class="{ 'active' if selected_page == 'Home' else ''}">Home</a>
        <a href="#pre-launch" class="{ 'active' if selected_page == 'Pre Launch' else ''}">Pre Launch</a>
        <a href="#post-launch" class="{ 'active' if selected_page == 'Post Launch' else ''}">Post Launch</a>
        <a href="#our-story" class="{ 'active' if selected_page == 'Our Story' else ''}">Our Story</a>
    </div>
    """, unsafe_allow_html=True)

# Page content based on the selection
if selected_page == "Home":
    st.title("Welcome to Home Page")
    st.write("This is the Home page.")
elif selected_page == "Pre Launch":
    st.title("Pre Launch")
    st.write("Details about the Pre Launch phase.")
elif selected_page == "Post Launch":
    st.title("Post Launch")
    st.write("Details about the Post Launch phase.")
elif selected_page == "Our Story":
    st.title("Our Story")
    st.write("Here is our story...")
