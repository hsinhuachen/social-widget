$(function(){
	$(".widget-wrapper").addClass("fadein");
	$(".widget-fb").on("click", function(){
		if($("#popup-placement-line").hasClass("popup-slide-in")){
			$("#popup-placement-line").removeClass("popup-slide-in").addClass("popup-slide-out");
		}

		if($("#popup-placement").hasClass("popup-slide-in")){
			popup_close("#popup-placement");
		}else{
			$(".widget-tel, .widget-line").removeClass("button-slide").addClass("button-slide-out");

			popup_open("#popup-placement");
		}

		event.preventDefault();
	});

	$(".widget-line").on("click", function(){
		if($("#popup-placement-line").hasClass("popup-slide-in")){
			popup_close("#popup-placement-line")
		}else{
			$(".widget-tel").removeClass("button-slide").addClass("button-slide-out");

			popup_open("#popup-placement-line")
		}
		event.preventDefault();
	});

	$("#popup-placement").on("click", ".title-bar-icon-close",function(){
		popup_close("#popup-placement")

		event.preventDefault();
	});

	$("#popup-placement-line").on("click", ".title-bar-icon-close",function(){
		popup_close("#popup-placement-line")

		event.preventDefault();
	});
});

function popup_open(target){
	setTimeout(function(){
		$(target).removeClass("popup-slide-out").addClass("popup-slide-in");
	},200);
}

function popup_close(target){
	$(target).removeClass("popup-slide-in").addClass("popup-slide-out");

	setTimeout(function(){
		$(".button-slide-out").removeClass("button-slide-out").addClass("button-slide");
	},300);
}

