lucide.createIcons();
        document.getElementById('menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-container').classList.toggle('show');
            const icon = this.querySelector('i');
            if (icon.getAttribute('data-lucide') === 'menu') {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
