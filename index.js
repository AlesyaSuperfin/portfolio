
gsap.from(".animationStart" , {
    opacity: 0,
    duration: 2,
})

gsap.from(".animationBtn" , {
    y: 200,
    opacity: 0,
    duration: 2,
})

gsap.from(".animationOne", {
    opacity: 0,
    y: -200,
    duration: 2,
    scrollTrigger: {
        trigger: "#about",
    }
})

gsap.from(".animationTwo" , {
    opacity: 0,
    x: 800,
    duration: 2,
    scrollTrigger: {
        trigger: "#expertise",
    }
})

gsap.from(".animationThree", {
    opacity: 0,
    scale: 2,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: "#portfolio",
    }
})

gsap.from(".animationFour", {
    opacity: 0,
    x: -800,
    duration: 2,
    scrollTrigger: {
        trigger: "#contacts",
    }
})


const menu = document.getElementById("menu");
const menu_btn = document.getElementById("menu_btn");

const showHideMenu = () => {
    menu.classList.toggle("scale-x-0");
};

menu_btn.addEventListener("click", showHideMenu);

const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = [ "./public/images/C_React_Redux.png", "./public/images/C_Figma.png", "./public/images/C_Frontend.png"];

console.log(photos[0]);

let i = 0;
next.addEventListener('click', () => {
    i++;
    if( i > photos.length -1) {
        i=0;
    }
    document.querySelector('#pictures').src=photos[i];
})

back.addEventListener('click', () => {
    i--;
    if(i<0) {
        i = photos.length - 1;
    }
    document.querySelector('#pictures').src=photos[i];
})


