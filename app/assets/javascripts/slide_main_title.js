$(document).ready(function() {
    $(".contenitore_titoli").animate({
        scrollTop: $(".contenitore_titoli").height()
    }, 20000);
    setTimeout(function() {
        $('.contenitore_titoli').animate({
            scrollTop: 0
        }, 20000);
    }, 20000);
    setInterval(function() {

        $(".contenitore_titoli").animate({
            scrollTop: $(".contenitore_titoli").height()
        }, 20000);
        setTimeout(function() {
            $('.contenitore_titoli').animate({
                scrollTop: 0
            }, 20000);
        }, 20000);

    }, 40000);
});
