/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.header',{}); 
sr.reveal('.about',{delay: 200}); 
sr.reveal('#capitulo1',{delay: 200}); /*

SCROLL ABOUT
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

SCROLL SKILLS
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

SCROLL WORK
sr.reveal('.work__img',{interval: 200}); 

SCROLL CONTACT
sr.reveal('.contact__input',{interval: 200});*/