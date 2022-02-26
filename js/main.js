const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const footerYear = document.querySelector('.footer__year');



const handleNav = () => {
    navMobile.classList.toggle('nav--active');
	burgerBtn.classList.toggle('is-active');
};
burgerBtn.addEventListener('click', handleNav);


const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year + ' ' + 'D&G Corporation';
};
handleCurrentYear();