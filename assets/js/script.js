'use strict';

    /**
     * navbar toggle
     */

    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");

    const navElemArr = [navOpenBtn, navCloseBtn];

    for (let i = 0; i < navElemArr.length; i++) {
        navElemArr[i].addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    }

    /**
     * toggle navbar when click any navbar link
     */

    const navbarLinks = document.querySelectorAll("[data-nav-link]");

    for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Find the donate button
        var donateButton = document.querySelector('.btn-primary');

        // Attach click event listener to the donate button
        donateButton.addEventListener('click', function () {
            // Redirect to the payment.html page
            window.location.href = 'payment.html';
        });
    });

    /**
     * header active when window scrolled down
     */

    const header = document.querySelector("[data-header]");

    window.addEventListener("scroll", function () {
        window.scrollY >= 50 ? header.classList.add("active")
            : header.classList.remove("active");
    });

    /**
     * processDonation function
     */

    
    