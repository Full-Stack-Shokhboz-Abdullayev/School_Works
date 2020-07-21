const showNewsletter = document.querySelector("#showInput");
const newsletterInput = document.querySelector("#newsInput");
const newsletterBtn = document.querySelector("#newsletter-subs");

showNewsletter.addEventListener("click", () => {
	newsletterBtn.classList.add("show-newsletter-btn"); //done
	showNewsletter.classList.add("hide-newsletter-shower"); // done
	newsletterInput.classList.add("show-newsletter-input"); // 
});

const newsletterForm = document.querySelector('#newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterBtn.classList.remove("show-newsletter-btn"); //done
	showNewsletter.classList.remove("hide-newsletter-shower"); // done
    newsletterInput.classList.remove("show-newsletter-input");
    // newsletterInput.value = '';
    showNewsletter.innerText = 'Thank You!'
    showNewsletter.disabled = 'disabled'
    //after sending post
    e.target.clear()
})


