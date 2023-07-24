// import images as relative image path won't work with vite/vercel.

import header from '../js/sections/header'
import subscriptionModal from '../js/sections/subscription-modal'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

document.querySelector('.scroll__button').addEventListener('click', function (e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

window.addEventListener('scroll', e => {
    if (window.scrollY > 1100) {
        document.querySelector('.scroll__button').style.display = 'flex'
    }
    if (window.scrollY < 1100) {
        document.querySelector('.scroll__button').style.display = 'none'
    }
})

subscriptionModal();

header();
