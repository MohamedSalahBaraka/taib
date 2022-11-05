$(window).on('scroll', () => {
    if ($(window).scrollTop() > $(window).height()){
        $("#navbar-top").removeClass("d-none");
    }else{
         $("#navbar-top").addClass("d-none");
    }
});
let nav = true;
$('.navbar-toggler').on('click', () => {
    if (nav) {
        $('.nav-img').height('40vh');
        nav = false;
    } else {
        $('.nav-img').height('20vh');
        nav = true;
    }
});