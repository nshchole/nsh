(function($){
  //분리된 html 문서를 불러와서 합치기
  // * 기준 html 문서를 기준으로  불러와야 한다.
  // * 반드시 서버가 동작해야 한다.

  var wrap = $('#wrap');
  var allUrl = './all/';
  // 1. header#headBox 생성 및 header.html 불러오기
  wrap.prepend('<header id="headBox"></header>');
  var headBox = $('#headBox');

  headBox.load(allUrl + 'header.html');

// 2. section#adBanner를 생성하여 불러오기
headBox.after('<section id="adBanner"></section>');
var adBanner = $('#adBanner');
var mainUrl = './main/';
adBanner.load(mainUrl + 'adBanner.html');

// new.html 생성하기
 var bestNews = $('#bestNews')
 bestNews.children('h2').after('<div class="news"></div>');
 // $('.news').load(link('news', mainUrl));
 $('.news').load( mainUrl + 'news.html');
 
})(jQuery);