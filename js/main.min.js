jQuery(document).ready(function(){

    var header = $('.header');
    var nav = $('.nav--header');

    window.onscroll = function() {
        if(window.pageYOffset > header.height()) {
            nav.addClass('nav--move');
        } else {
            nav.removeClass('nav--move');
        }
    }

    $('#mc-form').ajaxChimp({
        url: 'https://gmail.us4.list-manage.com/subscribe/post?u=7d6868159565b2ad2040452af&amp;id=2177f9a8ea'
    });

    $(document).on('click', '.burger', function(){
        $(this).toggleClass('is-active');
        $('.header__nav-wrap').toggleClass('is-active');
    });
});