const menuBtn = document.querySelector(".header__menu-btn");

const hamburger = document.querySelector(".header__menu-btn__burger");

const nav = document.querySelector(".header__navbar");

const menuNav = document.querySelector(".header__navbar__navlinks");

const navItems = document.querySelectorAll(".header__navbar__navlink");
const mainParent = document.querySelector(".mainParent");
const footer = document.querySelector("footer");
let showMenu = false;

menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    hamburger.classList.add("open");

    nav.classList.add("open");
    menuNav.classList.add("open");
    mainParent.style.display = "none";
    menuNav.style.opacity = 0.6;
    footer.style.display = "none";
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    mainParent.style.display = "block";
    footer.style.display = "block";
    showMenu = false;
  }
});

for (const navItem of navItems) {
  navItem.addEventListener("click", () => {
    menuBtn.click();
  });
}
