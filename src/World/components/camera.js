import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(70, 1, 10, 1000);

  camera.position.set(0, 0, 10);
  window.addEventListener("mousemove", (e) => {
    let deflectionX = e.clientX / window.innerWidth - 0.5;
    let deflectionY = e.clientY / window.innerHeight - 0.5;
    let rotationFactorX = Math.PI * deflectionX * 0.08;
    let rotationFactorY = Math.PI * deflectionY * 0.08;

    camera.rotation.set(rotationFactorY, rotationFactorX, 0);
  });

  return camera;
}

export { createCamera };
