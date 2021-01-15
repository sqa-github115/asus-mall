$(function() {
	//header_main 下滑
	$('.menu li').hover(function() {
		$(this).find('.list').show();
	}, function() {
		$(this).find('.list').hide();
	});

	//选择
	$('.options').hover(function() {
		$(this).find('.menu-drop-arrow').css('background-position', '4px -30px');
		$(this).find('.menu-drop-main').stop().fadeIn(1000).css({
			border: '1px solid blue',
			zIndex: 9
		});
		$(this).find('span').css({
			border: '0.5px solid blue',
		});
	}, function() {
		$(this).find('.menu-drop-main').stop().fadeOut(1000).css({
			border: '1px solid ##ddd',
			zIndex: 0
		});;
		$(this).find('span').css({
			border: '0.5px solid #D9D9D9',
		});
		$(this).find('.menu-drop-arrow').css('background-position', '4px 5px');
	})


	//显示更多
	var flag = true;
	$('.filter-more').click(function() {
		if (flag) {
			$('#disappear').stop().show();
			$(this).find('span').html('收起筛选项');
			$(this).find('i').css('transform', 'rotate(270deg)')
			flag = false;
		} else {
			$('#disappear').stop().hide();
			$(this).find('span').html('显示更多筛选项');
			$(this).find('i').css('transform', 'rotate(90deg)')
			flag = true;

		}
	})

	//排序
	//价格
	var is = true;
	$('.commodity-sort .sort1').click(function() {
		var $arr = $('.product-list ul li~li').toArray();
		// console.log($arr);
		// $('.commodity-sort .sort1').find('span').eq(0).stop().hide().siblings().stop().show();
		if (is) {
			$arr.sort(function(a, b) {
				var age_a = parseInt($(a).find(".product-pic").find('.information').find('.notebook-price').text().slice(1));
				var age_b = parseInt($(b).find(".product-pic").find('.information').find('.notebook-price').text().slice(1));
				return age_a - age_b;
			});
			$('.product-list ul').append($arr);
			$('.commodity-sort .sort1').find('span').css({
				transform: 'rotate(180deg)',
				display: 'inline-block'
			});
			// console.log($('.commodity-sort .sort1').find('span'));
			is = false;

		} else {
			$arr.sort(function(a, b) {
				var age_a = parseInt($(a).find(".product-pic").find('.information').find('.notebook-price').text().slice(1));
				var age_b = parseInt($(b).find(".product-pic").find('.information').find('.notebook-price').text().slice(1));
				return age_b - age_a;
			});
			$('.product-list ul').append($arr);
			$('.commodity-sort .sort1').find('span').css({
				transform: 'rotate(0deg)',
				display: 'inline-block'
			});
			is = true;
		}

	});

	//评论
	var k = true;
	$('.commodity-sort .sort2').click(function() {
		var $arr = $('.product-list ul li~li').toArray();
		if (k) {
			$arr.sort(function(a, b) {
				var age_a = parseInt($(a).find('.behavior').find('.behavior-btns').find('.evaluation')
					.text().trim().slice(0, 3));
				var age_b = parseInt($(b).find('.behavior').find('.behavior-btns').find('.evaluation')
					.text().trim().slice(0, 3));
				return age_a - age_b;
			});
			$('.product-list ul').append($arr);
			$('.commodity-sort .sort2').find('span').css({
				transform: 'rotate(180deg)',
				display: 'inline-block'
			});
			k = false;
		} else {
			$arr.sort(function(a, b) {
				var age_a = parseInt($(a).find('.behavior').find('.behavior-btns').find('.evaluation')
					.text().trim().slice(0, 3));
				var age_b = parseInt($(b).find('.behavior').find('.behavior-btns').find('.evaluation')
					.text().trim().slice(0, 3));
				return age_b - age_a;
			});
			$('.product-list ul').append($arr);
			$('.commodity-sort .sort2').find('span').css({
				transform: 'rotate(0deg)',
				display: 'inline-block'
			});
			k = true;
		}
	})



	//cook数据
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

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

	//cook获取并存储
	$('.add_cart').click(function() {
		// 获取商品数据-goods
		// var id = $(this).parents('li').data('id');
		var name = $(this).parents('.product-pic').find('.information').find('dd').find('p').eq(0).text().trim();
		var photo = $(this).parents('.product-pic').find('.picture').find('a').find('img').attr('src');
		var price = $(this).parents('.product-pic').find('.information').find('span').eq(0).text().slice(1).trim();
		var goods = {
			name: name,
			photo: photo,
			price: price,
			num: 1,
		}
		console.log(goods);
		// 1.提取cookie中购物车数组
		var cart = getCookie('cart');
		if (cart) {
			// 2.JSON转换成数组
			cart = JSON.parse(cart);
		} else {
			cart = [];
		}
		cart.push(goods);
		console.log(cart);
		// 3.在cart查找此商品，
		// var i = cart.findIndex(function(item, index) { return item.id == id; });
		// if (i >= 0) {
		// 	// 如果有，数量+1
		// 	cart[i].num += 1;
		// } else {
		// 	// 如果无，push进数组
		// 	cart.push(goods);
		// }
		// 4.转换成JSON
		cart = JSON.stringify(cart);
		// 5.存储至cookie
		setCookie('cart', cart);
	});

	//弹窗
	$('.add_cart').click(function() {
		index = layer.open({
			type: 1,
			area: ['608px', '245px'],
			content: $('#lay')
		});
	});
	$('.fa-times').click(function() {
		layer.close(index);
	});
	$('.agin').click(function() {
		layer.close(index);
	});

	//右侧栏
	$(window).scroll(function() {
		var scrollTop = $(document).scrollTop();
		// console.log(scrollTop);
		if (scrollTop >= 400) {
			$('#side_right').stop(true).fadeIn();
		} else {
			$('#side_right').stop(true).fadeOut();
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
