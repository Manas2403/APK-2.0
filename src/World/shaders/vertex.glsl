precision mediump float;

uniform float uTime;
uniform vec2 uMouse;

varying vec2 vUv;

void main(){
  vUv = uv;

  vec3 pos = position;
  float freq = 25.;
  float amp =  3.;
  float timeFactor = uTime * 0.1 + abs(uMouse.x) + abs(uMouse.y);

  pos.z = (sin((uv.x +  timeFactor) * (freq ) * 0.4) + sin((uv.y  + timeFactor) * (freq ) * 0.4 )) * (amp);

  // pos.z = (sin((uv.x +  uTime) ) + sin((uv.y  + uTime) )) ;

 
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
}