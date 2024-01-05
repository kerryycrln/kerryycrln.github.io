$(document).ready(function() {
    // Modal fading function
    function fade_modal_in(modal_window_name, e){
    e.preventDefault();
    modal_window_name.fadeIn();
    }

    // Modals
    $('.warm_calculator').on('click', function(e){
    fade_modal_in($('.calculator_modal_window'), e);
    });
    $('.about_us').on('click', function(e){
    fade_modal_in($('.about_us_modal_window'), e);
    });
    $('.contact_us_action').on('click', function(e){
    fade_modal_in($('.contact_us_modal_window'), e);
    });

    function clearForm(){
        $('.contact_us_modal_window input').val('');
        $('.contact_us_modal_window textarea').val('');
    }
    
    $('.close_modal, .modal_button').on('click', function(){
       clearForm()
    });

    $('.close_modal').on('click', function(){
        $('.modal_overlay').fadeOut();
    });

    $('.modal_thanks_btn').on('click', function(){
        $('.thanks').fadeOut();
        setTimeout(function (){
            window.location.reload()
        }, 5000)
    });


    // Nav bar | header
    $('.nav_img_menu').on('click', function(){
    if ($('.nav_img_menu').hasClass('active')) {
        $('.menu_nav_header').slideDown();
    }
    else{
    $('.menu_nav_header').slideUp();
    }
    });
    $(window).resize(function () {
    if($(window).width() > 970){
        $('.menu_nav_header').slideUp();
        $('.nav_img_menu').removeClass('active')
    }
    });
    $('.menu_nav_header_list a').on('click', function(){
    $('.menu_nav_header').fadeOut();
    $('.nav_img_menu').removeClass('active')
    });


    // Validation of fields
    function validateNameSecondName(name) {
        let namePattern = /^[A-Za-z ]+$/;
        if (!namePattern.test(name)) {
        return false;
        }
        return true;
    }
    function validateEmail(email) {
        let emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailPattern.test(email)) {
        return false;
        }
        return true;
    }
    $('#send_message_contact_us').on('click', function(e){
        e.preventDefault();

        let name = $('#client_name');
        let second_name = $('#client_second_name');
        let email = $('#client_email');

        let isCorrect = true;

        if(!validateNameSecondName(name.val())){
            name.addClass('error');
            isCorrect = false;
        } else{
            if(name.hasClass('error')){
                name.removeClass('error');
                isCorrect = true;
            }
        }
        if(!validateNameSecondName(second_name.val())){
            second_name.addClass('error');
            isCorrect = false;
        } else{
            if(second_name.hasClass('error')){
                second_name.removeClass('error');
                isCorrect = true;
            }
        }
        if(!validateEmail(email.val())){
            email.addClass('error');
            isCorrect = false;
        } else{
            if(email.hasClass('error')){
                email.removeClass('error');
                isCorrect = true;
            }
        }
        if(isCorrect){
            $('.contact_us_modal_window').fadeOut();
            $('.thanks').fadeIn();
        }
    });
});
