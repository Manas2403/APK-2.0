const menuBtn = document.querySelector(".header__menu-btn");

const hamburger = document.querySelector(".header__menu-btn__burger");

const nav = document.querySelector(".header__navbar");

const menuNav = document.querySelector(".header__navbar__navlinks");

const navItems = document.querySelectorAll(".header__navbar__navlink");

let showMenu = false;

menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    hamburger.classList.add("open");

    nav.classList.add("open");

    menuNav.classList.add("open");

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");

    showMenu = false;
  }
});

for (const navItem of navItems) {
  navItem.addEventListener("click", () => {
    menuBtn.click();
  });
}
