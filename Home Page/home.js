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
})
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
})
function openMovie(evt, movieName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(movieName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();