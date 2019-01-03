// gnbMenu_01.js


(function($){
  var gnb = $('#gnb').find('dl');
  var gnbDt = gnb.children('dt');
  var gnbDd = gnb.children('dd');

  // dt의 자식인 a에 클릭하면, 그 부모의 바로 뒤에 있는 dd를 보이게 해라
  // 1. dt의 자식인 a를클릭하면,
  gnbDt.children('a').on('click',function(e){
    e.preventDefault();
    // 2. 그 부모의 바로뒤에 있는 dd를 보이게 해라
    var nextDd = $(this).parent('dt').next('dd');
    gnbDd.stop(false, true).slideUp();
    nextDd.stop(false, true).slideDown();

    // 그런데, 내용중에 마지막 a가 blur 처리가 된다면, 해당 dd는 사라져라
    // 1.내용중에 마지막 a
    var ddLast = nextDd.find('a').eq(-1);
    // 2.blur 처리가 된다면
    ddLast.on('blur',function(){
    // 3.해당dd는 사라져라
      nextDd.slideUp();
    });
  });


  //[1]
  // 마지막 a요소에서 포커스가 빠져나간다면, 그 부모 dd를 사라지게 해라
    // 1. dt에서 자식인 a가 포커스가 빠져나간다면,
/*  gnbDd.find('a').eq(-1).on('blur', function(e){

    // 2. 그 조상 dd를 사라지게 해라
    var nextDd = $(this).parents('dd');
    nextDd.slideUp();sss
  });
*/

  //[2]
  // 각 dd의 마지막 a에 포커스가 빠져나가면 해당 dd를 사라지게 해라!
  // console.log( gnbDd );

  // 1. 각 dd의
  // $.each(gnbDd,function(index, data){
  //   //console.log( index, data );
  // });

  // gnbDd.forEach(function(data){
  //   console.log( index, data );
  // });

  // dl에 마우스가 빠져나간다면, 모든 dd를 사라지게 만들어라!
  $('#headBox').on('mouseleave', function(e) {
    gnbDd.slideUp();
  });

})(jQuery);