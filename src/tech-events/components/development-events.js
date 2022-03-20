import webkritiImg from "../../../assets/img/tech-events/webkriti.png";
import madImg from "../../../assets/img/tech-events/mad.jpg";
import novaImg from "../../../assets/img/tech-events/nova.jpg";
import minimalmaniaImg from "../../../assets/img/tech-events/minimalmania.png";
const developmentEventsData = function () {
  const galleryMobile = document.querySelector(".gallery-mobile");
  const slideLeft = document.querySelector(".left-slide");
  const slideRight = document.querySelector(".right-slide");
  const galleryContent = {
    headingLeft: ["Webkriti", "Nova"],
    imagePathLeft: [webkritiImg, novaImg],
    paragraphLeft: ["2022", "2022"],
    eventDetailsLeft: [
      {
        heading: "Webkriti",
        description:
          "In this Aparoksha's flagship WebDev event, Web Developers flaunt their mettle in both front-end and back-end in an 8-hour solo competition",
        price: "INR 15K",
        date: "10th April",
        contact: ["Chetan Garg", "+91 700 908 4579"],
      },
      {
        heading: "Nova",
        description:
          "Nova is the premier UI/UX design contest, where designers design the web/mobile application for a fictional company.",
        price: "INR 7K",
        date: "10th April",
        contact: ["Nikhilesh Kumar", "+91 911 140 5488"],
      },
    ],
    headingRight: ["M.A.D", "Minimalmania"],
    imagePathRight: [madImg, minimalmaniaImg],

    paragraphRight: ["2022", "2022"],
    eventDetailsRight: [
      {
        heading: "M.A.D",
        description:
          "Aparoksha’s Mobile App Development hackathon, teams of 2-3 developers pick their target problem from a set of ubiquitous themes and unleash their creative minds.",
        price: "INR 12K",
        date: "8th April",
        contact: ["Varun Tiwari", "+91 958 013 2139"],
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
export { developmentEventsData };
