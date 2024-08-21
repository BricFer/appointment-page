//Elements

let heroElement = document.querySelector('.hero');
let nav = document.querySelector('.nav');
let navItems = document.querySelector('.items');
let container = document.querySelector('.index');
let footer = document.querySelector('.footer');

//Elements for events
let menu = document.querySelector('.menu__icon');


menu.addEventListener('click', () => {
    let removeElement =navItems.classList.contains('items--remove');

    
    if(removeElement) {
        navItems.classList.add('hidden');
        navItems.classList.remove('items--remove');
        
        heroElement.insertAdjacentHTML('afterbegin',`
        <img class="close-btn" src="assets/icons/close-btn.svg" alt="close buttom">`);

        nav.insertAdjacentHTML('afterbegin', `
            <div class="menu--show flex">
    
                    <div class="items flex">
                        <a href="index.html" class="item">Inicio</a>
                        <a href="about.html" class="item">Nosotrxs</a>
                        <a href="appointment.html" class="item">Citas</a>
                        <a href="contact.html" class="item">Contacto</a>
                    </div>
        
                    <div class="nav-media flex">
                        <a href="https://www.instagram.com/" class="social__link" target="_blank">
                            <img src="assets/icons/instagram.svg" alt="instagram icon" class="social__img">
                        </a>
            
                        <a href="https://www.facebook.com/" class="social__link" target="_blank">
                            <img src="assets/icons/facebook.svg" alt="facebook icon" class="social__img">
                        </a>
            
                        <a href="https://twitter.com/?lang=es" class="social__link" target="_blank">
                            <img src="assets/icons/twitter.svg" alt="twitter icon" class="social__img">
                        </a>
                    </div>
                </div>
            `)
            footer.classList.add('hidden');
        }
        
        let close = document.querySelector('.close-btn');
        let showMenu = document.querySelector('.menu--show');

        close.addEventListener('click', () => {
            close.remove();
            showMenu.remove();
            navItems.classList.add('items--remove');
            navItems.classList.remove('hidden');
            footer.classList.remove('hidden');
        })
})