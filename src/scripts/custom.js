
$(function() {

    // Internationalization (i18n)
    $.i18n().load({
        'en': 'i18n/en.json',
        'pt-BR': 'i18n/pt-BR.json'
    }).done(function() {

        // Load browser's default language
        $('body').i18n();

        // Pre-loader
        $('.preloader').delay(350).fadeOut('slow');
    });

    $('.lang-switch').on('click', function(e) {
        e.preventDefault();
        $.i18n().locale = $(this).data('locale');
        $('body').i18n();
    });

    // Pre-loader
    //$('.preloader').delay(350).fadeOut('slow');

    // Home section (size)
    var height = $(window).height();
    var portrait = ($(window).height() > $(window).width());
    $('#home').height($(window).height());

    // Navigation bar
    var navbar = $('.navbar');

    // Add classes to make menu collapsed when using small devices
    if ($(window).width() < 768) {
        navbar.addClass('custom-collapse');
    }

    // Watch scroll event to update active item in menu
    $('body').scrollspy({
        target: '#navbar-menu',
        offset: 50
    });

    // Watch scroll event to set menu style
    $(window).scroll(function () {
        if ($(this).scrollTop() >= navbar.height()) {
            navbar.addClass('navbar-color');
        } else {
            navbar.removeClass('navbar-color');
        }
    });

    // Watch window resize to upate menu
    $(window).resize(function () {

        // Update menu
        if ($(this).width() < 768) {
            navbar.addClass('custom-collapse');
        } else {
            navbar.removeClass('custom-collapse');
        }

        // Update size of home section when rotating device
        if (portrait !== ($(window).height() > $(window).width()) || height !== $(window).height()) {
            height = $(window).height();
            portrait = ($(window).height() > $(window).width());
            $('#home').height($(window).height());
        }
    });
    
    // Initialize smooth scroll
    smoothScroll.init();

});
