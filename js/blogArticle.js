const accBtns = document.querySelectorAll('.accordion__item_btn');
for (let i = 0; i < accBtns.length; i++) {
    accBtns[i].addEventListener('click', function () {
        if (this.nextElementSibling.style.maxHeight) {
            this.classList.remove('active');
            this.nextElementSibling.style.maxHeight = null;
        } else {
            this.classList.add('active');
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.style.maxHeight + this.nextElementSibling.scrollHeight + 'px';
        }

    })
}

function subscirbe(modal) {
    let modals = document.querySelectorAll('.modal');
    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.remove('active');
    }
    document.querySelector(`#${modal}`).classList.toggle('active');
}

document.querySelector('.articleFooter__share_btn').addEventListener('click', function() {
    if (this.nextElementSibling.style.maxWidth) {
        this.nextElementSibling.style.maxWidth = null;
    } else {
        this.nextElementSibling.style.maxWidth = this.nextElementSibling.style.maxWidth + this.nextElementSibling.scrollWidth + 'px';
    }
})

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