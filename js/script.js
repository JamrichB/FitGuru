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

function scrollEffect() {
    var aboutText = document.querySelector('.about');
    var aboutPosition = aboutText.getBoundingClientRect().top;

    var placesText = document.querySelector('.placesClass');
    var placesPosition = placesText.getBoundingClientRect().top;

    var compoText = document.querySelector('.components');
    var compoPosition = compoText.getBoundingClientRect().top;

    var tableText = document.querySelector('.scTable');
    var tablePosition = tableText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;
   

  if(aboutPosition < screenPosition){
     aboutText.classList.add('about_animate');
  }
  if(placesPosition < screenPosition) {
    placesText.classList.add('placesClass_animate');
  }
  if(compoPosition < screenPosition) {
      compoText.classList.add('components_animate');
  }
  if(tablePosition < screenPosition) {
      tableText.classList.add('scTable_animate')
  }
} 

navSlider();
window.addEventListener('scroll',scrollEffect);



