// adBanner.js

(function($) {
  var banner = $('#adBanner');
  var viewOuter = banner.find('.view_outer');
  var viewBanner = viewOuter.find('ul');
  var viewBannerList = viewBanner.children('li');

  // adBanner 영역의 구성을 변경
  //  - 기존의 갯수에서 마지막 하나를 복제하여 앞에 배치 (css문서에서 nth-child로 배경이미지를 처리하면 안된다. 각각 이름을 부여해서 처리)
  var viewBannerLast = viewBannerList.eq(-1).clone(true); // '-1'은 마지막 배너 이미지
  viewBanner.prepend(viewBannerLast);  // viewBannerList.eq(0).before(viewBannerList); - 둘 중 하나 사용 (첫번째를 추천)

  // 갯수 다시 파악 (변경한 후에 다시 파악)
  viewBannerList = viewBanner.children('li');

  //  - 감싸는 영역의 크기를 갯수 * 100% 크기만큼으로 변경
  //  - 첫번째 보이는 요소는 첫 배너로 처리하기 위해 전체를 왼쪽으로 이동 (li 내용의 크기값 재수정)
  var len = viewBannerList.length;
  //console.log(len);
  viewBanner.css({ width: len * 100 + '%', marginLeft: -100 + '%',
                   position:'relative', top:0, left:0, transition:'left 500ms ease'});// 배너 하나의 크기만큼 밀어줌
  viewBannerList.css({ width: 100 / len + '%'});


  // ----------------------------------------------------------------------
  // 좌, 우 버튼을 클릭하던, 인디케이터를 클릭하던 공통의 기능을 하는 변수가 하나 필요하다!
  var showI = 0;
  var btnArea = banner.find('.arrow_btn');
  var nextBtn = btnArea.children('.next_btn');
  var prevBtn = btnArea.children('.prev_btn');
  var indicator = banner.find('indicator');
  var indiLi = indicator.find('li');
  var slideBanner = function(i){
    indiLi.removeClass('active');
    indiLi.eq(showI).addClass('active');
    viewBanner. css({left: i * -100 + '%'});
  };
  slideBanner(showI);

  // 좌,우 버튼 클릭시

      // nextBtn 클릭시 변수 showI에 1씩 더하는 가능 부여
      // 최대 숫자는 전체 갯수 -2 까지만 가능 

    nextBtn.on('click',function(e) {
      e.preventDefault();
      if (showI >= len-2){ showI = len-2;  }else{  showI += 1;  }
      console.log(showI)
      SlideBanner(showI);
    });

  // prevBtn 클릭시 변수 showI에 1씩 빼는 기능 부여
  // 최소 숫자 -1 까지만 가능
  /*  // 1차 기능처리

  prevBtn.on('click', function (e) {
    e.preventDefault();

    if(showI <= -1){
      showI = -1;
    }else{
      showI -= 1;
    }
    console.log(showI);
    slideBanner(showI);
  });
  */

      // 2차 기능처리
      prevBtn.on('click', function(e){
        e.preventDefault();
        if(showI <= 0){
          showI = -1;
          viewBanner. css({ left: showI * -100 + '%' });
          console.log(showI);    // 5로 가기 직전
          // 0.5초 뒤에 마지막 위치로 이동
          // setTimeout(function(){}, 500);

          setTimeout(function() {
            showI = len - 2;
            console.log(showI);
            viewBanner.css({ left: showI * -100 + '%', transition: 'none' }); // 5에서 넘어가는 것을 보여주지 말라고 none처리.

            setTimeout(function(){
              viewBanner.css({ transition: 'left 500ms ease' });
            },1);

          }, 500}; // 0.5초 뒤에 setTimeout~에서부터 수행하라


        }else{
          showI -= 1;
          slideBanner(showI);
        }
      });



  // 인디케이터

  // console.log (indiLi.length);

  indiLi.on('click', function(e) {
    e.preventDefault();
    showI = $(this).index();
    console.log (showI);

  indiLi.removeClass('active');
  indiLi.eq(showI).addClass('active');
  slideBanner(showI);

  });

  // 위 문제점 : 전체를 순환하는 기능을 만들어야한다.
      // 왼쪽버튼 클릭시 showI -= --> -1 이었던 아이를 leng-2의 수치로 변경하여, 해당위치로 이동하게 만들기


  // 덤 : 일정 시간마다 자동으로 순환하는 기능을 수행하게 만들자.



})(jQuery);