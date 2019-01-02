// jquery_on_04.js

(function($) {

  var num = 0;
  var winH = $(window).height();
  // console.log(winH);
  $(window).scrollTop(0);

  // 각 div 요소의 offset 값을 확인
  var divOffset = [];
  var wrapChild = $('#wrap').children('div');


  // divOffset[0] = wrapChild.eq(0).offset().top;
  // divOffset[1] = wrapChild.eq(1).offset().top;
  // divOffset[2] = wrapChild.eq(2).offset().top; // 반복작업?


  var i = 0;
  for(; i<wrapChild.length; i++){
    divOffset[i] = wrapChild.eq(i).offset().top;
  };
  // console.log(divOffset);

  

 //==============================
  $(window).on('mousewheel DOMMouseScroll', function(e){
    // firefox를 제외한 (mousewheel 기능을 가진) 브라우저는 wheelDelta값을 가지고 있다.
    // console.log(e.originalEvent.wheelDelta); // 120, -120 수치를 가짐.

    // firefox 브라우저에서는 detail. 수치값을 가지고 있다.
    // console.log(e.originalEvent.detail);

    var evt = e.originalEvent;
    var delta = '';

    if(evt.detail !== 0){
      detail = evt.detail * -40;
    }else{
      delta = evt.wheelDelta;
    }

    if(delta < 0 && num < wrapChild.length){
      num += 1;
    }else if(delta > 0 && num > 0){
      num -= 1;
    }

      console.log(divOffset[num]);
        $('html,body').animate({scrollTop: divOffset[num] });

  });

})(jQuery);
