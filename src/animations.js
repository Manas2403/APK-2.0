function animate() {
  gsap.from(".left_to_right", {
    duration: 1,
    x: "-100vw",
    ease: "power2.in",
    // repeat: -1,
    stagger: 0.4,
    // repeatDelay: 2,
  });
}
// // function animateup() {
// //   gsap.from(".bottom_to_up", {
// //     duration: 1,
// //     x: "+300vh",
// //     ease: "power2.in",
// //     // repeat: -1,
// //     stagger: 0.8,
// //     // repeatDelay: 2,
// //   });
// // }
// const animateup = function () {
//   const boxes = document.querySelectorAll(".box");

//   const config = {
//     threshold: 0.5,
//   };

//   const tl = new TimelineMax();

//   let observer = new IntersectionObserver(function (entries, self) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         let overlap = "-=0.4";

//         if (!tl.isActive()) {
//           overlap = "+=0";
//         }

//         tl.to(entry.target, 0.5, { autoAlpha: 1 }, overlap);
//         self.unobserve(entry.target);
//       }
//     });
//   }, config);

//   boxes.forEach((box) => {
//     observer.observe(box);
//   });
// };
// var x = 0;
// if (document.getElementById("numbersd") != null) {
//   document.getElementById("numbersd").style.opacity = 0;

//   setInterval(() => {
//     if (window.pageYOffset > 500 && x == 0) {
//       x++;
//       document.getElementById("numbersd").style.opacity = 1;
//       animate();
//     }
//   }, 1000);
// }

export { animate };
