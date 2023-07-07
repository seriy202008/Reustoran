export function burger() {
    let burgerBtn = document.querySelector('.burger--button');
    let burgerMenu = document.querySelector('.burger--menu');
    let burgerLinks = document.querySelectorAll('.burger--link');
    burgerBtn.onclick = function (e) {
        burgerMenu.classList.add('active');
    }
    document.onclick = function (e) {
        if (!e.target.closest('.burger') || e.target.closest('.burger--close') || e.target.closest('.burger--link')) {
            burgerMenu.classList.remove('active');
        }
    }
    document.addEventListener('scroll', function (e) {
        burgerMenu.classList.remove('active');
    })
}