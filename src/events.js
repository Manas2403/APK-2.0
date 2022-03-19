const slider = function () {
  var slideIndex = 0;
  var slides = document.getElementsByClassName("mySlides");
  var plushBtn = document.querySelector("#plusSlides");
  var subBtn = document.querySelector("#subSlides");

  var slideIndex2 = 0;
  var slides2 = document.getElementsByClassName("mySlides2");
  var plushBtn2 = document.getElementById("plusSlides2");
  var subBtn2 = document.getElementById("subSlides2");

  if (plushBtn2 !== null) {
    plushBtn2.addEventListener("click", plusSlides2);
    subBtn2.addEventListener("click", subSlides2);
  }

  var slideIndex3 = 0;
  var slides3 = document.getElementsByClassName("mySlides3");
  var plushBtn3 = document.getElementById("plusSlides3");
  var subBtn3 = document.getElementById("subSlides3");

  if (plushBtn !== null) {
    plushBtn.addEventListener("click", plusSlides);
    subBtn.addEventListener("click", subSlides);
  }
  if (plushBtn3 !== null) {
    plushBtn3.addEventListener("click", plusSlides3);
    subBtn3.addEventListener("click", subSlides3);
  }

  showSlides();
  showSlides2();
  showSlides3();

  function showSlides() {
    if (slides.length != 0) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("Visible");
        slides[i].classList.add("inVisible");
      }
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      slides[slideIndex].classList.add("Visible");
      slides[slideIndex].classList.remove("inVisible");

      setTimeout(showSlides, 4000); // Change image every 2 seconds
    } else {
      setTimeout(showSlides, 2000);
    }
  }

  function plusSlides() {
    slideIndex++;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    for (var i = 0; i < slides.length; i++) {
      if (i != slideIndex) {
        slides[i].classList.remove("Visible");
        slides[i].classList.add("inVisible");
      }
    }
    slides[slideIndex].classList.remove("inVisible");
    slides[slideIndex].classList.add("Visible");
  }

  function subSlides() {
    slideIndex--;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    for (var i = 0; i < slides.length; i++) {
      if (i != slideIndex) {
        slides[i].classList.remove("Visible");
        slides[i].classList.add("inVisible");
      }
    }
    slides[slideIndex].classList.remove("inVisible");
    slides[slideIndex].classList.add("Visible");
  }

  //2nd carosal ..........................................................................

  function showSlides2() {
    if (slides2.length != 0) {
      for (var i = 0; i < slides2.length; i++) {
        slides2[i].classList.remove("Visible");
        slides2[i].classList.add("inVisible");
      }
      slideIndex2++;
      if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0;
      }
      slides2[slideIndex2].classList.add("Visible");
      slides2[slideIndex2].classList.remove("inVisible");

      setTimeout(showSlides2, 4000); // Change image every 2 seconds
    } else {
      setTimeout(showSlides2, 2000);
    }
  }

  function plusSlides2() {
    slideIndex2++;
    if (slideIndex2 < 0) slideIndex2 = slides2.length - 1;
    if (slideIndex2 >= slides2.length) slideIndex2 = 0;
    for (var i = 0; i < slides2.length; i++) {
      if (i != slideIndex2) {
        slides2[i].classList.remove("Visible");
        slides2[i].classList.add("inVisible");
      }
    }
    slides2[slideIndex2].classList.remove("inVisible");
    slides2[slideIndex2].classList.add("Visible");
  }

  function subSlides2() {
    // console.log(slideIndex2);

    slideIndex2--;
    if (slideIndex2 < 0) slideIndex2 = slides2.length - 1;
    if (slideIndex2 >= slides2.length) slideIndex2 = 0;
    for (var i = 0; i < slides2.length; i++) {
      if (i != slideIndex2) {
        slides2[i].classList.remove("Visible");
        slides2[i].classList.add("inVisible");
      }
    }
    slides2[slideIndex2].classList.remove("inVisible");
    slides2[slideIndex2].classList.add("Visible");
  }

  // 3rd corosal .........................................................................

  function showSlides3() {
    // console.log(slideIndex3);
    if (slides3.length != 0) {
      for (var i = 0; i < slides3.length; i++) {
        slides3[i].classList.remove("Visible");
        slides3[i].classList.add("inVisible");
      }
      slideIndex3++;
      if (slideIndex3 >= slides3.length) {
        slideIndex3 = 0;
      }
      slides3[slideIndex3].classList.add("Visible");
      slides3[slideIndex3].classList.remove("inVisible");
      // console.log(slides[slideIndex - 1]);
      setTimeout(showSlides3, 4000); // Change image every 2 seconds
    } else {
      setTimeout(showSlides3, 2000);
    }
  }

  function plusSlides3() {
    // console.log(slideIndex3);

    slideIndex3++;
    if (slideIndex3 < 0) slideIndex3 = slides3.length - 1;
    if (slideIndex3 >= slides3.length) slideIndex3 = 0;
    for (var i = 0; i < slides3.length; i++) {
      if (i != slideIndex3) {
        slides3[i].classList.remove("Visible");
        slides3[i].classList.add("inVisible");
      }
    }
    slides3[slideIndex3].classList.remove("inVisible");
    slides3[slideIndex3].classList.add("Visible");
  }

  function subSlides3() {
    console.log(slideIndex3);

    slideIndex3--;
    if (slideIndex3 < 0) slideIndex3 = slides3.length - 1;
    if (slideIndex3 >= slides3.length) slideIndex3 = 0;
    for (var i = 0; i < slides3.length; i++) {
      if (i != slideIndex3) {
        slides3[i].classList.remove("Visible");
        slides3[i].classList.add("inVisible");
      }
    }
    slides3[slideIndex3].classList.remove("inVisible");
    slides3[slideIndex3].classList.add("Visible");
  }
};

export { slider };
