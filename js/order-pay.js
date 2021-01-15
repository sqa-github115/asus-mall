$(function () {
	//header_main 下滑
	$('.menu .menu_item').hover(function() {
		$(this).find('.list').show();
	}, function() {
		$(this).find('.list').hide();
	});
	
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
	
	
	$('.group input:checkbox').click(function () {
		var isChecked = true;
		if (isChecked) {
			$(this).parent().siblings().find('input:checkbox').prop('checked',!isChecked);
		} 
		
		
		
	})
	
	
})