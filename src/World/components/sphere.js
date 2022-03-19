import vertexShader from "./../shaders/vertex.glsl";
import fragmentShader from "./../shaders/fragment.glsl";
import { Mesh, ShaderMaterial, Vector2, MeshBasicMaterial } from "three";
import { SphereBufferGeometry } from "three";
import { TextureLoader } from "three";
import sphere360 from "./../assets/HDR_Free_City_Night_Lights_Bg.jpg";
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

  var lastScrollTop = 0;

  sphere.tick = (delta) => {
    window.addEventListener("wheel", (e) => {
      if (
        document.querySelector(".footer").getBoundingClientRect().top >
          innerHeight &&
        document.querySelector(".footer").getBoundingClientRect().top <
          document.querySelector(".footer").offsetTop
      ) {
        window.addEventListener("scroll", function () {
          var st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop) {
            let rotation = Math.PI * (e.offsetY / innerHeight);
            sphere.rotation.y += rotation * 0.00001;
          } else {
            let rotation = Math.PI * (e.offsetY / innerHeight);
            sphere.rotation.y -= rotation * 0.00001;
          }
          lastScrollTop = st <= 0 ? 0 : st;
        });
      }
    });
  };

  return sphere;
}

export { createSphere };
