Template.home.onRendered(function(){
    $('.link-to-demo').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -50
        }, 500);
        return false;
    });
    $(function() {  
        let time = 300;
        $('.demo-one a').click(function() {
            $('.demo-one, .video-one').fadeOut(time);
            $('.demo-two, .video-two').fadeIn(time);
        });
        $('.demo-two a').click(function() {
            $('.demo-two, .video-two').fadeOut(time);
            $('.demo-three, .video-three').fadeIn(time);
        });
        $('.demo-three a').click(function() {
            $('.demo-three, .video-three').fadeOut(time);
            $('.demo-four, .video-four').fadeIn(time);
        });
        $('.demo-four a').click(function() {
            $('.demo-four, .video-four').fadeOut(time);
            $('.demo-five, .video-five').fadeIn(time);
        });
    });
});