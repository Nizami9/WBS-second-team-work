const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});

// let showCuisine = () => {
//     document.querySelector('#iFrame').src = '/menu/cuisine.html';
// }

// let showEvents = () => {
//   document.querySelector('#iFrame').src = '/menu/ourEvents.html';
// }

// let showStaff = () => {
//   document.querySelector('#iFrame').src = '/menu/ourstaff.html';

// }
// document.querySelector('#cuisineButton').addEventListener('click', showCuisine);
// document.querySelector('#eventsButton').addEventListener('click', showEvents);
// document.querySelector('#staffButton').addEventListener('click', showStaff);
