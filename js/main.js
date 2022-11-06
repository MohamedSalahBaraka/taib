$(window).on('scroll', () => {
    if ($(window).width() > 768) {
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