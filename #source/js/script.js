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