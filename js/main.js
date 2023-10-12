let navbar = document.querySelector(".navbar");
let heroInfo = document.querySelector(".hero .info");
// When Scrolling
window.onscroll = () => {
  // Check if We Scroll To  The more homes Sectiom
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky");
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
    // navbar.classList.remove("navbar-light");
  }
};
//

// Scroll To Sections

let navlinks = document.querySelectorAll(
  ".navbar .navbar-nav .nav-item #scrollTo"
);

scrollTo(navlinks);
scrollTo(document.querySelectorAll(".features-list-link"));
function scrollTo(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "auto",
      });
    });
  });
}
