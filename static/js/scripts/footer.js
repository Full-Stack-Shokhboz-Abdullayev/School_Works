const notifier = document.querySelector('.notify');
const nForm = document.querySelector('.box form')
const nP = document.querySelector('.box p')

const tl = new TimelineLite(
    {
        paused: true,
    }
)

tl.to('.notify', 0.1, {
    opacity: 0,
    pointerEvents: 'none',
}).to(
    ".input-newsletter", 0.2, {
        width: '65%',
        ease: Power3.easeIn,
    },
    '-=0.3'
)



notifier.addEventListener('click', () => {
    tl.play()
})

nForm.addEventListener('submit', (e) => {
    e.preventDefault()
    tl.reverse()
    notifier.innerText = 'Thank You!'
    nP.innerText = 'You are subscribed to our newsletter.'
    notifier.disabled = 'disabled'
})

