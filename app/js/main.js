$(function () {
    $('.start__btn').fancybox();

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });
});