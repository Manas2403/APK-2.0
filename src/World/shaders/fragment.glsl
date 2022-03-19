 precision mediump float;

uniform vec3 uColor;
uniform float uTime;
// uniform vec2 uMouse;

varying vec2 vUv;

void main(){     
    gl_FragColor = vec4(vUv.x , 1. , vUv.y,1.0);
}