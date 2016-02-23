var img = $('img')
var main = function(){
  img.click(function(){
    if(img.hasClass('fa-spin-slow')){
      img.removeClass('fa-spin-slow');
    } else{
      img.addClass('fa-spin-slow')
    }
  });
};
$(document).ready(main);
