const address = document.querySelector('#address');
const addressFilterBtns = address.querySelectorAll('.contact__address_btns_btn');
const addressWrapper = address.querySelectorAll('.contact__address_wrapper');
for (let i = 0; i < addressFilterBtns.length; i++) {
    addressFilterBtns[i].addEventListener('click', function () {
        for (let x = 0; x < addressWrapper.length; x++) {
            addressWrapper[x].classList.remove('active');
            addressFilterBtns[x].classList.remove('active');
        }
        this.classList.add('active');
        document.querySelector(`#${this.dataset.activate}`).classList.add('active');
    })
}
document.querySelector('#defaultAddress').click();

const swiperAbout1 = new Swiper("#about1", {
    loop: true,
    navigation: {
        nextEl: "#about1 .about__pic_btns_btn.next",
        prevEl: "#about1 .about__pic_btns_btn.prev",
    },
});

const swiperAbout2 = new Swiper("#about2", {
    loop: true,
    navigation: {
        nextEl: "#about2 .about__pic_btns_btn.next",
        prevEl: "#about2 .about__pic_btns_btn.prev",
    },
});

function toggleWishlist() {
    document.querySelector('#favorites').classList.toggle('active');
}
window.toggleWishlist = toggleWishlist;

function toggleBasket() {
    document.querySelector('#basket').classList.toggle('active');
}
window.toggleBasket = toggleBasket;


function toggleMobileMenu() {
    document.querySelector('#mobileMenu').classList.toggle('active');
}
window.toggleMobileMenu = toggleMobileMenu;