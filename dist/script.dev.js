"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var menuIcon = document.querySelector('.menu-icon');
  var header = document.querySelector('header');
  var lastScrollTop = 0;
  menuIcon.addEventListener('click', function () {
    header.classList.toggle('open'); // Toggle the 'open' class
  });
  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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
//# sourceMappingURL=script.dev.js.map
