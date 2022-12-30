$(function() {

    // Watch scroll event to update active item in navbar
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbar",
        rootMargin: "0px 0px -25%",
        smoothScroll: true
    });

    // Watch scroll and resize events to update navbar style
    let navbar = $('.navbar');
    let navbarMobile = $('.navbar-toggler');

    const updateNavBarStyle = () => {
        if (navbarMobile.css('display') !== 'none') {
            navbar.removeClass('navbar-dark navbar-transparent');
            navbar.addClass('navbar-light navbar-colored shadow-sm');
        } else {
            if ($(this).scrollTop() >= navbar.height()) {
                navbar.removeClass('navbar-dark navbar-transparent');
                navbar.addClass('navbar-light navbar-colored shadow-sm');
            } else {
                navbar.removeClass('navbar-light navbar-colored shadow-sm');
                navbar.addClass('navbar-dark navbar-transparent');
            }
        }
    };

    updateNavBarStyle();
    $(window).on('resize', updateNavBarStyle);
    $(window).on('scroll', updateNavBarStyle);

});
