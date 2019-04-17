$(document).ready(function(){
   
    // SIDE BAR TOGGLE ON DESCTOP
    
    $('.side-bar-toggle').click(function(){
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
    
    
    
    
    
    
    
    
    
    
}); // DOCUMENT READY END


