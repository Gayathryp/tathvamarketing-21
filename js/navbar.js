$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active navbar-dark bg-dark');
        } else {
            $('.navbar').removeClass('active navbar-dark bg-dark');
        }
    });
    
        $( ".nav-item" ).on( "click", function() {
            
            var clickedItem = $( this );
            $( ".nav-item" ).each( function() {
                $( this ).removeClass( "active" );
            });
            clickedItem.addClass( "active" );
            $('.navbar button').attr("aria-expanded","false").removeClass('opened').addClass('collapsed');
            $('#navbarSupportedContent').removeClass("show");
            });
        
        
   
});