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

//placeholder для одного
let form = document.forms.phone;
let placeholder = document.querySelector('[placeholder]');
let phoneInput = form.phonenumber;
let phonePlaceholder = phoneInput.placeholder;

placeholder.addEventListener("focus", function (e) {
	phoneInput.placeholder = "";
});
placeholder.addEventListener("blur", function (e) {
	phoneInput.placeholder = phonePlaceholder;
});


//Scroll animation

const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			} else {
				if (!animItem.classList.contains('_no-anim')) {
					animItem.classList.remove('active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 100);
}
