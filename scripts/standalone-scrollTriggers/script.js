
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '.panel-9',
    start: 'top 6%',
    markers: true,
    toggleClass: {targets: 'nav', className: 'nav-active'}, 
})


