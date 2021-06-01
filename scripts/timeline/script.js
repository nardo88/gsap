
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.box',
        markers: true,
        start: 'top 85%',
        end: 'top 10%',
        scrub: 0.5
    }
});

tl.to('.box', {x: 500, opacity: 0.1, duration: 10})
    .to('.box', {y: 200, opacity: 0.6, rotate: 360, duration: 8})
    .to('.box', {x: 0, opacity: 1, duration: 7})


/*
    delay - отвечает за задержку анимации
*/

