$('body').addClass("bodyBackground");

$("#btn1").click(function () {
    $("#btn1").hide();
    $(".texte").text("C'est la crise, tout augmente même ton âge!!")
    $("#btn2").show();
});

$("#btn2").click(function () {
    $("#btn2").hide();
    $(".texte").text(" Bois pas trop")
    $("#btn3").show();
});

$("#btn3").click(function () {
    $("#btn3").hide();
    $(".texte").text("SURPRISE")
    $('body').addClass('newBack');

});


