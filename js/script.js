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
    $(".products_sect_anim").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
        scrollTop: $(".products").offset().top
        }, 1000);
    });


    // Slider products
    $(".products_sect_anim").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
        scrollTop: $(".products").offset().top
        }, 1000);
    });

    // // Calculator
    // let kal1Type = 'P';
    // let kal1M2 = 0;
    // let kal1Mm = 0;

    // function setTypeKal1() {
    //     kal1Type = $('#typeKal1').val();
    //     $('.mm-type-kal1').hide();
    //     $('#mm-' + kal1Type).show()
    // };
    // let setKal1 = {
    //     'P': {
    //         'm2': 0.50,
    //         'option': {
    //             'mm10': 50,
    //             'mm20': 30,
    //             'mm30': 20,
    //             'mm40': 15,
    //             'mm50': 12,
    //             'mm60': 10,
    //             'mm70': 8,
    //             'mm80': 7,
    //             'mm90': 6,
    //             'mm100': 6,
    //             'mm110': 5,
    //             'mm120': 5,
    //             'mm130': 4,
    //             'mm140': 4,
    //             'mm150': 4,
    //             'mm160': 3,
    //             'mm170': 3,
    //             'mm180': 3,
    //             'mm190': 3,
    //             'mm200': 3,
    //             'mm210': 2,
    //             'mm220': 2,
    //             'mm230': 2,
    //             'mm240': 2,
    //             'mm250': 2,
    //             'mm260': 2,
    //             'mm270': 2,
    //             'mm280': 2,
    //             'mm290': 2,
    //             'mm300': 2
    //         }
    //     },
    //     'F': {
    //         'm2': 0.4777,
    //         'option': {
    //             'mm50': 12,
    //             'mm60': 10,
    //             'mm70': 8,
    //             'mm80': 7,
    //             'mm90': 6,
    //             'mm100': 6,
    //             'mm110': 5,
    //             'mm120': 5,
    //             'mm130': 4,
    //             'mm140': 4,
    //             'mm150': 4,
    //             'mm160': 3,
    //             'mm170': 3,
    //             'mm180': 3,
    //             'mm190': 3,
    //             'mm200': 3,
    //             'mm210': 2,
    //             'mm220': 2,
    //             'mm230': 2,
    //             'mm240': 2,
    //             'mm250': 2,
    //             'mm260': 2,
    //             'mm270': 2,
    //             'mm280': 2,
    //             'mm290': 2,
    //             'mm300': 2
    //         }
    //     },
    //     'A': {
    //         'm2': 0.741,
    //         'option': {
    //             'mm50': 12,
    //             'mm60': 10,
    //             'mm70': 8,
    //             'mm80': 7,
    //             'mm90': 6,
    //             'mm100': 6,
    //             'mm110': 5,
    //             'mm120': 5,
    //             'mm130': 4,
    //             'mm140': 4,
    //             'mm150': 4,
    //             'mm160': 3,
    //             'mm170': 3,
    //             'mm180': 3,
    //             'mm190': 3,
    //             'mm200': 3
    //         }
    //     },
    //     'T': {
    //         'm2': 0.768,
    //         'option': {
    //             'mm20': 10,
    //         }
    //     }
    // };
    // function setDoKal1() {
    //     kal1M2 = jQuery('#m2').val().replace(',', '.');
    //     kal1Mm = jQuery('#mm-' + kal1Type).val();
    //     var powPacz = setKal1[kal1Type].m2 * setKal1[kal1Type].option['mm' + kal1Mm];
    //     var ilPacz = Math.ceil(kal1M2 / powPacz);
    //     jQuery('#kal1-result').show()
    //     if (isNaN(ilPacz)) {
    //         jQuery('#kal1-result span').html('Wprowadź informacje do obliczeń')
    //     } else {
    //         jQuery('#kal1-result span').html(`Potrzeba paczek: ${ilPacz}`)
    //     }
    // };
    // function clearKal1() {
    //     jQuery('#m2').attr('value', '')
    //     jQuery('#kal1-result').hide()
    //     $('select').prop('selectedIndex', 0);
    //     $('.calc_1_input_area').val('')
    // };





    // let kal2Lambda = {};
    // function setTypeKal2(w) {
    //     if (w == 'w1') {
    //         if (jQuery('#typeKal2w1').val() == 'im') {
    //             jQuery('.imw1').show();
    //             jQuery('.imw1x').hide();
    //         } else {
    //             jQuery('.imw1').hide();
    //             jQuery('.imw1x').show();
    //             var selW1 = jQuery('#typeKal2w1').val();
    //             if (selW1 == 'm0') {
    //                 jQuery('.imw1x').hide();
    //             } else {
    //                 jQuery('.imw1x').show();
    //                 var lambda = setKal2.w1[selW1].lambda;
    //                 jQuery('#w1La').html(lambda);
    //                 var d = setKal2.w1[selW1].d
    //                 jQuery('#w1Cm').html(d);
    //             }
    //         }
    //     }
    //     if (w == 'w2') {
    //         if (jQuery('#typeKal2w2').val() == 'im') {
    //             jQuery('.imw1').show();
    //             jQuery('.imw1x').hide();
    //         } else {
    //             jQuery('.imw2x').show();
    //             var selW2 = jQuery('#typeKal2w2').val();
    //             if (selW2 == 'm0') {
    //                 jQuery('.imw2x').hide();
    //             } else {
    //                 jQuery('.imw2x').show();
    //                 var lambda = setKal2.w2[selW2].lambda;
    //                 jQuery('#w2La').html(lambda.toFixed(3));
    //             }
    //         }
    //     }
    //     if (w == 'w3') {
    //         if (jQuery('#typeKal2w3').val() == 'im') {
    //             jQuery('.imw3').show();
    //             jQuery('.imw3x').hide();
    //         } else {
    //             jQuery('.imw3').hide();
    //             jQuery('.imw3x').show();
    //             var selW3 = jQuery('#typeKal2w3').val();
    //             if (selW3 == 'm0') {
    //                 jQuery('.imw3x').hide();
    //             } else {
    //                 jQuery('.imw3x').show();
    //                 var lambda = setKal2.w3[selW3].lambda;
    //                 jQuery('#w3La').html(lambda);
    //                 var d = setKal2.w3[selW3].d
    //                 jQuery('#w3Cm').html(d);
    //             }
    //         }
    //     }
    // };
    // let setKal2 = {
    //     w1: {
    //     m0: { lambda: 0, r: 0, d: 0 },
    //     m1: { lambda: 0.46, r: 0.522, d: 24 },
    //     m3: { lambda: 0.313, r: 0.962, d: 25 },
    //     m4: { lambda: 0.233, r: 1.579, d: 30 },
    //     m5: { lambda: 0.143, r: 2.375, d: 38 },
    //     m6: { lambda: 0.31, r: 0.806, d: 25 },
    //     m7: { lambda: 0.19, r: 1.579, d: 30 },
    //     m8: { lambda: 0.16, r: 2.375, d: 38 },
    //     m9: { lambda: 0.11, r: 2.286, d: 24 },
    //     m10: { lambda: 0.16, r: 1.5, d: 24 },
    //     m11: { lambda: 0.11, r: 2.182, d: 24 },
    //     m12: { lambda: 0.11, r: 2.727, d: 30 },
    //     m13: { lambda: 0.16, r: 1.548, d: 24 },
    //     m14: { lambda: 0.16, r: 1.935, d: 30 },
    //     m15: { lambda: 0.11, r: 2.182, d: 24 },
    //     m16: { lambda: 0.17, r: 1.412, d: 24 },
    //     m17: { lambda: 0.17, r: 1.765, d: 30 },
    //     m18: { lambda: 0.4, r: 0.625, d: 25 },
    //     m19: { lambda: 0.4, r: 0.725, d: 29 },
    //     m20: { lambda: 0.77, r: 0.325, d: 25 },
    //     m24: { lambda: 1.7, r: 0.147, d: 25 },
    //     m25: { lambda: 1.7, r: 0.088, d: 15 },
    //     },
    //     w2: {
    //     m0: { lambda: 0 },
    //     m1: { lambda: 0.0440 },
    //     m2: { lambda: 0.0420 },
    //     m3: { lambda: 0.0400 },
    //     m4: { lambda: 0.0380 },
    //     m5: { lambda: 0.0400 },
    //     m6: { lambda: 0.0380 },
    //     m7: { lambda: 0.0370 },
    //     m8: { lambda: 0.0360 },
    //     m9: { lambda: 0.0350 },
    //     m10: { lambda: 0.0340 },
    //     m11: { lambda: 0.0330 },
    //     m12: { lambda: 0.0310 },
    //     m13: { lambda: 0.0300 },
    //     },
    //     w3: {
    //     m0: { lambda: 0, r: 0, d: 0 },
    //     m2: { lambda: 0.46, r: 0.261, d: 12 },
    //     m3: { lambda: 0.16, r: 0.719, d: 11.5 },
    //     m4: { lambda: 0.16, r: 0.774, d: 12 },
    //     m5: { lambda: 0.17, r: 0.706, d: 12 },
    //     m6: { lambda: 0.307, r: 0.548, d: 11.5 },
    //     m7: { lambda: 0.30, r: 0.383, d: 11.5 },
    //     m8: { lambda: 0.77, r: 0.156, d: 12 },
    //     m9: { lambda: 1.05, r: 0.114, d: 12 },
    //     m11: { lambda: 0.45, r: 0.267, d: 12 },
    //     },
    // };
    // function onlydec(event, f) {
    //     if (event.srcElement) {
    //         kc = event.keyCode;
    //     } else {
    //         kc = event.which;
    //     }
    //     if ((kc < 47 || kc > 57) && kc != 8 && kc != 0) return false;
    //     return true;
    // }
    // function setDoKal2() {
    //     var selW1 = jQuery('#typeKal2w1').val();
    //     if (selW1 == 'm0') {
    //         jQuery('#kal2-result').hide();
    //         jQuery('#komunikat').show();
    //         return
    //     }
    //     var RW1 = 0;
    //     if (selW1 != 'im') {
    //         RW1 = setKal2.w1[selW1].r;
    //     } else {
    //         var lambda = jQuery('#w1l').val().replace(',', '.');
    //         var d = jQuery('#w1mm').val().replace(',', '.');
    //         RW1 = (d / 100) / lambda
    //     }
    //     var selW2 = jQuery('#typeKal2w2').val();
    //     if (selW2 == 'm0') {
    //         jQuery('#kal2-result').hide();
    //         jQuery('#komunikat').show();
    //         return
    //     }
    //     var lambdaW2 = setKal2.w2[selW2].lambda;
    //     var dW2 = jQuery('#w2mm').val().replace(',', '.');
    //     if (dW2 == '') {
    //         jQuery('#kal2-result').hide();
    //         jQuery('#komunikat').show();
    //         return
    //     }
    //     RW2 = (dW2 / 100) / lambdaW2
    //     var selW3 = jQuery('#typeKal2w3').val();
    //     var RW3 = 0;
    //     if (selW3 == 'm0') {
    //         RW3 = 0
    //     } else if (selW3 != 'im') {
    //         RW3 = setKal2.w3[selW3].r;
    //     } else {
    //         var lambda3 = jQuery('#w3l').val().replace(',', '.');
    //         var d3 = jQuery('#w3mm').val().replace(',', '.');
    //         RW3 = (d3 / 100) / lambda3
    //     }
    //     var U = 1 / (0.17 + RW1 + RW2 + RW3);

    //     jQuery('#kal2-result').show()
    //     jQuery('#komunikat').hide()
    //     jQuery('#kal2-result span').html(U.toFixed(2))
    // };
    // function clearKal2() {
    //     jQuery('#m2').attr('value', '')
    //     jQuery('#kal2-result').hide()
    //     jQuery('.imw1x').hide()
    //     jQuery('.imw2x').hide()
    //     jQuery('.imw3x').hide()
    //     $('select').prop('selectedIndex', 0);
    //     $('.calc_2_input_area').val('')
    // };
});
