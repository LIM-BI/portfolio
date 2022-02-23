'use strict';


// 스크롤 했을때 navbar의 컬러 변경
const navbar = document.querySelector("#navbar");
const navHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log("nav" + navHeight);
    if (window.scrollY > navHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// navbar 메뉴를 클릭하면 해당 화면으로 스크롤링
const navbar_menu = document.querySelector(".navbar__menu");
navbar_menu.addEventListener('click', (event) => {

    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }
    console.log(event.target.dataset.link);

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: 'smooth', block: 'center' });

})