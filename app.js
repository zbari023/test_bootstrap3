const navSlide = ()=>{
    const menuBtn = document.querySelector(('.menu-btn'));
    const nav =document.querySelector('.nav-links');
    const navLinks =document.querySelectorAll('.nav-links li');
    menuBtn.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
    });
    navLinks.forEach((link,index) => {
        link.style.animation =` navLinkFade 1s ease forwards ${index}s`;
    });
}
navSlide();