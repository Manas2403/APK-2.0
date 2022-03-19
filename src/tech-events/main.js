import { createSlider } from "./system/mainFunction";
import { codingEventsData } from "./components/coding-events";

const techMain = function (techevent) {
  if (techevent === "codingevent") {
    codingEventsData();
  }
  createSlider();
  console.log("😊😊🥳🥳🥳🥳");
};
export { techMain };
