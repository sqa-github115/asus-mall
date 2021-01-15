$(function() {

	//切换
	$('.sign-tltle .a').click(function() {
		var index = $(this).index();

		$('.xx .k').eq(index).stop().show().siblings().stop().hide();

	})


	$('.msg-pic').click(function() {
		$('.login-tlt').stop().hide();
		$('.login-tlt1').stop().show();
	})
	$('.switch-pic').click(function() {
		$('.login-tlt').stop().show();
		$('.login-tlt1').stop().hide();
	})







	//随机验证码
	$('.card-box').click(function() {
		function randomNum(start, end) {
			return parseInt(Math.random() * (end - start + 1) + start);
		}

		function cd(n) {
			var code = '';
			while (n--) {
				var x = '';
				var randomC = randomNum(1, 3);
				var randN = randomNum(48, 57);
				var randB = randomNum(65, 90);
				var randC = randomNum(97, 122);
				if (randomC == 1) {
					x = String.fromCharCode(randN);
				}
				if (randomC == 2) {
					x = String.fromCharCode(randB);
				}
				if (randomC == 3) {
					x = String.fromCharCode(randC);
				}
				code += x;
			}
			$('#card').val(code);
		}
		cd(4);
	});

	//验证
	$('.login').click(function() {
		var oIpt = $('#tx').val();
		var str = oIpt;
		var oIpt1 = $('#tx1').val();
		var str1 = oIpt1;
		var oCard = $('#card').val();
		var str2 = oCard;

		console.log($('#confirm').is(':checked'));

		if ($('#confirm').is(':checked') == true) {
			if (/^1((3|5|8|7){1}\d{1})\d{8}$/.test(str)) {
				$('.phon-card').text('');
			} else {
				$('.phon-card').text('请输入正确手机号').css('color', '#00bbff');
			}

			if (str1 == str2) {
				$('.hint').text('');
			} else {
				$('.hint').text('请输入正确验证码').css('color', '#00bbff');
			}

			if (/^1((3|5|8|7){1}\d{1})\d{8}$/.test(str) == true && str1 == str2) {
				$(window).attr('location', 'http://127.0.0.1:8848/aus/index.html');
			}

		} else {
			alert('请阅读使用条款')
		}





	})




})
