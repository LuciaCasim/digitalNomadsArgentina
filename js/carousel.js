document.addEventListener("DOMContentLoaded", function(){

//     topControls = document.querySelectorAll('.top');
//     carouselTexts = document.querySelectorAll('.carousel__text');
//     imageHeight = document.querySelector(".carousel__image").offsetHeight;

//    console.log(imageHeight);

//   topControls.forEach((control) => {
//     control.style.top = imageHeight + imageHeight/7 + "px"
//   });

//   carouselTexts.forEach((text) => {
//     text.style.marginTop = imageHeight/8*3 + "px"
//   });



}); 

// Set all carousel items to the same height
function carouselNormalization() {
        
    window.heights = [], //create empty array to store height values
    window.tallest; //create variable to make note of the tallest slide
    
    function normalizeHeights() {
        jQuery('.parab .carousel-inner .carousel-item').each(function() { //add heights to array
            window.heights.push(jQuery(this).outerHeight());
        });
        window.tallest = Math.max.apply(null, window.heights); //cache largest value
        jQuery('.parab .carousel-inner .carousel-item').each(function() {
            jQuery(this).css('min-height',tallest + 'px');
        });
    }
    normalizeHeights();

    jQuery(window).on('resize orientationchange', function () {
        
        window.tallest = 0, window.heights.length = 0; //reset vars
        jQuery('.parab .carousel-inner .carousel-item').each(function() {
            jQuery(this).css('min-height','0'); //reset min-height
        }); 
        
        normalizeHeights(); //run it again 

    });
    
}

jQuery( document ).ready(function() {
    carouselNormalization();
});