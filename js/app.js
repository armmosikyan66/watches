let burger = document.querySelector('.burger');
let subNav = document.querySelector('.sub__navigation');
let body = document.querySelector('#body');

burger.addEventListener('click', function () {
    subNav.classList.toggle('active');
    body.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    let header = document.querySelector('.header');
    let intro = document.querySelector('.intro');

    window.onscroll = () => {
        if(window.pageYOffset > intro.clientHeight) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    };
})

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        subNav.classList.remove('active');
        body.classList.remove('active');
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};