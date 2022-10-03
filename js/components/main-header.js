const $btnMenu = document.querySelector('.icon-menu');
const $menu = document.querySelector('.menu');

const $btnClose = document.querySelector('.icon-close');


$btnMenu.addEventListener('click', () => {
    $menu.style = 'display: flex';
    $menu.classList.add('menuOpen')
})

$btnClose.addEventListener('click', () => {
    $menu.classList.remove('menuOpen')
    $menu.style = 'display: none';

})

function removeMenu() {
    $menu.classList.remove('menuOpen')
    $menu.style = 'display: none';
}
