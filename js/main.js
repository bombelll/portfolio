const hamburger = document.querySelector('.hamburger-icon');

const toggleMobileMenu = () => {
    hamburger.classList.toggle('open');

}

hamburger.addEventListener('click', toggleMobileMenu);