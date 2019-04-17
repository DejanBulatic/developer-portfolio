$(document).ready(function () {

    // SIDE BAR TOGGLE ON DESCTOP

    $('.side-bar-toggle').click(function () {
        $(this).toggleClass('side-bar-toggle-closed');
        $('.side-bar').toggleClass('side-bar-hide');
        $('main').toggleClass('main-full-width');
        //SMALL ARROW DIRECTION
        if ($('.side-bar-hide').length > 0) {
            $('.side-bar-toggle').removeClass('fa-angle-left');
            $('.side-bar-toggle').addClass('fa-angle-right');
            $('.side-bar-toggle').removeClass('toggle-border-left');
            $('.side-bar-toggle').addClass('toggle-border-right');
        } else {
            $('.side-bar-toggle').removeClass('fa-angle-right');
            $('.side-bar-toggle').addClass('fa-angle-left');
            $('.side-bar-toggle').removeClass('toggle-border-right');
            $('.side-bar-toggle').addClass('toggle-border-left');
        }
    });


    // BURGER BUTTON ANIMATION  

    $('.burger').click(function () {
        $(this).toggleClass('active burger-move-right');
        $('.mobile-nav').toggleClass('mobile-nav-show');
        $('.body-overlay').toggleClass('body-overlay-show');
    });



    //  OWL BRANDS SLIDER

    if ($('.owl-carousel').length > 0) {

        $('.brands-slider').owlCarousel({
            loop: true,
            dots: false,
            center: true,
//            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 5
                }

            }//responsive end
        });
    } // BRANDS SLIDER END











}); // DOCUMENT READY END


