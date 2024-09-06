const getNavItem = document.getElementById("hamburger");
const navItems = document.getElementById("list_items");
const cancelBtn = document.getElementById("cancel");
const navBar = document.getElementById("nav");
const hireInfo = document.getElementById("hire_info");

const mediaQuery = window.matchMedia("(max-width: 800px)");
getNavItem.addEventListener("click", function(){
    navBar.classList.toggle("navbar_expand");
    navItems.classList.toggle("active_items");
    hireInfo.classList.toggle("active_hire");
    
})
   




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// JavaScript for auto-typing and word exchange
const words = ["Systems Analyst", "BI Developer"];
let i = 0;
const autoTypeElement = document.querySelector(".auto_type");

function typeEffect() {
    autoTypeElement.textContent = words[i];
    i = (i + 1) % words.length; // Cycle through the words
    autoTypeElement.style.animation = "none"; // Reset the animation
    void autoTypeElement.offsetWidth; // Trigger reflow for restarting the animation
    autoTypeElement.style.animation = "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite";
}

setInterval(typeEffect, 4000); // Change word every 4 seconds
