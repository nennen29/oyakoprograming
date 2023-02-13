$(function(){
    var menuopen = $('#parent-menu-btn');
    var nav = $('#parent-menu');
    var navA = $('#parent-a');


    menuopen.click(function () {
        nav.toggleClass('menu-active');
        // $('body').addClass('no-scroll');
    });
    
    navA.click(function () {
        nav.removeClass('menu-active');
    });
    
});