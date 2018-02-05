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
        
            $('.results-details').append('<table><tr><td><span>Details</span></td><td><span class="strong">Files : </span>' + nbFiles + '</td><td><a href="javascript:void(0) class="link">See more</a></td></tr></table>');
            
            $('.results-full').append('<table><thead><tr><td><span class="strong">File</span></td><td><span class="strong">Line</td><td><span class="strong">Type</span></td><td><span class="strong">Message</span></td></tr></thead><tbody></tbody></table>');
            
            for (var test in data.files) {
                try {
                  if ((Object.keys(data.files[test].messages[0]).length) === '') {
                        return null;
                    } else {
                        let errorFile = test;
                        let errorLine = (data.files[test].messages[0].line);
                        let errorType = (data.files[test].messages[0].type);
                        let errorMessage = (data.files[test].messages[0].message);
                        $('.results-full table tbody').append('<tr cellspacing="5"><td>' + test + '</td><td>' + errorLine + '</td><td>' + errorType + '</td><td>' + errorMessage + '</td></tr>')
                    }
                }
                catch(error) {
                  // errors here
                }
            };
      }); 
    });
});