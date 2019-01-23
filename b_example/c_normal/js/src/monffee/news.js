// news.js
(function ($) {
  var news = $('.news');
  var newsCon = news.children('.container');
  // var newsList = $('.news_list');
  var newsList = '<div class="news_list"><a href="#"><div class="img_list"></div><dl><dt>title</dt><dd>content</dd></dl></a></div>';


  // 링크,  사진, 제목, 내용
  var imgUrl = "../../img/img/new_menu/";
var newsArray = '';
// load() - 서버가 구동되어야 실행 할 수 있다. (동기식 -직렬 , 비동기식 -병렬, 부분동기화)

var jsonDataUrl = "../../data/newsArray.json";
var newsArray = $.ajax({type:'get', async:false, url:jsonDataUrl}).responseJSON;


  // newsCon.append(newsList);
  var i = 0, list;
  var AppendListMenu = function(i){
    newsCon.append(newsList);

    list = $('.news_list').eq(i);
    list.find('a').attr({'href': newsArray[i].link});
    list.find('.img_list').css({ 'backgroundImage': 'url(' + imgUrl + newsArray[i].pic + ')'});
    list.find('dt').text( newsArray[i].tit );
    list.find('dd').text( newsArray[i].con );
  };

  for(; i < newsArray.length ; i += 1){
    AppendListMenu(i);
  }

})(jQuery);