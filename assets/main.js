var navbar = document.querySelector('.nav')

window.onscroll = function() {
    if (window.scrollY > 300) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}