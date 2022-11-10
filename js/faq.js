function faqHeights(faq) {
        
    let questionHeight = 0;

    
    function heights(param1) {
        //  $("#accordion").load(" #accordion > *");

        jQuery(`${param1} .faq__question`).each(function() { //add heights to array 
            jQuery(this).css('height','auto');
            
        })

        jQuery(`${param1} .faq__question`).each(function() { //add heights to array 
            questionHeight = jQuery(this).outerHeight();
            jQuery(this).css('height',questionHeight + 'px');
            
        });
            
        }
          
    

    heights(`${faq}`);
    

    // jQuery(window).on('resize orientationchange', function () {
        
    //     questionHeight = 0; //reset vars
    //     jQuery(`${faq} .faq__question`).each(function() {
    //         jQuery(this).css('min-height','0'); //reset min-height
    //     }); 
        
    //    heights(`${faq}`); //run it again 


    // });


    
}


jQuery( document ).ready(function() {
    faqHeights(".faq");

    $( window ).resize(function() {
        // location.reload();
        // $( "#accordion" ).load(window.location.href + " #accordion" );
        console.log("holis")
        faqHeights(".faq");
      });
});