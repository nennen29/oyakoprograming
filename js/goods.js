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