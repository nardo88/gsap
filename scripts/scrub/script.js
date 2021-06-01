
gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 80%",
        end: "top 30%",

        scrub: true,

        markers: true,
        toggleClass: 'red',
        toggleActions: "restart none none none",

    }
})


  /*
            scrub - отвечает за поведение анимации во время скрола. т.е. анимация будет привязана к скролу. если скрол остановится то анимация так жеостановится

            значения:

                true - анимация будет привязана к скролу с соблюдением timeline/ т.е. если мы проскролим обратно то анимация будет скролится в обратном направлении
                число - анимация будет проигрываться то количество секунд какое мы указали. По сути это transition анимации. т.е. перемещение будет с задержкой
        
        */


