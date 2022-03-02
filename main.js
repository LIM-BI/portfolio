'use strict';


// 스크롤 했을때 navbar의 컬러 변경
const navbar = document.querySelector("#navbar");
const navHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
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


    scrollIntoView(link)

})

// contact me 버튼 누를때 이벤트
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener('click', () => {
    scrollIntoView("#contact");
})

// 스크롤링시 홈에 투명도 주기
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
    navbar_menu.classList.remove('open');
})

const upBtn = document.querySelector("#upBtn");
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        upBtn.classList.add('visible');
    } else {
        upBtn.classList.remove('visible');
    }
})

function scrollIntoView(selector) {
    const goContact = document.querySelector(selector);
    goContact.scrollIntoView({ behavior: 'smooth' });
}

upBtn.addEventListener('click', () => {
    scrollIntoView("#home");
})


const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projectFilterBtn = document.querySelectorAll(".category__btn");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }

    projectFilterBtn.forEach((projectBtn) => {
        projectBtn.classList.remove('selected');
    })
    event.target.classList.add('selected');

    projectContainer.classList.add('anim-out');


    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === 'all' || filter === project.dataset.filter) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out');
    }, 300);

})

// navbar toggle button
const hamburgerMenu = document.querySelector(".navbar__toggle-btn");
hamburgerMenu.addEventListener("click", () => {
    navbar_menu.classList.toggle('open');
})