const productMedia = new Swiper("#productMedia", {
    loop: true,
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        520: {
            spaceBetween: 40,
        }
    }
});
const productMediaSmall = new Swiper("#productMediaSmall", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".productCart__media_btn.next",
        prevEl: ".productCart__media_btn.prev",
    },
    thumbs: {
        swiper: productMedia,
    },
});
function toggleMobileMenu() {
    document.querySelector('#mobileMenu').classList.toggle('active');
}
window.toggleMobileMenu = toggleMobileMenu;
const sizes = document.querySelectorAll('.productCart__details_sizes_btn');
for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener('click', function() {
        for (let x = 0; x < sizes.length; x++) {
            sizes[x].classList.remove('active');
        }
        this.classList.add('active');
        document.querySelector('#boxSizes').innerHTML = this.dataset.value;
    })
}
document.querySelector('#sizesDefault').click();