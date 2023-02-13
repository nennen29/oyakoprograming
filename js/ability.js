$(function(){
    var main1 = $('.ab-main-1');
		main2 = $('.ab-main-2');
        main3 = $('.ab-main-3');
        main4 = $('.ab-main-4');
		btn1 = $('.ab-btn-1');
        btn2 = $('.ab-btn-2');
        btn3 = $('.ab-btn-3');
        btn4 = $('.ab-btn-4');

        btn1.on('click',function(){
            main1.removeClass('invisible');
            main1.addClass('active');
            main2.removeClass('active');
            main2.addClass('invisible');
            main3.removeClass('active');
            main3.addClass('invisible');
            main4.removeClass('active');
            main4.addClass('invisible');
        });

        btn2.on('click',function(){
            main2.removeClass('invisible');
            main2.addClass('active');
            main1.removeClass('active');
            main1.addClass('invisible');
            main3.removeClass('active');
            main3.addClass('invisible');
            main4.removeClass('active');
            main4.addClass('invisible');
        });

        btn3.on('click',function(){
            main3.removeClass('invisible');
            main3.addClass('active');
            main1.removeClass('active');
            main1.addClass('invisible');
            main2.removeClass('active');
            main2.addClass('invisible');
            main4.removeClass('active');
            main4.addClass('invisible');
        });

        btn4.on('click',function(){
            main4.removeClass('invisible');
            main4.addClass('active');
            main1.removeClass('active');
            main1.addClass('invisible');
            main3.removeClass('active');
            main3.addClass('invisible');
            main2.removeClass('active');
            main2.addClass('invisible');
        });
});