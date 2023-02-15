$(function(){
    var menuopen = $('#parent-menu-btn');
    var nav = $('#parent-menu');
    var navA = $('#parent-a');
    var navClose = $('.parent-menu-close');


    menuopen.click(function () {
        nav.toggleClass('menu-active');
        // $('body').addClass('no-scroll');
    });
    
    navA.click(function () {
        nav.removeClass('menu-active');
    });
    
    navClose.click(function(){
        nav.removeClass('menu-active');
    });

});