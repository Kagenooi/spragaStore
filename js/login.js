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