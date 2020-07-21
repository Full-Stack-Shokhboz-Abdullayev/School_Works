const navSlide = () => {
	const burger = document.querySelector(".hamburger");
	const nav = document.querySelector(".navLinks");
	const navLinks = document.querySelectorAll(".navLinks .li");
	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
		navLinks.forEach((navLink, index) => {
			if (navLink.style.animationName === "navLinkFade") {
				navLink.style.animation = 'none';
				
				
			} else {
				navLink.style.animation = `navLinkFade 0.4s ease forwards ${
					index / 5 + 0.3
				}s`;
			}
			burger.classList.toggle('burger-toggle')
		});
	});
};
navSlide();
