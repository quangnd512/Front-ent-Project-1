$(document).ready(function () {
    $(".ti-list").click(function () {
        $(".list-responsive").fadeIn(200);
        $(".wapper").animate({
            opacity: '0.1'
        });
        $(".wapper").css("background", "rgba(51,51,51,0.55)");
    });
    $(".list-close").click(function () {
        $(".list-responsive").fadeOut(200);
        $(".wapper").animate({
            opacity: '1'
        });
        $(".wapper").css("background", "#fff");
    });
});