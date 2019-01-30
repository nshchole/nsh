// rwd_page.js

(function($){
  var winW = $(window).width();

  var ViewSize = function(w){
    e.preventDefault();
    var nowW = $(window).width();
    if (winW !== nowW){
      location.reload();
    }  
    var
    size.text(nowW);
  };

  $(window).on('resize',ViewSize);
    var nowW = $(window).width();
    var afterDevice = Device(nowW);

    if(beforeDevice !== afterDevice){
      location.reload();
    }
  });  

})(jQuery);