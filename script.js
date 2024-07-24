burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navLinks = document.querySelector('.nav-links')

burger.addEventListener('click',()=>{
    navLinks.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})