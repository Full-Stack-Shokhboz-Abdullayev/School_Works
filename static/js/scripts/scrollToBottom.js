const footer = document.querySelector('.footer');
const clazz = 'showWithAnime'
window.onscroll = (ev) => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.classList.add(clazz)
        console.log('hey bottom!')
    } else {
        if (footer.classList.contains(clazz)) {
            footer.classList.remove(clazz)
        } else return;
    }
};