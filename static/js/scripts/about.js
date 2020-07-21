const particles = [];
let a = document.documentElement.clientWidth;
let b = document.documentElement.clientHeight;
function setup() {
	window.onresize = (e) => {
		a = e.target.innerWidth;
		b = e.target.innerHeight;
	}
	const canv = createCanvas(a, b);
	canv.parent("parent-canv");
	console.log(document.documentElement.clientHeight);
	const particlesLength = Math.floor(
		document.documentElement.clientWidth / 20
	);
	for (let i = 0; i <= particlesLength; i++) {
		let c = i % 2 === 0 ? "rgba(255, 255, 255, 0.3)" : 'rgb(0,0,0)' 
		particles.push(new Particle(c));
	}
}

function draw() {
	background("rgb(49, 49, 49)");
	particles.forEach((p, index) => {
		p.update();
		p.draw();
		p.checkParticles(particles.slice(index));
	});
}

// function setGradient(x, y, w, h, c1, c2, axis) {
// 	noFill();
// 	if (axis == "Y") {
// 		// Top to bottom gradient
// 		for (let i = y; i <= y + h; i++) {
// 			var inter = map(i, y, y + h, 0, 1);
// 			var c = lerpColor(c1, c2, inter);
// 			stroke(c);
// 			line(x, i, x + w, i);
// 		}
// 	} else if (axis == "X") {
// 		// Left to right gradient
// 		for (let j = x; j <= x + w; j++) {
// 			var inter2 = map(j, x, x + w, 0, 1);
// 			var d = lerpColor(c1, c2, inter2);
// 			stroke(d);
// 			line(j, y, j, y + h);
// 		}
// 	}
// }

class Particle {
	constructor(color) {
		this.pos = createVector(random(width), random(height));
		this.size = 8;
		this.color = color 
		this.vel = createVector(random(-4, 4), random(-4, 4));
	}
	draw() {
		noStroke();
		fill(this.color);
		circle(this.pos.x, this.pos.y, this.size);
	}
	update() {
		this.pos.add(this.vel);
		this.edges();
	}
	edges() {
		if (this.pos.x < 0 || this.pos.x > width) {
			this.vel.x *= -1;
		}
		if (this.pos.y < 0 || this.pos.y > height) {
			this.vel.y *= -1;
		}
	}
	checkParticles(par) {
		par.forEach((p) => {
			const d = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
			if (d < 110) {
				stroke("rgba(250, 255, 250, 0.3)");
				line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
			}
		});
	}
}

class Shade {
	divs = document.querySelectorAll(".imager-about div");
	logo = document.querySelector(".logo-squared-about");
	content = document.querySelector(".content-about");
	makeItWork() {
		window.onload = () => {
			setTimeout(() => {
				this.divs.forEach((i) => {
					i.classList.add("loaded");
				});
				this.logo.classList.add("shadeForLogo");
				this.content.classList.add("shadeForContent");
			}, 700);
		};
	}
}

new Shade().makeItWork();
