const headerSwiper = new Swiper("#headerSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: "#headerSlider .header__slider_btn.next",
        prevEl: "#headerSlider .header__slider_btn.prev",
    },
    autoplay: {
        delay: 5000
    },
});

const headerVideoPlay = document.querySelector('#headerVideoPlay');
headerVideoPlay.addEventListener('click', function () {
    if (headerSwiper.autoplay.running) {
        headerSwiper.autoplay.stop();
    } else {
        headerSwiper.autoplay.start();
    }
})

const advantagesSlider = new Swiper("#advantagesSlider", {
    slidesPerView: 5,
    spaceBetween: 156,
    loop: true,
    navigation: {
        nextEl: ".advantages__slider .advantages__slider_controlers_btn.next",
        prevEl: ".advantages__slider .advantages__slider_controlers_btn.prev",
    },
});

const inst = new Swiper("#inst", {
    slidesPerView: 3,
    spaceBetween: 75,
    autoplay: {
        delay: 5000
    },
    navigation: {
        nextEl: ".advantages__slider .advantages__slider_controlers_btn.next",
        prevEl: ".advantages__slider .advantages__slider_controlers_btn.prev",
    },
});

function setPartnersSlider() {
    const partnersWrapper = document.querySelector('#partners');
    if (partnersWrapper.childElementCount > 10) {
        partnersWrapper.classList.remove('desktop');
        partnersWrapper.classList.add('swiper');
        partnersWrapper.classList.add('partnersSlider');
        let partnersEl = partnersWrapper.querySelectorAll('.partners__el');
        for (let i = 0; i < partnersEl.length; i++) {
            partnersEl[i].remove();
            let newSlides = document.createElement('div');
            newSlides.classList.add('swiper-slide');
            partnersWrapper.appendChild(newSlides);
        }
        let partnersNewEl = partnersWrapper.querySelectorAll('.swiper-slide');
        for (let i = 0; i < partnersNewEl.length; i++) {
            partnersNewEl[i].appendChild(partnersEl[i]);
        }        
        const partnersSlider = new Swiper('.partnersSlides', {
            slidesPerView: 10,
            spaceBetween: 75,
            autoplay: {
                delay: 5000
            },
            navigation: {
                nextEl: ".advantages__slider .advantages__slider_controlers_btn.next",
                prevEl: ".advantages__slider .advantages__slider_controlers_btn.prev",
            },
        });
    } else {
        partnersWrapper.classList.remove('partnersSlides');
        partnersWrapper.classList.add('desktop');
        partnersWrapper.classList.remove('swiper');
    }
}
setPartnersSlider();
window.addEventListener('resize', function () {
    setPartnersSlider();
})