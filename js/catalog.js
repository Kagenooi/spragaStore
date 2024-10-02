const catalog = document.querySelector('#catalog');
const catalogFilterBtns = catalog.querySelectorAll('.products__filter_btn');
const catalogWrapper = catalog.querySelectorAll('.products__wrapper');
for (let i = 0; i < catalogFilterBtns.length; i++) {
    catalogFilterBtns[i].addEventListener('click', function() {
        for (let x = 0; x < catalogWrapper.length; x++) {
            catalogWrapper[x].classList.remove('active');
            catalogFilterBtns[x].classList.remove('active');
        }
        this.classList.add('active');
        document.querySelector(`#${this.dataset.activate}`).classList.add('active');
    })
}
document.querySelector('#defaultFilter').click();
function toggleMobileMenu() {
    document.querySelector('#mobileMenu').classList.toggle('active');
}
window.toggleMobileMenu = toggleMobileMenu;