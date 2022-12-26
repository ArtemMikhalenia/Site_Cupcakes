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

//spoiler
let btns = document.querySelectorAll('.butn');

for (butn of btns) {
	butn.addEventListener('click', function () {
		let text = this.closest('.swiper-column__text');
		let more = text.querySelector('.more');

		if (more.style.display === 'none') {
			more.style.display = 'none';
		} else {
			more.style.display = 'inline';
		}
	});
}
// const textMore = document.querySelector('.more');

// btns.addEventListener('click', function () {
// 	textMore.classList.toggle('showTexts');
// });

// console.log(textMore);
// btns.forEach(listItem => {
// 	listItem.addEventListener('click', function () {
// 		text.classList.add('active');
// 	})
// })

// (btn of btns) {
// 	btn.addEventlistener('click', function () {
// 			let more = document.querySelector('.more');
// 		})
// }
