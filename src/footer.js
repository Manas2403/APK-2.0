const footer = document.querySelector(".footer");
const removeFooter = function () {
  footer.style.opacity = 0;
};
const addFooter = function () {
  footer.style.opacity = 1;
};
export { removeFooter, addFooter };
