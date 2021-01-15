$(function() {

	//cookie
	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			var arrC = c.split("=");
			if (arrC[0] == cname) {
				return arrC[1];
			}
		}
		return "";
	}
	// 1.页面加载完成，获取cookie中的cart数据
	var cart = getCookie('cart');
	if (cart) {
		cart = JSON.parse(cart);
	} else {
		cart = [];
	}
	// 2.渲染数据
	cart.forEach(function(item, index) {
		var $item = $('<ul class="data-affair clearfix">' +
			'<li class="ipt cd1"><input type="checkbox"></li>' +
			'<li class="card-goods cd2"><div class="p-pic"><img src="' + item.photo + '" >' +
			'</div><div class="p-title">' + item.name + '</div></li>' +
			'<li class="card-price cd3">￥' + item.price + '</li>' +
			'<li class="card-num cd4"><button type="button" class="bton1">-</button>' +
			'<input type="text" readonly="readonly" value="1"><button type="button" class="bton2">+</button></li>' +
			'<li class="card-discounts cd5">￥0</li>' +
			'<li class="card-points cd6">' + item.price + '</li>' +
			'<li class="card-money cd7">' + item.price + '</li>' +
			'<li class="card-action cd8"><img src="./img/叉号.png" ></li></ul>');
		$('.card-data').append($item);
	});

	/* ------------------------------------------------------------------------------------------------ */



	//header_main 下滑
	$('.menu .menu_item').hover(function() {
		$(this).find('.list').show();
	}, function() {
		$(this).find('.list').hide();
	});



	$('.card-data').on('click', '.card-action img', function(e) {
		$(this).parent().parent().remove();
		sum();
	})


	// 全选checkbox
	var Ocard = $('.card-data');
	$("#checkAll").click(function() {
		var isChecked = $(this).prop("checked");
		Ocard.find("input:checkbox").prop("checked", isChecked);
		//改变下面
		var checked = $(".card-data .data-affair input:checked").length;
		sum()

	});
	
	// card-data中的checkbox
	Ocard.on('click', 'input:checkbox', function() {
		var data = Ocard.find("input:checkbox").length;
		// console.log($(this).parents().find('.data-affair').find('input:checkbox'));
		var checked = $(".card-data .data-affair input:checked").length;
		// $('.settlement').find('p').find('.ss1').text(checked);
		console.log(checked);
		$("#checkAll").prop("checked", checked == data);
		sum();
	


	});



	/* -------------------------------------------------------------------------------- */
	//++

	$('.data-affair .bton2').click(function() {
		console.log($(this));
		number = $(this).siblings('input').val();
		number++;
		//获取价格
		var prices = $(this).parents('.card-num').siblings('.card-price').text().trim().slice(1);
		console.log(prices);
		//积分 - 小计
		var integral = $(this).parents('.card-num').siblings('.card-points');
		var total = $(this).parents('.card-num').siblings('.card-money');

		integral.text(number * prices);
		total.text(number * prices);
		$(this).siblings('input').val(number++);

		sum()
	});
	//--
	$('.data-affair .bton1').click(function() {
		number = $(this).siblings('input').val();
		if (number > 1) {
			number--;
		}
		//获取价格
		var prices = $(this).parents('.card-num').siblings('.card-price').text().trim().slice(1);
		console.log(prices);
		//积分 - 小计
		var integral = $(this).parents('.card-num').siblings('.card-points');
		var total = $(this).parents('.card-num').siblings('.card-money');

		integral.text(number * prices);
		total.text(number * prices);
		$(this).siblings('input').val(number--);
		sum()
	});
	
	//计算总金额
	function sum() {
		var total = 0;
		var suliang= 0;
		$('.card-data ul').each(function() {
			// console.log($(this).find('.ipt input').prop("checked"));
			var flag = $(this).find('.ipt input').prop("checked");
			if (flag) {
				var num = parseInt($(this).find('.card-num input').val()) ;
				var num1 = $(this).find('.card-price').text().trim().slice(1);
				total = total + num * num1;
				suliang += num;
			}

		});
		$('.settlement .calculate .ss2').text('￥' + total);
		$('.settlement').find('p').find('.ss1').text(suliang);
	}
	
	var len = $('.card-data').find('ul').length;
	// console.log(len);
	$('.ss').text(len);
	
})
