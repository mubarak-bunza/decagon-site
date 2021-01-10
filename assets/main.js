let navbar = document.querySelector('.nav')

window.onscroll = function() {
    if (window.scrollY > 300) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

let icon = document.querySelector('#icon')
let menu_btns = document.querySelector('#menu-btn')

icon.addEventListener('click', function(){
    
    if(menu_btns.classList.contains('hide')){
        menu_btns.classList.remove('hide')
        menu_btns.classList.add('show')
    }else{
        menu_btns.classList.remove('show')
        menu_btns.classList.add('hide')
    }
})