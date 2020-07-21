
// slides();
function slide() {
	const carouselSlide = document.querySelector(".images-slide"),
		carouselImg = document.querySelectorAll(".images-slide img"),
		prevBtn = document.querySelector(".left"),
		nextBtn = document.querySelector(".right"),
		size = '100';

	let counter = 1;
	let anotherCounter = 0;
	// carouselImg.forEach((itself) => {
	// 	itself.style.width = size + "px";
	// });

	carouselSlide.style.transform = `translateX(-${size * counter}vw)`;

	nextF = () => {
		if (counter >= carouselImg.length - 1) return;

		carouselSlide.style.transition = "transform 0.6s cubic-bezier(.13,.52,.73,.74)";
		counter++;
		carouselSlide.style.transform = `translateX(-${size * counter}vw)`;

		anotherCounter++;
	};

	const transitionEnd = (e) => {
		e.preventDefault();
		if (carouselImg[counter].id === "lastImgClone") {
			carouselSlide.style.transition = "none";
			counter = carouselImg.length - 2;
			carouselSlide.style.transform = `translateX(-${size * counter}vw)`;
		}
		if (carouselImg[counter].id === "firstImgClone") {
			carouselSlide.style.transition = "none";
			counter = carouselImg.length - counter;
			carouselSlide.style.transform = `translateX(-${size * counter}vw)`;
		}
		
		
	};

	const prevF = () => {
		if (counter <= 0) return;

		carouselSlide.style.transition = "transform 0.6s cubic-bezier(.13,.52,.73,.74)";
		counter--;
		carouselSlide.style.transform = `translateX(-${size * counter}vw)`;
	};

	const changeImg = (n) => {
		setInterval(nextF, n * 1000);
	};

	carouselSlide.addEventListener("transitionend", transitionEnd);

	nextBtn.addEventListener("click", nextF);
	prevBtn.addEventListener("click", prevF);

	window.onload = changeImg(8);
}


slide();
