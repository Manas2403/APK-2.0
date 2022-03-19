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
          "Humblefool Cup is a 2-tier ACM-ICPC style national level coding contest conducted in the fond memory of Harsha Suryanarayana A.K.A Humblefool, one of the best coders of India, an alumnus of IIIT Allahabad and one of the very first Indian red coders on Topcoder. For everyone who ever admired Humblefool or has a knack for competitive coding, this is the perfect platform to apply your skills in teams of up to three and have a chance at the generous prizes. The contest will be held in two rounds: An Open Qualifying Round and a Proctored Final Round.",
        price: "600$",
        date: "17 March",
        contact: ["Kalyan Dubey", "+91 763 281 1634"],
      },
      {
        heading: "Codered",
        description:
          "Talk is Cheap. Show me the code- Linus Torvalds. CodeRed is the competitive coding event for all for the fanatics of perplexing problems. Students from all over the country can participate in teams of (at most) three to battle out their coding skills. It’s held in two rounds: An open Qualifying round and a Proctored Final Round.",
        price: "INR 50K",
        date: "10th April",
        contact: ["Parmjeet Singh", "+91 805 469 5716"],
      },
      {
        heading: "CodeQueen",
        description:
          "CodeQueen is an all-girls coding contest held during Aparoksha for teams of 2 in two rounds: a preliminary round and a proctored finals. Collaborate, code and show them who the CodeQueens are!",
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
          "Aparoksha’s flagship individual-coding contest, Alkhwarizm, focuses on the knowledge and application of algorithms. Alkhwarizm is held at an international level on CodeChef and has had its problems left unsolved even while hosting some of the world’s best coders.",
        price: "INR 30K",
        date: "6th April",
        contact: ["Bhavya Girotra", "+91 971 814 0144"],
      },
      {
        heading: "C-Fresh",
        description:
          "A green tick is what makes a coder smile the brightest! A programming contest held each year to create enthusiasm and promote the competitive coding skills among the students of first year. The prizes are big and so is the stage! For all the freshers out there, here’s your time to step up and prove your coding skills.",
        price: "INR 40K",
        date: "11th April",
        contact: ["Sumit Kumar Sahu", "+91 911 012 2904"],
      },
      {
        heading: "Decode",
        description:
          "A test of the coders’ relational-reasoning skills. Given the sets of input and outputs for an unknown program, participants are required to write a code that would mimic the same behaviour.",
        price: "INR 10K",
        date: "9th April",
        contact: ["Arpit Bhatt", "+91 638 818 4190"],
      },
      {
        heading: "Humblefool Cup",
        description:
          "Humblefool Cup is a 2-tier ACM-ICPC style national level coding contest conducted in the fond memory of Harsha Suryanarayana A.K.A Humblefool, one of the best coders of India, an alumnus of IIIT Allahabad and one of the very first Indian red coders on Topcoder. For everyone who ever admired Humblefool or has a knack for competitive coding, this is the perfect platform to apply your skills in teams of up to three and have a chance at the generous prizes. The contest will be held in two rounds: An Open Qualifying Round and a Proctored Final Round.",
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
  <h2 class ="gal-heading lh lh${i + 1}"> ${galleryContent.headingLeft[i]}</h2>
  <p class="gal-p lp ">${galleryContent.eventDetailsLeft[i].price} <br> ${
      galleryContent.eventDetailsLeft[i].contact[0]
    } <br> ${galleryContent.eventDetailsLeft[i].contact[1]}</p>
  <p class="gal-desc">${galleryContent.eventDetailsLeft[i].description}</p>
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
  <h2 class="gal-heading rh rh${i + 1}"> ${galleryContent.headingRight[i]}</h2>
  <p class="gal-p rp ">${galleryContent.eventDetailsRight[i].price} <br> ${
      galleryContent.eventDetailsRight[i].contact[0]
    } <br> ${galleryContent.eventDetailsRight[i].contact[1]} </p>
  <p class="gal-desc">${galleryContent.eventDetailsRight[i].description}</p>
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
