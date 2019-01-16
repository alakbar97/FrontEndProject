$(document).ready(function () {
   $(".money").click(function () {
      var Text1 = $(this).text();
      $(".mny").text(Text1);
   });
   $(".flag").click(function () {
      var Text1 = $(this).text();
      $(".flg").text(Text1);
   });
   $(window).scroll(function () {
      if ($(window).scrollTop()<150) {
          $(".uphead").css({"display":"none"})
      }
      else{
          $(".uphead").css({"display":"block"})
      }
  })
})