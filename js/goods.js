// $(function(){
// 	var visible = $(".goods-info-visible");
// 	var invisible = $(".goods-info-invisible");
// 	var open = $(".iem");
// 	var close = $(".goods-info-close");
// 	var container = $(".goods-info");

// 	open.on("click",function(){
// 		container.addClass("goods-info-visible");
// 		container.removeClass("goods-info-invisible");
// 	});
// });

$(function(){
	var open = $('.item-scratch'),
		close = $('.goods-info-close'),
		container = $('.info-scratch');

	open.on('click',function(){	
		container.addClass('active');
		$('body').css('overflow','hidden');
		return false;
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-navi'),
		close = $('.goods-info-close'),
		container = $('.info-navi');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-springin'),
		close = $('.goods-info-close'),
		container = $('.info-springin');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-toio'),
		close = $('.goods-info-close'),
		container = $('.info-toio');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-alilo'),
		close = $('.goods-info-close'),
		container = $('.info-alilo');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-romi'),
		close = $('.goods-info-close'),
		container = $('.info-romi');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-swich'),
		close = $('.goods-info-close'),
		container = $('.info-swich');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-car'),
		close = $('.goods-info-close'),
		container = $('.info-car');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-logical'),
		close = $('.goods-info-close'),
		container = $('.info-logical');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-think'),
		close = $('.goods-info-close'),
		container = $('.info-think');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-Q'),
		close = $('.goods-info-close'),
		container = $('.info-Q');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-why'),
		close = $('.goods-info-close'),
		container = $('.info-why');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});

$(function(){
	var open = $('.item-tekisiko'),
		close = $('.goods-info-close'),
		container = $('.info-tekisiko');

	open.on('click',function(){	
		container.addClass('active');
		return false;
		$('body').css('overflow','hidden');
	});

	close.on('click',function(){	
		container.removeClass('active');
		$('body').css('overflow','auto');
	});

	$(document).on('click',function(e) {
		if(!$(e.target).closest('.goods-info').length) {
			container.removeClass('active');
			$('body').css('overflow','auto');
		}
	});
});