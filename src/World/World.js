import { createCamera } from "./components/camera.js";
import { createSphere } from "./components/sphere.js";
import { createScene } from "./components/scene.js";
import { createPlane } from "./components/plane.js";
import { createLight } from "./components/lights.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
// import { createControls } from "./systems/controls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import apkLogo from "./assets/logo.glb";

let camera;
let renderer;
let scene;
let loop;
let model;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();

    loop = new Loop(camera, scene, renderer);
    // const controls = createControls(camera, renderer.domElement);
    container.append(renderer.domElement);

    const sphere = createSphere();
    const light = createLight();
    const plane = createPlane();

    loop.updatables.push(sphere);
    loop.updatables.push(light);
    loop.updatables.push(plane);

    scene.add(sphere);
    scene.add(light);
    scene.add(plane);
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(
      apkLogo,
      (gltf) => {
        model = gltf.scene;
        model.traverse(function (node) {
          if (node.isMesh) {
            node.castShadow = true;
          }
        });
        model.position.set(8, 0, -5);

        if (window.innerWidth < 900) {
          model.position.set(0, 0, -5);
        }
        if (window.innerWidth < 600) {
          model.position.set(0, 0, -10);
        }
        loop.updatables.push(model);

        let lastScroll = 0;
        let scrollHeight =
          document.querySelector(".footer").getBoundingClientRect().bottom -
          innerHeight;

        model.tick = (delta) => {
          window.addEventListener("scroll", () => {
            lastScroll =
              document.querySelector(".footer").getBoundingClientRect().bottom -
              innerHeight;
            let scroll = scrollHeight - lastScroll;
            model.rotation.y = (scroll / scrollHeight) * Math.PI;
          });
        };

        scene.add(model);
      },
      (progress) => {
        console.log("progress");
        console.log(progress);
      },
      (error) => {
        console.log("error");
        console.log(error);
      }
    );

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
