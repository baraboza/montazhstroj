$(function() {

$('input[type=tel]').mask('+7 (999) 999-99-99');

$('.fancybox').fancybox();

$('.js-modal-open').click(function(e) {
	e.preventDefault();
	$('body').addClass('overflow-hidden');
	$( $(this).attr('href') ).fadeIn();
});

$('.modal__close').click(function() {
	$('body').removeClass('overflow-hidden');
	$(this).parents('.modal-wrapper').fadeOut();
});

$('.modal-wrapper').click(function(e) {
	let modal = $(this).find('.modal');
	if (modal.is(e.target) || modal.has(e.target).length > 0) return;
	$('body').removeClass('overflow-hidden');
	$(this).fadeOut();
});

$('.js-tabs__content').hide();
$('.js-tabs__content:first').show();
$('.js-tabs__list li:first a').addClass('--active');
$('.js-tabs__list a').click(function(event) {
	event.preventDefault();
	if ($(this).hasClass('--active')) return;
	
	let parent = $(this).closest('.js-tabs');
	parent.find('.js-tabs__list a').removeClass('--active');
	$(this).addClass('--active');
	parent.find('.js-tabs__content').hide();
	var selectTab = $(this).attr("href");
	$(selectTab).fadeIn();
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$('.scroll-top').fadeIn(200);
	} else {
		$('.scroll-top').fadeOut(200);
	}
});

$('.scroll-top').click(function() {
	$('html, body').animate({scrollTop: 0}, 1000);
});

$('.scroll-link').click(function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
	}, 1000);
});

$('.projects__list').slick({
	arrows: false,
	dots: true
});

$('.projects__images').each(function(i, el) {
	let parent = $(el);

	parent.find('.projects__images-list').slick({
		swipe: false,
		prevArrow: parent.find('.projects__images-prev'),
		nextArrow: parent.find('.projects__images-next')
	});
});

$('.partners__slider-list').slick({
	slidesToShow: 5,
	prevArrow: '.partners__slider-prev',
	nextArrow: '.partners__slider-next',
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true
			}
		}
	]
});


$('.header__button-menu').click(function() {
	$('body').addClass('overflow-hidden');
	$('.header__mobile').fadeIn();
});

$('.header__mobile-close').click(function() {
	$('body').removeClass('overflow-hidden');
	$('.header__mobile').fadeOut();
});
});
