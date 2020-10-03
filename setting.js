
/* navbar hamburger */
const hamburger = document.querySelector('nav .hamburger');
const line = document.getElementsByClassName('line')[1];
const navbar = document.querySelector('nav .navbar');
hamburger.addEventListener('click', function() {
    navbar.classList.toggle('navbarOpen');
    line.classList.toggle('lineOpen');
});

const submit = document.querySelector('.form input[type=submit]');
submit.addEventListener('click', () => {
    submit.style.backgroundColor = 'white';
    submit.style.color = '#2E3148';
});

