$(document).ready(function () {

    var slider;
    $(window).load(function(){
        if(window.innerWidth < 992){
            slider = $('.bxslider').bxSlider({
                mode: 'horizontal',
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 0,
                adaptiveHeight: true,
                touchEnabled: true,
                infiniteLoop: true,
                controls: false,
                pager: true
            });
        }else{
            slider = $('.bxslider').bxSlider({
                mode: 'vertical',
                minSlides: 3,
                maxSlides: 3,
                slideMargin: 10,
                infiniteLoop: false,
                adaptiveHeight: false,
                touchEnabled: false,
                controls: false,
                pager: false
            });
        }
	});
    $(window).resize(function(){
        if(window.innerWidth < 992){
            slider.reloadSlider({
                mode: 'horizontal',
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 0,
                adaptiveHeight: true,
                touchEnabled: true,
                infiniteLoop: true,
                controls: false,
                pager: true
            });
        }else{
            slider.reloadSlider({
                mode: 'vertical',
                minSlides: 3,
                maxSlides: 3,
                infiniteLoop: false,
                adaptiveHeight: false,
                touchEnabled: false,
                controls: false,
                pager: false
            });
        }
    });


});

$(document).ready(function() {
    $('.toform').click(function(){
        $("html, body").animate({scrollTop: $("form").offset().top-300}, 1000);
        return false;
    });

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });
});




