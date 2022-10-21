const navbarMenuBtn = document.querySelector('.navbar-menu');
const navbarList = document.querySelector('.navbar-list');
const navbarMenuSpan = document.querySelectorAll('.navbar-menu span')

navbarMenuBtn.addEventListener('click', () => {
    navbarList.classList.toggle('slide')
    navbarMenuBtn.classList.toggle('slide')
    navbarMenuSpan.forEach((span) => {
        span.classList.toggle('slide')
    })
})