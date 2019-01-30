// jsTest.js
(function($){
  // console.log('test');
  var loUl = $('.logo_img');
  var loLi = loUl.children('li');

  // step1:배너이미지 복제 / 영역사이즈 변경
  // step1-1:배너이미지 복제 
  var loLiLast = loLi.eq(-1).clone(true);
  loLiLast.prependTo(loUl);

  loLi = loUl.children('li');
  var len = loLi.length;
  // console.log(loLen);
  // step1-2:영역사이즈 변경
  loUl.css({width:len * 100 + '%', marginLeft:-100 + '%', position:'relative',left:'0'});
  loLi.css({width:100 / len + '%'});

  //step2:좌우버튼 클릭시
  var btn = $('.btn');
  var next = $('.next');
  var prev = $('.prev');
  var num = loLi.index();

  var btnAni = function(e){
    loUl.animate({left:num * -100 + '%'});
  };

  next.on('click',function(e){
    e.preventDefault();
    if(num >= len-2){
     loUl.css({left: 100 + '%'});
     num = 0;
     btnAni(num);
    }else{
     num += 1;
     btnAni(num);
    }
  });

  prev.on('click',function(e){
    e.preventDefault();
    if(num <= 0){
      num = -1;
      loUl.animate({left: num * -100 + '%'},
     function(){
      num = len-2;
     btnAni(num);
      loUl.css({left: num * -100 + '%'});
     }); 
    }else{
     num -= 1;
     btnAni(num);
    }
  });

  // step3:자동이동 설정
  var Go;
  var slideBox = $('.logo_brand');

  var moveSlide = function(){
    Go = setInterval(function(){
      next.trigger('click');
    },3000);
  };
  var stopSlide = function(){
    clearInterval(Go);
  };

  slideBox.on({'mouseenter':stopSlide,'mouseleave':moveSlide});


})(jQuery);
