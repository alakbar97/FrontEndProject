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
        if ($(window).scrollTop() < 150) {
            $(".uphead").css({
                "display": "none"
            })
        } else {
            $(".uphead").css({
                "display": "block"
            })
        }
    })
    $(".lefter").click(function () {
        $(".reng").toggleClass("sidenav");
        $(".lefter").toggleClass("colors");
    })
    $("#panel a").click(function () {
        var Vary=$(this).text();
        $(".vary").text(Vary);
    })
    $("#red").click(function () {
        $(".firstline").removeClass("bg-dark bg-success bg-warning").addClass("bg-danger")
        $(".mny").removeClass("btn-dark btn-success btn-warning").addClass("btn-danger")
        $(".flg").removeClass("btn-dark btn-success btn-warning").addClass("btn-danger")
        $(".Account").removeClass("btn-dark btn-success btn-warning").addClass("btn-danger")
        $(".secpart").removeClass("bg-dark bg-success bg-warning").addClass("bg-danger")
        $(".shop").removeClass("btn-dark btn-success btn-warning").addClass("btn-danger")
        $(".before").removeClass("bg-dark bg-success bg-warning").addClass("bg-danger")
        $(".after").removeClass("bg-dark bg-success bg-warning").addClass("bg-danger")
        $(".now").removeClass("btn-dark btn-success btn-warning").addClass("btn-danger")
        $(".foot").removeClass("bg-dark bg-success bg-warning").addClass("bg-danger")
        $(".footer").removeClass("bg-dark bg-success bg-warning").addClass("bg-danger")
        $(".thFoot").removeClass("bg-dark bg-success bg-warning").addClass("bg-danger")
        $(".end").removeClass("bg-dark bg-success bg-warning").addClass("bg-danger")
    })
    $("#blue").click(function () {
        $(".firstline").removeClass("bg-danger bg-dark bg-success bg-warning").addClass("bg-primary")
        $(".mny").removeClass("btn-danger btn-dark btn-success btn-warning").addClass("btn-primary")
        $(".flg").removeClass("btn-danger btn-dark btn-success btn-warning").addClass("btn-primary")
        $(".Account").removeClass("btn-danger btn-dark btn-success btn-warning").addClass("btn-primary")
        $(".secpart").removeClass("bg-danger bg-dark bg-success bg-warning").addClass("bg-primary")
        $(".shop").removeClass("btn-danger btn-dark btn-success btn-warning").addClass("btn-primary")
        $(".before").removeClass("bg-danger bg-dark bg-success bg-warning").addClass("bg-primary")
        $(".after").removeClass("bg-danger bg-dark bg-success bg-warning").addClass("bg-primary")
        $(".now").removeClass("btn-danger btn-dark btn-success btn-warning").addClass("btn-primary")
        $(".foot").removeClass("bg-danger bg-dark bg-success bg-warning").addClass("bg-primary")
        $(".footer").removeClass("bg-danger bg-dark bg-success bg-warning").addClass("bg-primary")
        $(".thFoot").removeClass("bg-danger bg-dark bg-success bg-warning").addClass("bg-primary")
        $(".end").removeClass("bg-danger bg-dark bg-success bg-warning").addClass("bg-primary")
    })
    $("#yellow").click(function () {
        $(".firstline").removeClass("bg-danger bg-dark bg-success").addClass("bg-warning")
        $(".mny").removeClass("btn-danger btn-dark btn-success").addClass("btn-warning")
        $(".flg").removeClass("btn-danger btn-dark btn-success").addClass("btn-warning")
        $(".Account").removeClass("btn-danger btn-dark btn-success").addClass("btn-warning")
        $(".secpart").removeClass("bg-danger bg-dark bg-success").addClass("bg-warning")
        $(".shop").removeClass("btn-danger btn-dark btn-success").addClass("btn-warning")
        $(".before").removeClass("bg-danger bg-darkbg-dark bg-success").addClass("bg-warning")
        $(".after").removeClass("bg-danger bg-dark bg-success").addClass("bg-warning")
        $(".now").removeClass("btn-danger btn-dark btn-success").addClass("btn-warning")
        $(".foot").removeClass("bg-danger bg-dark bg-success").addClass("bg-warning")
        $(".footer").removeClass("bg-danger bg-dark bg-success").addClass("bg-warning")
        $(".thFoot").removeClass("bg-danger bg-dark bg-success").addClass("bg-warning")
        $(".end").removeClass("bg-danger bg-dark bg-success").addClass("bg-warning")
    })
    $("#gray").click(function () {
        $(".firstline").removeClass("bg-danger bg-success bg-warning").addClass("bg-dark")
        $(".mny").removeClass("btn-danger btn-success btn-warning").addClass("btn-dark")
        $(".flg").removeClass("btn-danger btn-success btn-warning").addClass("btn-dark")
        $(".Account").removeClass("btn-danger btn-success btn-warning").addClass("btn-dark")
        $(".secpart").removeClass("bg-danger bg-success bg-warning").addClass("bg-dark")
        $(".shop").removeClass("btn-danger btn-success btn-warning").addClass("btn-dark")
        $(".before").removeClass("bg-danger bg-success bg-warning").addClass("bg-dark")
        $(".after").removeClass("bg-danger bg-success bg-warning").addClass("bg-dark")
        $(".now").removeClass("btn-danger btn-success btn-warning").addClass("btn-dark")
        $(".foot").removeClass("bg-danger bg-success bg-warning").addClass("bg-dark")
        $(".footer").removeClass("bg-danger bg-success bg-warning").addClass("bg-dark")
        $(".thFoot").removeClass("bg-danger bg-success bg-warning").addClass("bg-dark")
        $(".end").removeClass("bg-danger bg-success bg-warning").addClass("bg-dark")
    })
    $(".sort").click(function() {
        var Text2=$(this).text();
        $(".sorting").text(Text2);
    })
    $(".showe").click(function() {
        var Text3=$(this).text();
        $(".showing").text(Text3);
    })
    var c = 0;
    $('.heart').on('click', function () {
        var count = parseInt($(this).data('click'), 10) || 0;
        count++;
        $(this).data('click', count);
        if (count == 1) {
            c++;
            alert("it is added your WishList");
            $(".zero").text(c);
        } else {
            alert("it is already added")
        }
        return false;

    });
    var cl = 0;
    $('.compress').on('click', function () {

        var count = parseInt($(this).data('click'), 10) || 0;
        count++;
        $(this).data('click', count);
        if (count == 1) {
            cl++;
            alert("it is added your COMPARE");
            $(".czero").text(cl);
        } else {
            alert("it is already added")
        }
        return false;

    });
    var l = 0;
    $('.shopp').on('click', function () {
        $(".badge-danger").css({"display":"block","width":"30px"})
        var count = parseInt($(this).data('click'), 10) || 0;
        count++;
        $(this).data('click', count);
        if (count == 1) {
            l++;
            alert("it is added your Cart");
            $(".badge-danger").text(l);
        } else {
            alert("it is already added")
        }
        return false;

    });
})
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
var slide = document.getElementById("Range");
var outputer = document.getElementById("demo2");
outputer.innerHTML = slide.value;

slide.oninput = function() {
  outputer.innerHTML = this.value;
}
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


  var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
}
  )}