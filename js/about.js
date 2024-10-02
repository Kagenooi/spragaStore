const address = document.querySelector('#address');
const addressFilterBtns = address.querySelectorAll('.contact__address_btns_btn');
const addressWrapper = address.querySelectorAll('.contact__address_wrapper');
for (let i = 0; i < addressFilterBtns.length; i++) {
    addressFilterBtns[i].addEventListener('click', function() {
        for (let x = 0; x < addressWrapper.length; x++) {
            addressWrapper[x].classList.remove('active');
            addressFilterBtns[x].classList.remove('active');
        }
        this.classList.add('active');
        document.querySelector(`#${this.dataset.activate}`).classList.add('active');
    })
}
document.querySelector('#defaultAddress').click();

function toggleMobileMenu() {
    document.querySelector('#mobileMenu').classList.toggle('active');
}
window.toggleMobileMenu = toggleMobileMenu;