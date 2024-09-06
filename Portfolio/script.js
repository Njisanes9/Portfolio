const getNavItem = document.getElementById("hamburger");
const navItems = document.getElementById("list_items");
const cancelBtn = document.getElementById("cancel");
const navBar = document.getElementById("nav");
const hireInfo = document.getElementById("hire_info");

const mediaQuery = window.matchMedia("(max-width: 800px)");

   getNavItem.addEventListener("click", function() {
        getNavItem.style.display = "none";
        cancelBtn.style.display = "block";
        navBar.classList.add("navbar_expand");
        navItems.classList.add("active_items");
        hireInfo.classList.add("active_hire");
    });

    cancelBtn.addEventListener("click", function() {
        navBar.classList.remove("navbar_expand");
        navItems.classList.remove("active_items");
        hireInfo.classList.remove("active_hire");
        getNavItem.style.display = "block";
        cancelBtn.style.display = "none";
    });





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});