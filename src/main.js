import barba from "@barba/core";
import barbaCSS from "@barba/css";

import { World } from "./World/World.js";
import "./menu";
import "./timer";
import { slider } from "./events.js";
import { techMain } from "./tech-events/main";
import { removeFooter, addFooter } from "./footer.js";
import { animate } from "./animations";
function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // create a new world
  const world = new World(container);

  // start the animation loop
  world.start();
}

main();

barba.use(barbaCSS);

barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter() {},
      afterEnter() {
        animate();
        addFooter();
      },
    },
    {
      namespace: "events",
      beforeEnter() {
        // update the menu based on user navigation
      },
      afterEnter() {
        // refresh the parallax based on new page content
        slider();
        addFooter();
      },
    },
    {
      namespace: "techevent",
      beforeEnter() {},
      afterEnter() {
        addFooter();
      },
    },
    {
      namespace: "sponsors",
      beforeEnter() {},
      afterEnter() {
        addFooter();
        animate();
      },
    },
    {
      namespace: "contact",
      beforeEnter() {},
      afterEnter() {
        addFooter();
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
        removeFooter();
      },
    },
    {
      namespace: "development-events",
      beforeEnter() {},
      afterEnter() {
        techMain("developmentevent");
        removeFooter();
      },
    },
    {
      namespace: "ece-events",
      beforeEnter() {},
      afterEnter() {
        techMain("eceevent");
        removeFooter();
      },
    },
    {
      namespace: "quizzing-events",
      beforeEnter() {},
      afterEnter() {
        techMain("quizzingevent");
        removeFooter();
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
