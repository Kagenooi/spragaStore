function adaptive() {
    const wrapper = document.querySelector('#adaptive');
    let zoom = document.body.clientWidth / 19.2 / 100;
    if (document.body.clientWidth > 981 && document.body.clientWidth < 1416) {
        zoom = document.body.clientWidth / 14.4 / 100;
    }
    if (document.body.clientWidth > 520 && document.body.clientWidth < 980) {
        zoom = document.body.clientWidth / 7.68 / 100;
    }
    if (document.body.clientWidth < 521) {
        zoom = document.body.clientWidth / 3.7 / 100;
    }
    wrapper.style.zoom = zoom;
}
adaptive();
window.addEventListener('resize', function() {
    adaptive();
});