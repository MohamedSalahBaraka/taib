$(window).on('scroll', function(){
    if ($(window).width() > 980) {
        if ($(window).scrollTop() > $(window).height()) {
            $("#navbar-top").removeClass("d-none");
        } else {
            $("#navbar-top").addClass("d-none");
        }
    } else {
        if ($(window).scrollTop() > $(window).height()) {
            $("#nav-mobile").removeClass("d-none");
        } else {
            $("#nav-mobile").addClass("d-none");
        }
    }
});
$('.notification-btn').on('click', function(){
    $('.notification').hide();
});
function copyToClipboard(text) {
    var sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text; //save main text in it
    sampleTextarea.select(); //select textarea contenrs
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
}
$('.phone-copy').on('click', function() {
    let phone = $(this).data('phone');
    copyToClipboard(phone);
    $('#copy-notifiy').show(400).delay( 800 ).hide(400);
});