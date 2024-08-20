let menu = document.querySelector('.menu__icon');
let showMenu = document.querySelector('.expanded-menu');
let container = document.querySelector('main.index');
let footer = document.querySelector('footer.index');
let close = document.querySelector('.close-btn');

menu.addEventListener('click', () => {
    close.style.display = "block";
    showMenu.style.display = "block";
    footer.classList.add('hidden');
})

close.addEventListener('click', () => {
    close.style.display = "none";
    showMenu.style.display = "none";
    footer.classList.remove('hidden');
})