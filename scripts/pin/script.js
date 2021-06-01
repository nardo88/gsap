
gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
    // x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square2",
        start: "top 80%",
        end: "top 30%",

        scrub: true,

        markers: true,
        toggleClass: 'red',
        toggleActions: "restart none none none",
        pin: ".square",
        pinSpacing: true,

    }
})

