$(function () {
    $(".menu a").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 150;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    var mixer = mixitup('.portfolio__items');

    $('.services__slider').slick({
        prevArrow: "<img src='../images/services-filter/arrow-left.png' class='prev services__prev' alt='previous arrow'>",
        nextArrow: "<img src='../images/services-filter/arrow-right.png' class='next services__next' alt='next arrow'>",
    });

    $('.testimonials__slider').slick({
        prevArrow: "<img src='../images/services-filter/arrow-left.png' class='prev testimonials__prev' alt='previous arrow'>",
        nextArrow: "<img src='../images/services-filter/arrow-right.png' class='next testimonials__next' alt='next arrow'>",
          responsive: [
            {
                breakpoint: 840,
                settings: {
                    arrows: false
                }
            }
        ]
    
    });

    $('.menu__btn, .menu a').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

});