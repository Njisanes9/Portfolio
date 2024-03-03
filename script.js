<!-- For smaller screens to display nav items  -->
document.getElementById('menu').addEventListener('click', function() {
 var items = document.querySelector('.navbar .items');
 if (items.style.display === 'none') {
    items.style.display = 'block';
 } else {
    items.style.display = 'none';
 }
});
<!-- When clicking a link it takes the user to that particular section  -->
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
