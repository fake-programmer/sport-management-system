document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    menuIcon.addEventListener('click', function() {
        header.classList.toggle('open'); // Toggle the 'open' class
    });

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling Down
            menuIcon.classList.add('hidden');
        } else {
            // Scrolling Up
            menuIcon.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });
});

