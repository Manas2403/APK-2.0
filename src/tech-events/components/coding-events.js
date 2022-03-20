import humblefoolImg from "../../../assets/img/tech-events/humblefool.png";
import coderedImg from "../../../assets/img/tech-events/codered.png";
import codequeenImg from "../../../assets/img/tech-events/codequeen.png";
import langChallengeImg from "../../../assets/img/tech-events/lang-challenge.png";
import alkhawarizmImg from "../../../assets/img/tech-events/alkhwarizm.png";
import cFreshImg from "../../../assets/img/tech-events/cfresh.png";
import decodeImg from "../../../assets/img/tech-events/decode.jpg";
const codingEventsData = function () {
  const galleryMobile = document.querySelector(".gallery-mobile");
  const slideLeft = document.querySelector(".left-slide");
  const slideRight = document.querySelector(".right-slide");
  const galleryContent = {
    headingLeft: ["Humblefool Cup", "Codered", "CodeQueen", "Lang-Challenge"],
    imagePathLeft: [humblefoolImg, coderedImg, codequeenImg, langChallengeImg],
    paragraphLeft: ["2022", "2022", "2022", "2022"],
    eventDetailsLeft: [
      {
        heading: "Humblefool Cup",
        description:
          "Aparoksha's flagship coding event that garners huge participation from around the world, the HumbleFool Cup is conducted to celebrate the legacy of Harsha Suryanarayana, aka humblefool, IIITA's pride and one of the best coders to ever come out of India",
        price: "600$",
        date: "17 March",
        contact: ["Kalyan Dubey", "+91 763 281 1634"],
      },
      {
        heading: "Codered",
        description:
          "Aparoksha's flagship TEAM competitive coding event, CodeRed presented by Codechef is a cut-throat competition where  teams of upto 3 coders show off their programming skills. With 9 Problems, 900+ teams and 40 Finalists, previous edition concluded with prizes and goodies worth ₹50,000",
        price: "INR 50K",
        date: "10th April",
        contact: ["Parmjeet Singh", "+91 805 469 5716"],
      },
      {
        heading: "CodeQueen",
        description:
          "Aparoksha’s all-girls coding event CodeQueen, where codesses compete in teams of 2 in two rounds, a preliminary round and a proctored finals.",
        price: "INR 30K",
        date: "10th April",
        contact: ["Aakash Mehta", "+91 883 778 0918"],
      },
      {
        heading: "Lang-Challenge",
        description:
          "Being a programmer often requires mastering new skills in a very limited time. To assess the learning skills of the participants, a random language is provided along with tutorials needed to learn the same. Participants are then required to solve a set of problems using the new language in the time provided.",
        price: "INR 7K",
        date: "11th April",
        contact: ["Harshdeep Singh", "+91 988 812 0608"],
      },
    ],
    headingRight: ["Alkhwarizm", "C-Fresh", "Decode", "Humblefool Cup"],
    imagePathRight: [alkhawarizmImg, cFreshImg, decodeImg, humblefoolImg],

    paragraphRight: ["2022", "2022", "2022", "2022"],
    eventDetailsRight: [
      {
        heading: "Alkhawarizm",
        description:
          "Alkhwarizm is the annual National level programming competition of Aparoksha which focuses on the knowledge of Algorithms. The previous edition garnered a participation of 779 coders, out of which 51 were International participants. ",
        price: "INR 30K",
        date: "6th April",
        contact: ["Bhavya Girotra", "+91 971 814 0144"],
      },
      {
        heading: "C-Fresh",
        description:
          "C Fresh is held annually, exclusively for freshers, to promote competitive coding among them and motivate them in their journey. ",
        price: "INR 40K",
        date: "11th April",
        contact: ["Sumit Kumar Sahu", "+91 911 012 2904"],
      },
      {
        heading: "Decode",
        description:
          "A coding contest without the problem statements, participants guess the program responsible for given inputs and outputs and write a code that would mimic that behavior. ",
        price: "INR 10K",
        date: "9th April",
        contact: ["Arpit Bhatt", "+91 638 818 4190"],
      },
      {
        heading: "Humblefool Cup",
        description:
          "Aparoksha's flagship coding event that garners huge participation from around the world, the HumbleFool Cup is conducted to celebrate the legacy of Harsha Suryanarayana, aka humblefool, IIITA's pride and one of the best coders to ever come out of India        ",
        price: "600$",
        date: "17 March",
        contact: ["Kalyan Dubey", "+91 763 281 1634"],
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
          <h2 class="mob-h">${galleryContent.headingLeft[i]}</h2>
          <img src= '${galleryContent.imagePathLeft[i]}' class="gal-mob-img"/>
          <p class="mob-p">${galleryContent.eventDetailsLeft[i].description}</p>

        </div>
        <div>
          <h2 class="mob-h">${galleryContent.headingRight[i]}</h2>
          <img src= '${galleryContent.imagePathRight[i]}' class="gal-mob-img"/>
          <p class="mob-p">${galleryContent.eventDetailsRight[i].description}</p>

        </div>
      </center>
    `;
  }
};

export { codingEventsData };
