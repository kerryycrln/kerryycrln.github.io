$(document).ready(function() {
    $(function () {
        $('.news_item').slice(0, 9).show();
        $('.load_more_news').on('click', function (e) {
            e.preventDefault();
            $('.news_item:hidden').slice(0, 3).slideDown();
            if ($('.news_item:hidden').length == 0) {
                $('.load_more_news').css('display', 'none');
            }
        });
    });

});