import homepage from "./homepage";
import menu from "./menu";
import './style.css'

const homepageContent = document.getElementById('content');
const homebtn = document.getElementById('homeBtn');
const menubtn = document.getElementById('menuBtn');
const aboutbtn = document.getElementById('aboutBtn');

function render() {
    homebtn.addEventListener('click', () => {
        console.log("Home button clicked");
        homepage();
    });

    menubtn.addEventListener('click', () => {
        console.log("Menu button clicked");
        menu();
    });

    aboutbtn.addEventListener('click', () => {
        console.log("About button clicked");
        // Call the about function here
    });
}

// Call the render function to attach the event listeners
render();
