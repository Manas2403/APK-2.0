import webkritiImg from "../../../assets/img/tech-events/webkriti.png";
import grayhoundImg from "../../../assets/img/tech-events/grayhound.png";
import googlerImg from "../../../assets/img/tech-events/googler.png";
import minimalmaniaImg from "../../../assets/img/tech-events/minimalmania.png";
const quizzingEventsData = function () {
  const galleryMobile = document.querySelector(".gallery-mobile");
  const slideLeft = document.querySelector(".left-slide");
  const slideRight = document.querySelector(".right-slide");
  const galleryContent = {
    headingLeft: ["Boot2root", "Mr. Googler"],
    imagePathLeft: [webkritiImg, googlerImg],
    paragraphLeft: ["2022", "2022"],
    eventDetailsLeft: [
      {
        heading: "Boot2root",
        description:
          "APK’s flagship Cyber Security contest, B00T2R00T is a Jeopardy-style CTF challenge ",
        price: "INR 15K",
        date: "10th April",
        contact: ["Chetan Garg", "+91 700 908 4579"],
      },
      {
        heading: "Mr. Googler",
        description:
          "A unique take on quizzing, Mr. Google tests participants’ googling skills.",
        price: "INR 10K",
        date: "9th April",
        contact: ["Vaishnav Trivedi", "+91 945 896 7233"],
      },
    ],
    headingRight: ["Grayhound", "Boot2root"],
    imagePathRight: [grayhoundImg, minimalmaniaImg],

    paragraphRight: ["2022", "2022"],
    eventDetailsRight: [
      {
        heading: "Grayhound",
        description:
          "Aparoksha's flagship quizzing event, GRAYHOUND is a premier quizzing contest with its domains spreading throughout the realms of business, tech, science, social sciences, and general knowledge.",
        price: "INR 15K",
        date: "11th April",
        contact: ["Abhigyan Sharma", "+91 897 905 8719"],
      },
      {
        heading: "Minimalmania",
        description:
          "Aparoksha’s minimal graphic design event, Minimal Mania is the art of conveying more in less. Designers create a minimal poster on a given theme",
        price: "INR 10K",
        date: "11th April",
        contact: ["Vrishabh Agamya", "+91 870 999 2418"],
      },
    ],
  };

  for (let i = galleryContent.headingLeft.length - 1; i >= 0; --i) {
    slideLeft.innerHTML += `
    <div class ="gal-card" ${
      i % 2 === 0
        ? 'style="background-color: #061125"'
        : 'style="background-color: #444444 "'
    }>
    <h2 class ="gal-heading lh lh${i + 1}"></h2>
    <p class="gal-desc">${galleryContent.eventDetailsLeft[i].description}</p>
    <p class="gal-p lp "><span class="fa-solid fa-trophy" style="margin-right:0.5rem"></span>${
      galleryContent.eventDetailsLeft[i].price
    }</p>
    <p class="gal-contact"><span class="fa-solid fa-user" style="margin-right:0.5rem"></span>${
      galleryContent.eventDetailsLeft[i].contact[0]
    }<br><span class="fa-solid fa-phone" style="margin-right:0.5rem"></span>${
      galleryContent.eventDetailsLeft[i].contact[1]
    }</p>
    <img class ="gal-img" src="${galleryContent.imagePathLeft[i]}"  />
  </div>
`;
  }

  for (let i = 0; i < galleryContent.headingRight.length; ++i) {
    slideRight.innerHTML += `
    <div class="gal-card"  ${
      i % 2 === 0
        ? 'style="animation: col-change 1.5s linear; animation-fill-mode: forwards; background-color: #061125"'
        : '"style="background-color: #061125"'
    }>
    <h2 class="gal-heading rh rh${i + 1}"></h2>
    <p class="gal-desc">${galleryContent.eventDetailsRight[i].description}</p>
    <p class="gal-p rp "><span class="fa-solid fa-trophy" style="margin-right:0.5rem"></span>${
      galleryContent.eventDetailsRight[i].price
    }</p>
    <p class="gal-contact"><span class="fa-solid fa-user" style="margin-right:0.5rem"></span>${
      galleryContent.eventDetailsRight[i].contact[0]
    }<br><span class="fa-solid fa-phone" style="margin-right:0.5rem"></span>${
      galleryContent.eventDetailsRight[i].contact[1]
    }</p>
    <img class="gal-img gal-img-right" src="${
      galleryContent.imagePathRight[i]
    }"  />
  </div>
`;
  }

  for (let i = 0; i < galleryContent.headingLeft.length; ++i) {
    galleryMobile.innerHTML += `
      <center>
      <div >      
      <h2 class="mob-h"></h2>
      <img src= '${galleryContent.imagePathLeft[i]}' class="gal-mob-img"/>
      <p class="mob-p">${galleryContent.eventDetailsLeft[i].description}</p><br><br>
      <p class="mob-p"><span class="fa-solid fa-trophy" style="margin-right:0.5rem"></span></span>${galleryContent.eventDetailsLeft[i].price} <br><span class="fa-solid fa-user" style="margin-right:0.5rem"></span>${galleryContent.eventDetailsLeft[i].contact[0]}<br><span class="fa-solid fa-phone" style="margin-right:0.5rem"></span>${galleryContent.eventDetailsLeft[i].contact[1]}</p>
    </div>
    <div>
      <h2 class="mob-h"></h2>
      <img src= '${galleryContent.imagePathRight[i]}' class="gal-mob-img"/>
      <p class="mob-p">${galleryContent.eventDetailsRight[i].description}</p><br><br>
      <p class="mob-p"><span class="fa-solid fa-trophy" style="margin-right:0.5rem"></span></span>${galleryContent.eventDetailsRight[i].price} <br><span class="fa-solid fa-user" style="margin-right:0.5rem"></span>${galleryContent.eventDetailsRight[i].contact[0]}<br><span class="fa-solid fa-phone" style="margin-right:0.5rem"></span>${galleryContent.eventDetailsRight[i].contact[1]}</p>
    </div>
      </center>
    `;
  }
};
export { quizzingEventsData };
