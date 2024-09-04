const getNavItem = document.getElementById("hamburger");
const navItems = document.getElementById("list_items");
const cancelBtn = document.getElementById("cancel");
const navBar = document.getElementById("nav");
const hireInfo = document.getElementById("hire_info");

const mediaQuery = window.matchMedia("(max-width: 800px)");
getNavItem.addEventListener("click", function(){
    navBar.classList.toggle("navbar_expand");
    navItems.classList.toggle("active_items");
})
   
window.onscroll = () => {
    navbar.classList.remove("navbar_expand");
};



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});