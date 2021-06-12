const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});


const percents = document.querySelectorAll('.skills__item-percent'),
	lines = document.querySelectorAll('.skills__item-parent div');

percents.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});






$(document).ready(function () {
	const slider = tns({
		container: '.carousel__inner',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		controls: false,
		speed: 700,
		nav: false,
		mouseDrag: true,



	});

	document.querySelector('.prev').addEventListener('click', function () {
		slider.goTo('prev');
	});

	document.querySelector('.next').addEventListener('click', function () {
		slider.goTo('next');
	});
});