$(function () {
	//header_main 下滑
	$('.menu .menu_item').hover(function() {
		$(this).find('.list').show();
	}, function() {
		$(this).find('.list').hide();
	});
	
	$('.share-recommend').find('span').eq(1).hover(function() {
		$('.two-yard').stop().show();
	}, function() {
		$('.two-yard').stop().hide();
	})
	
	
	//订单
	
	$('.order-my').click(function () {
		$('.page-article').stop().hide();
		$('.page-order').stop().show();
		$(this).find('a').css('color','#00bbff');
		$('.my-information').find('a').css('color','#666');
		
	})
	
	$('.my-information').click(function () {
		$('.page-order').stop().hide();
		$('.page-article').stop().show();
		$(this).find('a').css('color','#00bbff');
		$('.order-my').find('a').css('color','#666');
	})
	
	
	$('.member-up li').click(function () {
		$(this).parent().siblings('.items').find('.relative-tabs').eq($(this).index()).show().siblings().hide();
		$(this).css('color','#00bbff').siblings().css('color','#000000');
		
	})
	
	
	
	
})