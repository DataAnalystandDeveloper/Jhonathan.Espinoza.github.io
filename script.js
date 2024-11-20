function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Select the text element
const textElement = document.getElementById('switching-text');

// Define the text options
const texts = ["Data Analyst", "BI Analyst", "Tableau Analyst"];
let index = 0;

// Function to switch text
function switchText() {
    index = (index + 1) % texts.length; // Cycle through the text options
    textElement.textContent = texts[index];
}

// Set an interval to switch text every 2 seconds (2000ms)
setInterval(switchText, 2000);
