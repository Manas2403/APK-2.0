const createSlider = function () {
  if (window.innerWidth > 900) {
    const sliderContainer = document.querySelector(".slider-container");

    const slideRight = document.querySelector(".right-slide");
    const slideLeft = document.querySelector(".left-slide");

    const upButton = document.querySelector(".up-button");
    const downButton = document.querySelector(".down-button");

    const paginate = document.querySelector(".paginate");

    const slideLength = document.querySelectorAll(".right-slide div").length;
    let activeSlideIndex = 0;

    const gallerySection = document.querySelector(".gallery-section");

    slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

    upButton.addEventListener("click", () => changeSlide("up"));
    downButton.addEventListener("click", () => changeSlide("down"));

    const changeSlide = (direction) => {
      const slideHeight = sliderContainer.clientHeight;
      if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > slideLength - 1) {
          activeSlideIndex = 0;
        }
      } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
          activeSlideIndex = slideLength - 1;
        }
      }
      slideRight.style.transform = `translateY(-${
        activeSlideIndex * slideHeight
      }px)`;
      slideLeft.style.transform = `translateY(${
        activeSlideIndex * slideHeight
      }px)`;
      paginateCircle();
      upButton.disabled = true;
      downButton.disabled = true;
      setTimeout(() => {
        upButton.disabled = false;
        downButton.disabled = false;
      }, 1000);
    };

    /**
     * Animation SlideIn
     *
     */

    const lh = document.querySelectorAll(".lh");
    const lp = document.querySelectorAll(".lp");
    const rh = document.querySelectorAll(".rh");
    const rp = document.querySelectorAll(".rp");

    const slideIn = () => {
      for (let i = 0; i < slideLength; ++i) {
        if (i === activeSlideIndex) {
          lh[slideLength - i - 1].classList.add("in_view_left");
          lp[slideLength - i - 1].classList.add("in_view_left-p");
          rh[i].classList.add("in_view_right");
          rp[i].classList.add("in_view_right-p");
        } else {
          lh[slideLength - i - 1].classList.remove("in_view_left");
          lp[slideLength - i - 1].classList.remove("in_view_left-p");
          rh[i].classList.remove("in_view_right");
          rp[i].classList.remove("in_view_right-p");
        }
      }
    };

    gallerySection.addEventListener("wheel", function (event) {
      if (event.deltaY < 0) {
        downButton.click();
      } else if (event.deltaY > 0) {
        upButton.click();
      }
    });
    /**
     * Slider Ends
     */
    const paginateCircle = () => {
      slideIn();
      paginate.innerHTML = "";
      for (let i = 0; i < slideLength; ++i) {
        paginate.innerHTML += `
      <div class="circle"
      style = "
      ${
        i === activeSlideIndex
          ? `
        background-color: #c48f56;
  
        `
          : `
        background-color: grey;
  
  
        `
      }
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      right: 1%;
      cursor: pointer;
      top: ${window.innerHeight / 2 - (20 * (slideLength - i)) / 2 + i * 20}px;
      z-index = 200;
      transition : 0.5s ease;
  
      "/>
      `;
      }
      const circles = document.querySelectorAll(".circle");

      for (let i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", () => {
          const slideHeight = sliderContainer.clientHeight;

          activeSlideIndex = i;
          slideRight.style.transform = `translateY(-${
            activeSlideIndex * slideHeight
          }px)`;
          slideLeft.style.transform = `translateY(${
            activeSlideIndex * slideHeight
          }px)`;
          changeCircleColor();
        });
      }
    };
    window.addEventListener("resize", paginateCircle);

    paginateCircle();

    const changeCircleColor = () => {
      const circles = document.querySelectorAll(".circle");
      for (let i = 0; i < slideLength; ++i) {
        circles[i].style.backgroundColor =
          i === activeSlideIndex ? "#c48f56" : "grey";
        console.log("circle color change");
      }
      slideIn();
    };
  }
};

export { createSlider };
