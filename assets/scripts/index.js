function toggleVisiblity(element) {
    var element = $(element);
    var classes = element.attr('class');

    classes = classes.split(/\s+/);

    if (classes.includes('hidden')) {
        element.removeClass('hidden');
    }
    else {
        element.addClass('hidden');
    };
}

$(document).ready(function(){
    console.log('Ready!');

    // Menu button function
    $('#menu-btn').click(function() {
        var element = $('#menu');
        var classes = element.attr('class');

        classes = classes.split(/\s+/);

        if (classes.includes('hidden')) {
            element.removeClass('hidden');
            element.css('width', '300px');
        }
        else {
            element.css('width', '0');
            element.addClass('hidden');
        };
    });

    // Currency button function
    $('#currency-btn').click(function() {
        toggleVisiblity('#currency-list');
    });


    // Login button function
    $('#login-btn').click(function() {
        $('#login-popup').removeClass('hidden');
        $('#page-mask').removeClass('hidden');
    });
    $('#login-btn-2').click(function() {
        $('#login-popup').removeClass('hidden');
        $('#menu').addClass('hidden');
        $('#page-mask').removeClass('hidden');
    });
    $('#login-close-btn').click(function() {
        $('#login-popup').addClass('hidden');
        $('#page-mask').addClass('hidden');
    });


    // Login pop up functions
    $('#log-in').click(function() {
        $('#sign-up').removeClass('active');
        $('#log-in').addClass('active');
        $('#pop-login-btn').html('Log in');
        $('#login-text').html('<a href="#" >Forgot your password?</a>');
        $('#alf-password').attr('placeholder', 'Enter password');
    });
    $('#sign-up').click(function() {
        $('#log-in').removeClass('active');
        $('#sign-up').addClass('active');
        $('#pop-login-btn').html('Register');
        $('#login-text').html('<p style="font-size:11px;">By submitting, I accept Massar Briggs\'s <a style="color:#990100;font-size: 11px; href="https://massarbriggs.com/terms-of-services/" target="_blank">terms and conditions</a></p>');
        $('#alf-password').attr('placeholder', 'Create a password');
    });


    // Owl Carousel
    $('.carousel-1 > .owl-carousel').owlCarousel({
        loop: false,
        nav: false,
        margin: 0,
        padding: 0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    $('.carousel-2 > .owl-carousel').owlCarousel({
        loop: false,
        nav: true,
        margin: 0,
        padding: 0,
        responsive: {
            0: {
                items: 1
            },
            670: {
                items: 2
            },
            1000: {
                items: 3
            },
            1300: {
                items: 4
            },
            1920: {
                items: 5
            }
        }
    })


    // Nav bar control
    $(document).scroll(function() {
        var scroll = $(this).scrollTop();
        var topDist = $('#content').position();

        if (scroll > topDist.top) {
            $('nav').addClass('fixed-nav');
        } else {
            $('nav').removeClass('fixed-nav');
        }
    });
});
