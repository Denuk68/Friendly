$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $(".block2__bottom").owlCarousel({      
        loop:true,                  
        responsive:{
            0:{
                items:1,              
            },
            768:{
                items:3,
                nav: true,    
            },
            992:{
                items:3,
                nav: true,    
            },
            1200:{
                items:3, 
                nav: true,                     
            },
        }
    });
});
