define(['jquery'], function($) {
	function Slide(opts) {
		this.opts = $.extend({}, Slide.OPTIONS, opts);
		this._init();
		var that = this;
		setInterval(function() {
			that._change("NEXT");
		}, this.opts.speed);
		if(!this.opts.enablebtns) {
			$(".slide-last, .slide-next").hide();
		} else {
			$(".slide-last").on("click", function() {
				if(!$(".slide-box").is(":animated")) {
					that._change("LAST");
				};
				return;
			});
			$(".slide-next").on("click", function() {
				if(!$(".slide-box").is(":animated")) {
					that._change("NEXT");
				};
				return;
			});
		}
	};
	Slide.prototype._init = function() {
		var items = '<a class="slide-items">' +
			'<div class="slide-box slide-active" style="background: url(' + this.opts.imgs[0] + ') no-repeat;"></div>' +
			'</a>';
		var indexs = '<span class="active"></span>';
		for(var i = 1; i < this.opts.imgs.length; i++) {
			items += '<a class="slide-items">' +
				'<div class="slide-box" style="background: url(' + this.opts.imgs[i] + ') no-repeat"></div>' +
				'</a>';
			indexs += '<span></span>'
		};
		$(items).appendTo($(".slide-content"));
		$(indexs).appendTo($(".slide-index"));
	};
	Slide.prototype._change = function(arrow) {
		var activeIndex = $(".slide-index span.active").index();
		if(arrow === "NEXT") {
			if(activeIndex === this.opts.imgs.length - 1) {
				activeIndex = -1;
			}
			$(".slide-index span:eq(" + (activeIndex + 1) + ")").addClass("active").siblings().removeClass("active");
			$(".slide-box").removeClass("slide-active");
			$(".slide-box:eq(" + (activeIndex + 1) + ")").addClass("slide-active");
		} else {
			if(activeIndex === 0) {
				activeIndex = this.opts.imgs.length;
			}
			$(".slide-index span:eq(" + (activeIndex - 1) + ")").addClass("active").siblings().removeClass("active");
			$(".slide-box").removeClass("slide-active");
			$(".slide-box:eq(" + (activeIndex - 1) + ")").addClass("slide-active");
		};
	};
	Slide.OPTIONS = {
		imgs: [],
		speed: 2000,
		enablebtns: true
	};
	return {
		Slide: Slide
	}
})