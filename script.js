$(document).ready(function() {
    $('.menu-btn').on('click', function(e) {
        e.prevetDefault;
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
    });

    $('#menu-nav').on("click", "a", function(e) {
        e.prevetDefault;
        var id = $(this).attr('href');

        top = $(id).offset().top;        
        $('body,html').animate({scrollTop: top},1500);
    });
});