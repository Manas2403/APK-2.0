function animate() {
  gsap.from(".left_to_right", {
    duration: 2,
    x: "-100vw",
    ease: "power2.in",
    repeat: -1,
    stagger: 0.4,
    repeatDelay: 2,
  });
}

export { animate };
