import barba from "@barba/core";
import barbaCSS from "@barba/css";

import { World } from "./World/World.js";
import "./menu";
import "./app";
import "./timer";
import { slider } from "./events.js";
import { techMain } from "./tech-events/main";

function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // create a new world
  const world = new World(container);

  // start the animation loop
  //world.start();
}

main();

barba.use(barbaCSS);

barba.init({
  views: [
    {
      namespace: "events",
      beforeEnter() {
        // update the menu based on user navigation
      },
      afterEnter() {
        // refresh the parallax based on new page content
        slider();
      },
    },
    {
      namespace: "coding-events",
      beforeEnter() {
        // update the menu based on user navigation
      },
      afterEnter() {
        // refresh the parallax based on new page content
        techMain("codingevent");
      },
    },
    {
      namespace: "development-events",
      beforeEnter() {},
      afterEnter() {
        techMain("developmentevent");
      },
    },
    {
      namespace: "ece-events",
      beforeEnter() {},
      afterEnter() {
        techMain("eceevent");
      },
    },
    {
      namespace: "quizzing-events",
      beforeEnter() {},
      afterEnter() {
        techMain("quizzingevent");
      },
    },
  ],
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});
