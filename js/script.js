const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_comp');
    const navLinks = document.querySelectorAll('.nav_comp li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .1}s`;
            }
        });

    burger.classList.toggle('toggle');
    });
}

navSlider();