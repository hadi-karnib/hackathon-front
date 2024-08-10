import streamlit as st
from streamlit_option_menu import option_menu

def streamlit_menu():
    selected = option_menu(
        menu_title=None, 
        options=["Home", "Pre Launch", "Post Launch", "Our Story"],  
        icons=["house", "rocket", "stars", "book"],  
        menu_icon="cast", 
        default_index=0,  
        orientation="horizontal",
        styles={
            "container": {
                "background": "linear-gradient(90deg, rgba(0,36,61,1) 0%, rgba(142,0,255,1) 35%, rgba(0,212,255,1) 100%)",
                "border-radius": "5px",
                "display": "flex",
                "justify-content": "center",
                "align-items": "space-between",
                "height": "50px" 
            },
            "icon": {
                "color": "white"
            },
            "nav-link": {
                "background": "none",
                "border": "none",
                "color": "white",
                "text-decoration": "none",
                "padding": "10px 15px",  
                "font-weight": "500",
                "font-size": "16px",  
                "cursor": "pointer",
                "white-space": "nowrap"  
            },
            "nav-link-hover": {
                "color": "cyan",
                "border-bottom": "3px solid cyan"
            },
            "nav-link-selected": {
                "color": "#00f4ff",
                "border-bottom": "3px solid #00f4ff"
            }
        }
    )
    return selected

def main():
    selected = streamlit_menu()

    if selected == "Home":
        from pages.home import home_page
        home_page()
    elif selected == "Pre Launch":
        from pages.pre_launch import pre_launch_page
        pre_launch_page()
    elif selected == "Post Launch":
        from pages.post_launch import post_launch_page
        post_launch_page()
    elif selected == "Our Story":
        from pages.our_story import our_story_page
        our_story_page()

if __name__ == "__main__":
    main()
