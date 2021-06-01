
gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
    // x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        end: "center 10%",
        markers: true,
        toggleClass: 'red',

    }
})