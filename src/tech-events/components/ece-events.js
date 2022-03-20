import topbotImg from "../../../assets/img/tech-events/topbot.png";
import electrobuzzImg from "../../../assets/img/tech-events/electrobuzz.png";
import arduinoImg from "../../../assets/img/tech-events/proard.png";
import circuitImg from "../../../assets/img/tech-events/circuit-debugging.png";
const eceEventsData = function () {
  const galleryMobile = document.querySelector(".gallery-mobile");
  const slideLeft = document.querySelector(".left-slide");
  const slideRight = document.querySelector(".right-slide");
  const galleryContent = {
    headingLeft: ["TopBot 6.0", "Pro-Arduino"],
    imagePathLeft: [topbotImg, arduinoImg],
    paragraphLeft: ["2022", "2022"],
    eventDetailsLeft: [
      {
        heading: "TopBot 6.0",
        description:
          "TopBot is a Beginner-friendly robotics event where participants make robots that suffice at a particular task of their choice",
        price: "INR 40K",
        date: "10th April",
        contact: ["Pranjal Maurya", "+91 745 502 4017"],
      },
      {
        heading: "Pro-Arduino",
        description:
          " Participants focus on coming up with Embedded Systems solutions for real-life problem statements.",
        price: "INR 7K",
        date: "10th April",
        contact: ["Sanchit Jaiswal", "+91 770 603 0756"],
      },
    ],
    headingRight: ["Electrobuzz", "Circuit-Debugging"],
    imagePathRight: [electrobuzzImg, circuitImg],

    paragraphRight: ["2022", "2022"],
    eventDetailsRight: [
      {
        heading: "Electrobuzz",
        description:
          " Aparoksha’s mixed electronics quiz event that tests the participants' mettle in hardware description languages.",
        price: "INR 7K",
        date: "10th April",
        contact: ["Anurag Kumar", "+91 852 976 1893"],
      },
      {
        heading: "Circuit-Debugging",
        description:
          "Aparoksha’s minimal graphic design event, Minimal Mania is the art of conveying more in less. Designers create a minimal poster on a given theme",
        price: "INR 7K",
        date: "11th April",
        contact: ["Vivek Kumar Mehta", "+91 950 175 6628"],
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
export { eceEventsData };
