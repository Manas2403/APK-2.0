function animate() {
  gsap.from(".left_to_right", {
    duration: 1,
    x: "-100vw",
    ease: "power2.in",
    // repeat: -1,
    stagger: 0.4
    // repeatDelay: 2,
  });
}

var x = 0;
document.getElementById("numbersd").style.opacity=0;

setInterval(()=>{
  if((window.pageYOffset > 500) && (x==0))
  {
    x++;
    document.getElementById("numbersd").style.opacity=1;
    animate();
  }
},1000);



export { animate };
