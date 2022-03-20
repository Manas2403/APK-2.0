import vertexShader from "./../shaders/vertex.glsl";
import fragmentShader from "./../shaders/fragment.glsl";
import { Mesh, ShaderMaterial, Vector2, MeshBasicMaterial } from "three";
import { SphereBufferGeometry } from "three";
import { TextureLoader } from "three";
import sphere360 from "./../assets/city_360.jpg";
import { BackSide } from "three";
const debugObject = {
  progress: 0.0,
};
function createSphere() {
  const sphere = new Mesh(
    new SphereBufferGeometry(100, 30, 30),
    new MeshBasicMaterial({
      map: new TextureLoader().load(sphere360),
      side: BackSide,
    })
  );
  sphere.rotateZ(-Math.PI / 18);
  let lastScroll = 0;
  let scrollHeight =
    document.querySelector(".footer").getBoundingClientRect().bottom -
    innerHeight;
  sphere.tick = (delta) => {
    window.addEventListener("scroll", () => {
      lastScroll =
        document.querySelector(".footer").getBoundingClientRect().bottom -
        innerHeight;
      let scroll = scrollHeight - lastScroll;
      sphere.rotation.y = (scroll / scrollHeight) * Math.PI;
    });
  };

  return sphere;
}

export { createSphere };
