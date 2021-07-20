
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

//Funcão para abrir e fechar o menu 
for (const Element of toggle) {
  Element.addEventListener('click', function () {
    nav.classList.toggle('show');
  })
}

const link = document.querySelectorAll('nav ul li a');

for (const links of link) {
  links.addEventListener('click', function () {
    nav.classList.remove('show');
  })
}

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function ChangeHeaderWhenScroll() {

  if (navHeight <= window.scrollY) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }


}




// Swiper - Cria um Carrosel na guia depoimentos
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSizer: true
    }
  }
});


// Scroll Review
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

//Back to top

const backToTopButton = document.querySelector('.back-to-top');
function BackToTop() {

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }

}

const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurretnSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }

  }
}



/* When Scroll */
window.addEventListener('scroll', function () {
  ChangeHeaderWhenScroll();
  BackToTop();
  activateMenuAtCurretnSection();

})