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
    

    
}


jQuery( document ).ready(function() {
    faqHeights(".faq");

    $( window ).resize(function() {
        faqHeights(".faq");
      });
});