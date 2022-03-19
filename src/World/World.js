import { createCamera } from "./components/camera.js";
import { createSphere } from "./components/sphere.js";
import { createScene } from "./components/scene.js";
import { createPlane } from "./components/plane.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { createControls } from "./systems/controls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import apkLogo from "./assets/apk-logo.glb";

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
    const controls = createControls(camera, renderer.domElement);
    container.append(renderer.domElement);

    const sphere = createSphere();
    const plane = createPlane();

    loop.updatables.push(sphere);
    loop.updatables.push(plane);

    scene.add(sphere);
    scene.add(plane);
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(
      apkLogo,
      (gltf) => {
        model = gltf.scene.children[0];
        model.position.set(15, 0, -25);

        if (window.innerWidth < 900) {
          model.position.set(0, 0, -25);
        }
        if (window.innerWidth < 600) {
          model.position.set(0, 0, -40);
        }
        loop.updatables.push(model);

        var lastScrollTop = 0;
        model.tick = (delta) => {
          window.addEventListener("wheel", (e) => {
            if (
              document.querySelector(".footer").getBoundingClientRect().top >
                innerHeight &&
              document.querySelector(".footer").getBoundingClientRect().top <
                document.querySelector(".footer").offsetTop
            ) {
              window.addEventListener("scroll", function () {
                var st =
                  window.pageYOffset || document.documentElement.scrollTop;
                if (st > lastScrollTop) {
                  let rotation = Math.PI * (e.offsetY / innerHeight);
                  model.rotateZ(rotation * 0.00001);
                } else {
                  let rotation = Math.PI * (e.offsetY / innerHeight);
                  model.rotateZ(-(rotation * 0.00001));
                }
                lastScrollTop = st <= 0 ? 0 : st;
              });
            }
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
