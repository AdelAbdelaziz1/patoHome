



window.onscroll = () => {
  if (window.scrollY > 100) {
    document.querySelector("#upArrow").style.display = "block";
  } else {
    document.querySelector("#upArrow").style.display = "none";
  }

  document.querySelector("#upArrow").addEventListener("click", (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (window.scrollY > 10) {
    document.querySelector("nav").classList.add("navbarDown");
    document.querySelector("#logoImg").setAttribute("src", "img/logo2.png");
    document
      .querySelector(".navbar-toggler-icon")
      .classList.add("navbar-toggler-icon-dark");
  } else {
    document.querySelector("nav").classList.remove("navbarDown");
    document.querySelector("#logoImg").setAttribute("src", "img/logo.png");
    document
      .querySelector(".navbar-toggler-icon")
      .classList.remove("navbar-toggler-icon-dark");
  }
};

const navLinks = document.querySelector(".navLinks");
const navLinksItems = navLinks.querySelectorAll("a");

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > 10) {
    navLinksItems.forEach((link) => link.classList.add("navcolorlinkBlack"));
  } else {
    navLinksItems.forEach((link) => link.classList.remove("navcolorlinkBlack"));
  }

  lastScrollTop = st;
});

const navIcons = document.querySelector(".navIcons");
const navIconsLinks = navIcons.querySelectorAll("a");

let lastScrollTopIcon = 0;

window.addEventListener("scroll", () => {
  const si = window.pageYOffset || document.documentElement.scrollTop;

  if (si > 10) {
    navIconsLinks.forEach((link) => link.classList.add("navIconColorblack"));
  } else {
    navIconsLinks.forEach((link) => link.classList.remove("navIconColorblack"));
  }
  lastScrollTopIcon = si;
});
