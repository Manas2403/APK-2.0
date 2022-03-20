import { PointLight } from "three";

function createLight() {
  const light = new PointLight(0xff0000, 1, 100);
  light.position.set(15, -15, 15);

  light.tick = (delta) => {};

  return light;
}

export { createLight };
