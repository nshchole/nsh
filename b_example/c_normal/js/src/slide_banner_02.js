// slide_banner_02.js

(function($) {
	console.log('!!!!!!');
// ** jquery 이용하여 슬라이드 광고배너 만들기
// ---- 기본 선택자 변수로 설정
 	var viewOuter = $('.view_banner_outer');

//	viewOuter.animate({marginLeft:-200+'%'});
 	var viewIndi = $('.view_indicator').find('li');

// step_01 인디케이터 버튼을 클릭하여 해당 순번의 광고로 이동하게 만들기 (STEP4에서 다시 설정)
/*	viewIndi.children('a').on('focus', function(e) {
		e.preventDefault();
		var _thisP = $(this).parent();
		var _thisI = _thisP.index(); // index() 해당 순서위치를 파악하는 기능
		var _index = _thisI * 100;

		viewIndi.removeClass('action');
		viewIndi.eq(_thisI).addClass('action');

		console.log(_thisI);
		viewOuter.animate({marginLeft:-_index + '%'});
	});
*/

// step_02 오른쪽 버튼 클릭하여 오른쪽 광고로 이동하게 만들기 (STEP4에서 다시 설정)
/*
	var next = $('.next_btn');
		var slideI = 0;
		next.on('click', function(e){
		e.preventDefault();

		slideI += 1; // 1씩 클릭하면  var _index = slideI * 100; 를 적용
		var _index = slideI * 100;
		viewOuter.animate({marginLeft:-_index + '%'});
		});
*/

// step_03 왼쪽 버튼 클릭하여 이전 광고로 이동하게 만들기
/*
		var prev = $('.prev_btn');
		prev.on('click', function(e) {
		a.preventDefault();

		slideI -= 1;
		var _index = slideI * 100;
		viewOuter.animate({marginLeft:-_index + '%'});
		});
*/


// step_04 해당광고의 끝으로 이동하면 버튼 사라지게 만들기

		var next = $('.next_btn');
		var prev = $('.prev_btn');
		var slideI = 0;
		var liLeng = viewIndi.length-1; //length는 갯수를 파악하는 것 0이면 없다는 의미

		next.on('click', function(e){
		e.preventDefault();
		slideI += 1;
		if(slideI > liLeng) {slideI = liLeng}
		var _index = slideI * 100;
		viewOuter.animate({marginLeft:-_index + '%'});
		viewIndi.removeClass('action');
		viewIndi.eq(_thisI).addClass('action');
	});

		prev.on('click', function(e){
		e.preventDefault();
		slideI -= 1;
		if(slideI < 0) {slide = 0; }
		var _index = slideI * 100;
		viewOuter.animate({marginLeft:-_index + '%'});
		viewIndi.removeClass('action');
		viewIndi.eq(_thisI).addClass('action');
	});


		viewIndi.children('a').on('focus', function(e) {
		e.preventDefault();
		var _thisP = $(this).parent();
		slideI = _thisP.index(); // index() 해당 순서위치를 파악하는 기능
		var _index = slideI * 100;
		viewOuter.animate({marginLeft:-_index + '%'});
		viewIndi.removeClass('action');
		viewIndi.eq(_thisI).addClass('action');
	});


// step_05 인디케이터와 순서값을 연동하여 처리되게 만들기

})(jQuery);