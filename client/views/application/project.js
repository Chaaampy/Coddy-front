Template.project.onRendered(function(){
    $(function() {  
        let time = 0;
        $('.step-one-form .btn-primary').click(function() {
            $('.step-one-form, .step-one-text').fadeOut(time);
            $('.step-two-form, .step-two-text').fadeIn(time);
            $('.step-progress span:nth-child(2)').toggleClass('step-active step-inactive');
        });
        $('.step-two-form .btn-primary').click(function() {
            let repo = $('#project-select').val();
            let mail = $('#project-mail').val();
            if (mail != '') {
                $('.step-two-form, .step-two-text').fadeOut(time);
                $('.step-three-form, .step-three-text').fadeIn(time);
                $('.step-progress span:nth-child(3)').toggleClass('step-active step-inactive');
                $('#project-repo-final').val(repo);
                $('#project-mail-final').val(mail);
            }
        });
        $('.step-two-form .link').click(function() {
            $('.step-two-form, .step-two-text').fadeOut(time);
            $('.step-one-form, .step-one-text').fadeIn(time);
            $('.step-progress span:nth-child(2)').toggleClass('step-active step-inactive');
        });"'"
        $('.step-three-form .link').click(function() {
            $('.step-three-form, .step-three-text').fadeOut(time);
            $('.step-two-form, .step-two-text').fadeIn(time);
            $('.step-progress span:nth-child(3)').toggleClass('step-active step-inactive');
        });
    });
});