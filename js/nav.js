$(function(){
    var menuopen = $('#parent-menu-btn');
    var nav = $('#parent-menu');
    var navA = $('#parent-a');
    var navClose = $('.parent-menu-close');
    var parentBody = $('#parent-body');


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

    if((nav).hasClass('menu-active')){
        parentBody.click(function(){
            nav.removeClass('menu-active');
        });
    }

});