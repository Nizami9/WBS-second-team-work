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

let list=['summerSaladFrame', 'greenSaladFrame','beanSaladFrame','hunanSauceFrame',
'biriyaniFrame','pilafFrame','galinhadaFrame']

document.getElementById("summerSaladFrame").style.display = "none";
document.getElementById("greenSaladFrame").style.display = "none";
document.getElementById("beanSaladFrame").style.display = "none";
document.getElementById("hunanSauceFrame").style.display = "none";
document.getElementById("biriyaniFrame").style.display = "none";
document.getElementById("pilafFrame").style.display = "none";
document.getElementById("galinhadaFrame").style.display = "none";


document.addEventListener('click',(e) =>
  {
    list.forEach(element => {
        document.getElementById(element).style.display = "none";
       });
   let selectedId=e.target.id;
   let selectedFrame=selectedId+"Frame";
   document.getElementById(selectedFrame).style.display = "block";

  
  }
);
