$(document).ready(function() {
    $('.menu-btn').on('click', function(e) {
        e.prevetDefault;
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
    });   
});