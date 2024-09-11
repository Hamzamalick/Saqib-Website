let spans = document.querySelectorAll("#add");

var clutter = 0; // Initialize clutter with a value, e.g., 0

// Start the interval and store its ID
let intervalId = setInterval(function () {
  clutter++;

  spans.forEach(function (span) {
    // Loop through each element in the NodeList
    span.textContent = clutter;
  });

  // Example: Stop the interval when clutter reaches 50
  if (clutter === 50) {
    clearInterval(intervalId);
  }
}, 100);

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("nav ul li", {
    y: -100,
    delay: 0.2,
    opacity: 0,
    stagger: 0.2,
  });

  gsap.from("#heading-text", {
    x: -700,
    duration: 1,
    delay: 0.5,
    opacity: 0,
  });
  gsap.from(".header-content h1", {
    x: -700,
    duration: 1,
    delay: 0.5,
    opacity: 0,
  });

  gsap.from(".section2 .left", {
    x: -700,
    opacity: 0,
    scrollTrigger: {
      trigger: ".left",
      scroller: "body",
    },
  });

  gsap.from(".section2 .right", {
    x: 700,
    opacity: 0,
    scrollTrigger: {
      trigger: ".right",
      scroller: "body",
    },
  });

  gsap.from(".section3-top .top-left", {
    x: -700,
    opacity: 0,
    scrollTrigger: {
      trigger: ".top-left",
      scroller: "body",
    },
  });

  gsap.from(".project-boxes .p-left", {
    x: -700,
    opacity: 0,
    scrollTrigger: {
      trigger: ".p-left",
      scroller: "body",
    },
  });

  gsap.from(".top-right", {
    x: 700,
    opacity: 0,
    scrollTrigger: {
      trigger: ".top-right",
      scroller: "body",
    },
  });

  gsap.from(".project-boxes .p-right", {
    x: 700,
    opacity: 0,
    scrollTrigger: {
      trigger: ".p-right",
      scroller: "body",
    },
  });
});
