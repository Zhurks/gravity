$(function () {

    var mixer = mixitup('.portfolio__items');

    $('.services__slider').slick({
        prevArrow: "<img src='../images/services-filter/arrow-left.png' class='prev' alt='previous arrow'>",
        nextArrow: "<img src='../images/services-filter/arrow-right.png' class='next' alt='next arrow'>",
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

});