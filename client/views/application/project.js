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
        });
        
        $('.step-three-form .link').click(function() {
            $('.step-three-form, .step-three-text').fadeOut(time);
            $('.step-two-form, .step-two-text').fadeIn(time);
            $('.step-progress span:nth-child(3)').toggleClass('step-active step-inactive');
        });
        
    });
    
    $(function() {
        $.getJSON('/code-sniffer-result.json',function(data){
            let nbFiles = (Object.keys(data.files).length);
            let totalErrors = (data.totals.errors);
            let totalWarnings = (data.totals.warnings);
            
            $('.results-global').append('<table><tr><td><span>Global results</span></td><td><span class="errors">Errors : </span>' + totalErrors + '</td><td><span class="warnings">Warnings : </span>' + totalWarnings + '</td></tr></table>');
        
            //for(var nb in data.files) {
            //    console.log(nb, data.files[nb]);
            //}
            //console.log(JSON.stringify(data.files[0]));
            //console.log(data.files);
            //console.log(data.files['/tmp/1/processus.php']);

            for (var test in data.files) {
              console.log(data.files[test].messages[0]);  
            };
            
            //console.log(data.files);
        
            $('.results-details').append('<table><tr><td><span>Details</span></td><td><span class="strong">Files : </span>' + nbFiles + '</td><td><a href="javascript:void(0) class="link">See more</a></td></tr></table>');
            
            $('.results-full').append('<table><thead><tr><td><span class="strong">File</span></td><td><span class="strong">Line</td><td><span class="strong">Type</span></td><td><span class="strong">Message</span></td></tr></thead></table>');
      }); 
    });
});