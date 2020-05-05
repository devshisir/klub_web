$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
    
    


    // slider form worksop mobile
    $('.uniqueMemberSliderActive').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        smartSpeed: 500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })



    // active nice select
    $('select').niceSelect({});



    // NumberEdit
    $('.NumberEdit').on('click',function(){
        $('#mobileEditPopup').addClass('show');
    })
    $('#mobileEditClose,#updateNumber').on('click',function(){
        $('#mobileEditPopup').removeClass('show');
    })



    // get main phone 
    $('#updateNumber').on('click',function(){
        var MainPhone = $('#phone2').val();
        $(".phonevalue").html(MainPhone);
    })

    // scroll top
    $("#scrollTop").click(function() {
        // $("html, body").animate({ scrollTop: 0 }, "slow");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
      });


    
    $('.klubOfferMobileSliderActive').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        smartSpeed: 500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.workShopMobileSliderActive').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        smartSpeed: 500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.memberStoriesMainSliderActive').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        smartSpeed: 500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    



});