$(function() {
	//header_main 下滑
	$('.menu li').hover(function() {
		$(this).find('.list').show();
	}, function() {
		$(this).find('.list').hide();
	});

	//侧边栏
	$('#sidebar_list li').hover(function() {
		$(this).find('a').eq(0).css('background', 'rgba(0,168,255)')
		$(this).find('#sidebar_item').stop().show();
		$('#sidebar_list').addClass('container');
	}, function() {
		$(this).find('a').eq(0).css('background', '')
		$(this).find('#sidebar_item').stop().hide();
		$('#sidebar_list').removeClass('container');
	})
	
	//右侧栏
	$(".rigth_group").hover(function () {
		$(this).find('a').find('img').eq(0).stop().hide();
		$(this).find('a').find('img').eq(1).stop().show();
		$(this).find('.rigth_appear').css('transform','translate(50px,0)').stop().fadeIn(1000);
	},function () {
		$(this).find('a').find('img').eq(1).stop().hide();
		$(this).find('a').find('img').eq(0).stop().show();
		$(this).find('.rigth_appear').stop().fadeOut(1000);
	})
	
	$(window).scroll(function () {
		var scrollTop = $(document).scrollTop();
		// console.log(scrollTop);
		if (scrollTop >= 400) {
			$('#side_right').stop(true).fadeIn();
		} else {
			$('#side_right').stop(true).fadeOut();
		}
	})
	
	//左侧
	$('.asus').hover(function () {
		$(this).find('.asus_1').hide();
		$(this).find('.asus_2').show();
	},function () {
		$(this).find('.asus_2').hide();
		$(this).find('.asus_1').show();
	})
	$(window).scroll(function () {
		var scrollTop = $(document).scrollTop();
		console.log(scrollTop);
		if (scrollTop >= 750) {
			$('#sidee_left').stop(true).show();
		} else {
			$('#sidee_left').stop(true).hide();
		}
		
		if (scrollTop >= 800&&scrollTop<=1300) {
			// console.log($('#sidee_left ul').find('li:eq(0)').find('.asus_2'));
			$('#sidee_left ul').find('li:eq(0)').find('.asus_1').hide();
			$('#sidee_left ul').find('li:eq(0)').find('.asus_2').show();
			$('#sidee_left ul').find('li:eq(0)').find('.asus_2 a').css('color','#40AFFE');
		}else{
			$('#sidee_left ul').find('li:eq(0)').find('.asus_2').hide();
			$('#sidee_left ul').find('li:eq(0)').find('.asus_1').show();
		}
		
		if (scrollTop >= 1320&&scrollTop<=1900) {
			$('#sidee_left ul').find('li:eq(1)').find('.asus_1').hide();
			$('#sidee_left ul').find('li:eq(1)').find('.asus_2').show();
			$('#sidee_left ul').find('li:eq(1)').find('.asus_2 a').css('color','#40AFFE');
		}else{
			$('#sidee_left ul').find('li:eq(1)').find('.asus_2').hide();
			$('#sidee_left ul').find('li:eq(1)').find('.asus_1').show();
		}
		if (scrollTop >= 1920&&scrollTop<=2550) {
			$('#sidee_left ul').find('li:eq(2)').find('.asus_1').hide();
			$('#sidee_left ul').find('li:eq(2)').find('.asus_2').show();
			$('#sidee_left ul').find('li:eq(2)').find('.asus_2 a').css('color','#40AFFE');
		}else{
			$('#sidee_left ul').find('li:eq(2)').find('.asus_2').hide();
			$('#sidee_left ul').find('li:eq(2)').find('.asus_1').show();
		}
		if (scrollTop >= 2660&&scrollTop<=3250) {
			$('#sidee_left ul').find('li:eq(3)').find('.asus_1').hide();
			$('#sidee_left ul').find('li:eq(3)').find('.asus_2').show();
			$('#sidee_left ul').find('li:eq(3)').find('.asus_2 a').css('color','#40AFFE');
		}else{
			$('#sidee_left ul').find('li:eq(3)').find('.asus_2').hide();
			$('#sidee_left ul').find('li:eq(3)').find('.asus_1').show();
		}
		if (scrollTop >= 3260&&scrollTop<=3800) {
			$('#sidee_left ul').find('li:eq(4)').find('.asus_1').hide();
			$('#sidee_left ul').find('li:eq(4)').find('.asus_2').show();
			$('#sidee_left ul').find('li:eq(4)').find('.asus_2 a').css('color','#40AFFE');
		}else{
			$('#sidee_left ul').find('li:eq(4)').find('.asus_2').hide();
			$('#sidee_left ul').find('li:eq(4)').find('.asus_1').show();
		}
		if (scrollTop >= 3830&&scrollTop<=4480) {
			$('#sidee_left ul').find('li:eq(5)').find('.asus_1').hide();
			$('#sidee_left ul').find('li:eq(5)').find('.asus_2').show();
			$('#sidee_left ul').find('li:eq(5)').find('.asus_2 a').css('color','#40AFFE');
		}else{
			$('#sidee_left ul').find('li:eq(5)').find('.asus_2').hide();
			$('#sidee_left ul').find('li:eq(5)').find('.asus_1').show();
		}
		if (scrollTop >= 4500&&scrollTop<=5100) {
			$('#sidee_left ul').find('li:eq(6)').find('.asus_1').hide();
			$('#sidee_left ul').find('li:eq(6)').find('.asus_2').show();
			$('#sidee_left ul').find('li:eq(6)').find('.asus_2 a').css('color','#40AFFE');
		}else{
			$('#sidee_left ul').find('li:eq(6)').find('.asus_2').hide();
			$('#sidee_left ul').find('li:eq(6)').find('.asus_1').show();
		}
		if (scrollTop >= 5150&&scrollTop<=5400) {
			$('#sidee_left ul').find('li:eq(7)').find('.asus_1').hide();
			$('#sidee_left ul').find('li:eq(7)').find('.asus_2').show();
			$('#sidee_left ul').find('li:eq(7)').find('.asus_2 a').css('color','#40AFFE');
		}else{
			$('#sidee_left ul').find('li:eq(7)').find('.asus_2').hide();
			$('#sidee_left ul').find('li:eq(7)').find('.asus_1').show();
		}
		if (scrollTop >= 5450&&scrollTop<=6300) {
			$('#sidee_left ul').find('li:eq(8)').find('.asus_1').hide();
			$('#sidee_left ul').find('li:eq(8)').find('.asus_2').show();
			$('#sidee_left ul').find('li:eq(8)').find('.asus_2 a').css('color','#40AFFE');
		}else{
			$('#sidee_left ul').find('li:eq(8)').find('.asus_2').hide();
			$('#sidee_left ul').find('li:eq(8)').find('.asus_1').show();
		}
	})
	
	
	
})
