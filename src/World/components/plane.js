import vertexShader from "./../shaders/vertex.glsl";
import fragmentShader from "./../shaders/fragment.glsl";
import { Mesh, ShaderMaterial, Vector2, PlaneBufferGeometry } from "three";

function createPlane() {
  const geometry = new PlaneBufferGeometry(150, 40, 40, 40);
  const material = new ShaderMaterial({
    uniforms: {
      uTime: { value: 1.0 },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    wireframe: true,
  });
  const plane = new Mesh(geometry, material);
  plane.position.set(0, -20, -35);
  plane.rotateX(-Math.PI * 0.25);

  plane.tick = (delta) => {
    material.uniforms.uTime.value += delta;
  };

  return plane;
}

export { createPlane };
