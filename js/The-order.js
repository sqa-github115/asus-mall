$(function () {
	//header_main 下滑
	$('.menu li').hover(function() {
		$(this).find('.list').show();
	}, function() {
		$(this).find('.list').hide();
	});
	
	
	//弹出添加
	$('.address').click(function () {
		$(this).siblings('.add-information').stop().show();
		
	})
	
	//取消
	$('.cancel').click(function () {
		$(this).parents('.add-information').stop().hide();
	})
	
	//确定
	var Obox = $('.creat-box');
	$('.determine').click(function () {
		var name = $('.name').val().trim();
		var postcode = $('.postcode').val().trim();
		var province = $('.province').val().trim();
		var city = $('.city').val().trim();
		var area = $('.area').val().trim();
		var address = $('.details-address').val().trim();
		var phone = $('.consignee-phone').val().trim();
		var telephone = $('.fixed-telephone').val().trim();
		
		var ipt = $('.add-information').find('input').val();
		// if (!ipt) {
		// 	alert("不能为空");
		// 	return;
		// }
		
		
		var $box = $('<div class="creat">'+
		'<p class="nam">'+name+'</p><p class="pho">'+phone+'</p>'+
		'<p class="fix-pho">'+telephone+'</p>'+
		'<span class="province1">'+province +'</span><span class="city1">'+city+'</span><span class="area1">'+area +'</span>'+
		'<span class="postcode1">(邮编：<i>'+postcode+'</i>)</span><p class="sing"><span class="add">编辑</span>'+
		'<span class="san2">删除</span></p></div>');
		
		Obox.append($box);
		//点击后消失 清空input
		$(this).parents('.add-information').stop().hide();
		$(this).parents('.add-information').find('input').val('');
		
	});
	
	
	//删除
	$('.creat-box').on('click','.san2',function () {
		
		$(this).parents('.creat').remove();
	})
	
	//编辑
	var index;
	$('.creat-box').on('click','.add',function () {
		$('.add-information').stop().show();
		index = $(this).parents('.creat').index();
		// console.log(index);
		// console.log($('.creat-box').find('.creat').eq(index));
		var Ocreat = $(this).parents('.creat');
		$('.name').val(Ocreat.find('.nam').text());
		$('.postcode').val(Ocreat.find('.postcode1').find('i').text());
		$('.province').val(Ocreat.find('.province1').text());
		$('.city').val(Ocreat.find('.city1').text());
		$('.area').val(Ocreat.find('.area1').text());
		$('.consignee-phone').val(Ocreat.find('.fix-pho').text());
		// $('.fixed-telephone').val(Ocreat.find('.fix-pho'))
		
		$('.determine').stop().hide();
		$('.determine1').stop().show();
	})
	//确定修改
	$('.determine1').click(function () {
		var Ocreat = $('.creat-box').find('.creat').eq(index);
		
		console.log(Ocreat.eq());
		Ocreat.find('.nam').text($('.name').val());
		Ocreat.find('.pho').text($('.consignee-phone').val());
		// Ocreat.find('.fix-pho').text($('.fixed-telephone').val());
		Ocreat.find('.province1').text($('.province').val());
		Ocreat.find('.city1').text($('.city').val());
		Ocreat.find('.area1').text($('.area').val());
		Ocreat.find('.postcode1').find('i').text($('.postcode').val());
		
		$('.add-information').stop().hide();
	})
	
	
	
	
	$('.options-list input:checkbox').click(function () {
		var isChecked = true;
		if (isChecked) {
			$(this).parent().siblings().find('input:checkbox').prop('checked',!isChecked);
		} 
		// 
	})	
	
	
	
})