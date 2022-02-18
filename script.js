$(function(){

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let widthWin = $(window).width();
    /* Header fixed */

    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();    
        scrollPos = $(this).scrollTop();
            
        if(scrollPos > introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    });

    /* Scroll menu */

    $("[data-scroll]").on("click", function(event){

        event.preventDefault();
        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;
        
        $('#nav').removeClass('show');

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000)
    });

    /*  Burger menu */

    $('#navToggle').on("click", function(event){
        event.preventDefault();
        $('#nav').toggleClass('show');
    })

    /* Slider_Team */

    $(window).on('load', function(){
        widthWin = $(this).width();
        if(widthWin > 400){
            $('#team__slider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                dots: true,
            });
        }else{
            $('#team__slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            });
            
        }
        
    });
    $('#slider__comments').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });    
    

});