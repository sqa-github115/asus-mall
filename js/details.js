$(function() {
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


	var minute = 29;
	var second = 59;
	setInterval(function() {
		second--;
		if (second == 00 && minute == 00) {
			minute = 29;
			second = 59;
		}; //当分钟和秒钟都为00时，重新给值
		if (second == 00) {
			second = 59;
			minute--;
			if (minute < 10) minute = "0" + minute;
		}; //当秒钟为00时，秒数重新给值
		if (second < 10) second = "0" + second;
		$(".minute").text(minute);
		$(".second").text(second);
	}, 1000);


	//右侧栏
	$(window).scroll(function() {
		var scrollTop = $(document).scrollTop();
		// console.log(scrollTop);
		if (scrollTop >= 400) {
			$('#side_right').stop(true).fadeIn();
		} else {
			$('#side_right').stop(true).fadeOut();
		}
		if (scrollTop >= 1500) {
			$('.pageUp').stop(true).show();
		} else {
			$('.pageUp').stop(true).hide();
		}
	})

	$(".rigth_group").hover(function() {
		$(this).find('a').find('img').eq(0).stop().hide();
		$(this).find('a').find('img').eq(1).stop().show();
		$(this).find('.rigth_appear').css('transform', 'translate(50px,0)').stop().fadeIn(1000);
	}, function() {
		$(this).find('a').find('img').eq(1).stop().hide();
		$(this).find('a').find('img').eq(0).stop().show();
		$(this).find('.rigth_appear').stop().fadeOut(1000);
	})





})
