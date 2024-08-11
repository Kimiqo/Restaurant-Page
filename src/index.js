import homepage from "./homepage";
import menu from "./menu";
import './style.css'

const homepageContent = document.getElementById('content');
const homebtn = document.getElementById('homeBtn');
const menubtn = document.getElementById('menuBtn');
const aboutbtn = document.getElementById('aboutBtn');

homebtn.style.color = "#ea5358";
homepage();

function render() {
    homebtn.addEventListener('click', () => {
        homebtn.style.color = "#ea5358";
        menubtn.style.color = "white";
        aboutbtn.style.color = "white";
        console.log("Home button clicked");
        homepage();
    });

    menubtn.addEventListener('click', () => {
        menubtn.style.color = "#ea5358";
        homebtn.style.color = "white";
        aboutbtn.style.color = "white";
        console.log("Menu button clicked");
        menu();
    });

    aboutbtn.addEventListener('click', () => {
        aboutbtn.style.color = "#ea5358";
        menubtn.style.color = "white";
        homebtn.style.color = "white";
        console.log("About button clicked");
        // Call the about function here
    });
}

// Call the render function to attach the event listeners
render();
