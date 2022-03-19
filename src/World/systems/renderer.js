import { WebGLRenderer } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
