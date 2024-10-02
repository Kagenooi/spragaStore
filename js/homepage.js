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

const advantagesSwiper = new Swiper("#advantagesSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".advantages__slider .advantages__slider_controlers_btn.next",
        prevEl: ".advantages__slider .advantages__slider_controlers_btn.prev",
    },
    breakpoints: {
        520: {
            slidesPerView: 5,
            spaceBetween: 156,
        }
    }
});

const inst = new Swiper("#inst", {
    slidesPerView: 3,
    spaceBetween: 75,
    loop: true,
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
});


function setSlider() {
    const blogItems = document.querySelector('.blog__items');
    blogItems.classList.add('swiper');

    let blogEl = blogItems.querySelectorAll('.blogArticle');
    let blogElArr = [];
    for (let i = 0; i < blogEl.length; i++) {
        blogElArr[i] = blogEl[i].innerHTML;
        blogEl[i].remove();
    }


    let sliderWrapper = document.createElement('div');
    sliderWrapper.classList.add('swiper-wrapper');
    blogItems.appendChild(sliderWrapper);

    for (let i = 0; i < blogElArr.length; i++) {
        let sliderEl = document.createElement('div');
        sliderEl.classList.add('swiper-slide');
        sliderWrapper.appendChild(sliderEl);
    }

    let swiperSlides = blogItems.querySelectorAll('.swiper-slide');
    for (let i = 0; i < swiperSlides.length; i++) {
        let blogElAppend = document.createElement('div');
        blogElAppend.classList.add(blogEl[0].classList);
        swiperSlides[i].appendChild(blogElAppend);
    }

    let blogArticles = blogItems.querySelectorAll('.blogArticle');
    for (let i = 0; i < blogArticles.length; i++) {
        blogArticles[i].innerHTML = blogElArr[i];
    }

    let pagination = document.createElement('div');
    pagination.classList.add('swiper-pagination');
    blogItems.appendChild(pagination);

    new Swiper(blogItems, {
        slidesPerView: 2,
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            520: {
                slidesPerView: 4,
            },
        },
    });
}
function activateSlider() {
    if (document.body.clientWidth < 960) {
        setSlider();
    }
}
activateSlider();



function toggleMobileMenu() {
    document.querySelector('#mobileMenu').classList.toggle('active');
}
window.toggleMobileMenu = toggleMobileMenu;

const inputs = document.querySelectorAll('.inp');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
        for (let x = 0; x < inputs.length; x++) {
            if (inputs[x].value) {
                inputs[x].closest('label').querySelector('.clearBtn').classList.add('active')
            } else {
                inputs[x].closest('label').querySelector('.clearBtn').classList.remove('active')
            }
        }
    })
}

const clearBtns = document.querySelectorAll('.clearBtn');
for (let i = 0; i < clearBtns.length; i++) {
    clearBtns[i].addEventListener('click', function() {
        this.closest('label').querySelector('.inp').value = '';
        this.classList.remove('active');
    })
}