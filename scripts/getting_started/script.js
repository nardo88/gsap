


// создаем тригер
gsap.registerPlugin(ScrollTrigger);
// обращаемся к библиотеке и вызываем метод to
gsap.to(".square", {
    // сокращенная запись transform: translate(700px)
    x: 700,
    // время выполнения анимации
    duration: 3,
    // тригер. Как только тригер появится в области просмотра (viewport)
    // только тогда анимация сработает
    scrollTrigger: ".square2"
})