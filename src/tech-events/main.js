import { createSlider } from "./system/mainFunction";
import { codingEventsData } from "./components/coding-events";
import { developmentEventsData } from "./components/development-events";
import { eceEventsData } from "./components/ece-events";
import { quizzingEventsData } from "./components/quizzing-events";
const techMain = function (techevent) {
  if (techevent === "codingevent") {
    codingEventsData();
  } else if (techevent === "developmentevent") {
    developmentEventsData();
  } else if (techevent === "eceevent") {
    eceEventsData();
  } else if (techevent === "quizzingevent") {
    quizzingEventsData();
  }
  createSlider();
  console.log("😊😊🥳🥳🥳🥳");
};
export { techMain };
