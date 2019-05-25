$(".list2 li:last").css("margin-right", 0);
	$(".list4 img:first").css("margin-right", "8px");
	$(".footer ul a:first-child").css("font-weight", "bolder");
	var t;
	// 选购女士商品下拉列表
	$(function() {
		$(".header1 ").mouseenter(function() {
			$(".header1-contain1").show();
		})

		$(".header1 ").mouseleave(function() {
			t = setTimeout(function() {
				$(".header1-contain1").hide();
			}, 300)
		})
		$(".header1-contain1").mouseenter(function() {
			clearTimeout(t);
		})
		$(".header1-contain1").mouseleave(function() {
			$(".header1-contain1").hide();
		})
	})

	//选择国家
	$(function() {
		$(".header2").mouseenter(function() {
			$(".header2-contain2").show();
		})
		$(".header2").mouseleave(function() {
			t = setTimeout(function() {
				$(".header2-contain2").hide();
			}, 300)
		})
		$(".header2-contain2").mouseenter(function() {
			clearTimeout(t);
		})
		$(".header2-contain2").mouseleave(function() {
			$(".header2-contain2").hide();
		})
		//给国家列表ul添加点击事件
		$(".header2-contain2").click(function(e) {
			console.log("ok");
			var e = e || event;
			$(".header2-contain2").hide();
			console.log($(".header2 a"));
			if (e.target.tagName == "LI") {
				$(".header2 a").html(e.target.innerText);
			}
		})
	})
	// 语言列表
	$(function() {
		$(".header3-contain3 :eq(0)").css({ //给第一个和第五个元素添加样式
			"color": "black",
			"font-weight": "bolder"
		})
		$(".header3-contain3 :eq(4)").css({
			"color": "black",
			"font-weight": "bolder"
		})
		//添加划入划出事件
		$(".header3 ").mouseenter(function() {
			$(".header3-contain3").show();
		})
		var t;
		$(".header3 ").mouseleave(function() {
			t = setTimeout(function() {
				$(".header3-contain3").hide();
			}, 300)
		})
		$(".header3-contain3").mouseenter(function() {
			clearTimeout(t);
		})
		$(".header3-contain3").mouseleave(function() {
			$(".header3-contain3").hide();
		})

	})
	//货币
	$(function() {
		$(".header4 div ul :eq(0)").css({
			"color": "black",
			"font-weight": "bolder"
		})

		//添加划入划出事件
		$(".header4").mouseenter(function() {
			$(".header4 div").show();
		})
		$(".header4 ").mouseleave(function() {
			t = setTimeout(function() {
				$(".header4 div").hide();
			}, 300)
		})
		$(".header4 div").mouseenter(function() {
			clearTimeout(t);
		})
		$(".header4 div").mouseleave(function() {
			$(".header4 div").hide();
		})
		//给列表ul添加点击事件
		$(".header4 div").click(function(e) {
			var e = e || event;
			$(".header4 div").hide();
			if (e.target.tagName == "LI") {
				$(".header4 a").html(e.target.innerText);
			}
		})

	})
	// 登录注册
	$(function() {
		$(".header5").mouseenter(function() {
			$(".header5-contain5").show();
		})
		$(".header5").mouseleave(function() {
			t = setTimeout(function() {
				$(".header5-contain5").hide();
			}, 300)
		})
		$(".header5-contain5").mouseenter(function() {
			clearTimeout(t);
		})
		$(".header5-contain5").mouseleave(function() {
			$(".header5-contain5").hide();
		}) 
	})

	