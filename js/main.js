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



//LAXXX ANIMATION PLUGIN INITIALIZATION

window.onload = function () {
lax.setup({
breakpoints: {small: 0, large: 992}
}); // init

        const updateLax = () => {
lax.update(window.scrollY);
        window.requestAnimationFrame(updateLax);
};
        window.requestAnimationFrame(updateLax);
};
// OWL TESTIMONIAL SLIDER

        if ($('.owl-carousel').length > 0) {

$('.testimonial-slider').owlCarousel({
items: 1,
        loop: true,
        margin: 20,
//            autoplay: true,
        navText: ['<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>'],
        responsive: {
        0: {

        },
                500: {

                },
                991: {

                },
                1200: {
                nav: true
                }

        }//responsive end
});
}//owl carousel end






jQuery.validator.addMethod("ContainsAtLeastOneDigit", function (value) {
return /^[a-z]+[0-9]/i.test(value);
});
        $(function () {
        $(".contact-form").validate({
        highlight: function (element) {
        $(element).closest('.form-group').addClass("has-danger");
                $(element).addClass("form-control-danger");
        },
                unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                        $(element).removeClass('form-control-danger').addClass('form-control-success');
                },
                rules: {
                name: {
                required: true,
                        rangelength: [2, 20]
                },
                        email: {
                        required: true,
                                email: true
                        },
                        phone: {
                        required: true,
                                number: true
                        },
                        message: {
                        required: true,
                                maxlength: 255
                        }




                },
                messages: {
                name: {
                required: 'Please enter your name',
                        rangelength: '2 - 20 letters'

                },
                        email: {
                        required: 'Please enter your email adress',
                                email: 'Not a valid email adress'
                        },
                        phone: {
                        required: 'Please enter your phone-nr',
                                number: 'number'
                        },
                        message: {
                        required: 'Say hello',
                                maxlength: '255 letters limit'
                        }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
                }

        });
        });

        //Form Validation






        }); // DOCUMENT READY END


