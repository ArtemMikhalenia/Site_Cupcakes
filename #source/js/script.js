//ibg
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();

//swiper
const swiper = new Swiper('.swiper', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 180,
	autoHeight: true,
	coverflowEffect: {
		rotate: 0,
		depth: 200,
		shadow: true,
		slideShadows: true
	},
	navigation: {
		nextEl: '.slider-next',
		prevEl: '.slider-prev',
	},
});

//spoiler for big text
let btns = document.querySelectorAll('.btn');

for (btn of btns) {
	btn.addEventListener('click', function () {
		let text = this.closest('.swiper-column__text');
		let dots = text.querySelector('.dots');
		let more = text.querySelector('.more');

		if (dots.style.display === 'none') {
			dots.style.display = 'inline';
			more.style.display = 'none';
			this.textContent = 'Читать отзыв полностью';
		} else {
			dots.style.display = 'none';
			more.style.display = 'inline';
			this.textContent = 'Скрыть';
		}
	});

	//baguette
	window.addEventListener('load', function () {
		baguetteBox.run('.orders__images');
	});
}