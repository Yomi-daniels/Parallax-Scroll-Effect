let sky = document.getElementById("sky");
let mountain = document.getElementById("mountain");
let grass = document.getElementById("grass");

window.addEventListener("scroll", () => {
  var value = window.scrollY;

  // Sky moves down a little and stops after a certain scroll value
  if (value <= 300) {
    sky.style.transform = `translateY(${value * 0.9}px)`;
  } else {
    sky.style.transform = `translateY(150px)`;
    sky.style.zIndex = -1;
  }

  // Grass moves up
  if (value <= 300) {
    grass.style.transform = `translateY(${-value * 0.9}px)`;
  }

  // Mountain moves up
  if (value <= 300) {
    mountain.style.transform = `translateY(${-value * 0.2}px)`;
  }
});

// GSAP animation for initial page load
window.onload = () => {
  // Animate the sky from above to normal state
  gsap.fromTo(
    sky,
    { y: -100 }, // Start 300px above the initial position
    { y: 0, duration: 1, ease: "power2.out" } // Move to its normal position
  );

  // Animate the grass from below to normal state
  gsap.fromTo(
    grass,
    { y: -200 }, // Start 200px above
    { y: 0, duration: 2.5, ease: "power2.out" } // Move to its normal position
  );

  // Animate the mountain from below to normal state
  gsap.fromTo(
    mountain,
    { y: -150 }, // Start 150px above
    { y: 0, duration: 2, ease: "power2.out" } // Move to its normal position
  );
};
