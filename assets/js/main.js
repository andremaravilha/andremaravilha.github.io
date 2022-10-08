$(function() {

    // Set sweet-scroll library
    document.addEventListener('DOMContentLoaded', () => {
        const scroller = new SweetScroll({});
    }, false);

    // Watch scroll event to update active item in menu
    let navbar = $('.navbar');
    let navbarMobile = $('.navbar-toggler');

    if (navbarMobile.css('display') !== 'none') {
        navbar.removeClass('navbar-dark navbar-transparent');
        navbar.addClass('navbar-light navbar-colored shadow-sm');
    }

    $('body').scrollspy({
        target: '#navbar',
        offset: 50
    });

    $(window).on('scroll', () => {
        if (navbarMobile.css('display') === 'none') {
            if ($(this).scrollTop() >= navbar.height()) {
                navbar.removeClass('navbar-dark navbar-transparent');
                navbar.addClass('navbar-light navbar-colored shadow-sm');
            } else {
                navbar.removeClass('navbar-light navbar-colored shadow-sm');
                navbar.addClass('navbar-dark navbar-transparent');
            }
        }
    });
});
