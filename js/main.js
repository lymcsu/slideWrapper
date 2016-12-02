require.config({
	paths:{
		'jquery': 'jquery-1.9.1'
	}
});
requirejs(['jquery','slide'], function ($, slide) {
	var slider = new slide.Slide({
		imgs: ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"]
	});
});
