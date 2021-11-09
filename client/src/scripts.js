window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  var myNav = document.getElementById("mainNav");
  window.onscroll = function () {
    // "use strict";
    if (
      document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 200
    ) {
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");
    } else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");
    }
  };
});
