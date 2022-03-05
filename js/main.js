const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const footerYear = document.querySelector('.footer__year');
const navItems = navMobile.querySelectorAll('.nav__link');
const body = document.querySelector('body');
const arrowToTop = document.querySelector('.footer__arrow-up');


console.log(navMobile);

//chowam nawigację
const handleNav = () => {
    navMobile.classList.toggle('nav--active');
    body.classList.toggle('fixed-body');
	burgerBtn.classList.toggle('is-active');
    
    navItems.forEach(item=>{
        item.addEventListener('click', ()=>{
            navMobile.classList.remove('nav--active');
            body.classList.remove('fixed-body');
            burgerBtn.classList.remove('is-active');
        })
    })
};

if(burgerBtn.style.display == "none"){
    navMobile.classList.remove('nav--active');
}


burgerBtn.addEventListener('click', handleNav);

//zmieniam rok
const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year + ' ' + 'D&G Corporation';
};
handleCurrentYear();

//wracam do headera 
arrowToTop.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})
