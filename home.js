$(document).ready(function () {
    $(".dropdown-item").click(function(){
    var Text1= $(this).text();
       $(".btn").text(Text1);
      });
})