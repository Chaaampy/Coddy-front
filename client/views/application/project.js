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
            let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
                        
            if (pattern.test(mail)) {
                $('.step-two-form, .step-two-text').fadeOut(time);
                $('.step-three-form, .step-three-text').fadeIn(time);
                $('.step-progress span:nth-child(3)').toggleClass('step-active step-inactive');
                $('#project-repo-final').val(repo);
                $('#project-mail-final').val(mail);
            } else {
                alert('This is not a valid e-mail address');
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
        $.getJSON('/test.json',function(data){
            let dataPath = (data.content.sniffer);
            let nbFiles = (Object.keys(dataPath.files).length);
            console.log(nbFiles);
            let totalErrors = (dataPath.totals.errors);
            let totalWarnings = (dataPath.totals.warnings);
            
            $('.results-global').append('<table><tr><td><span>Global results</span></td><td><span class="errors">Errors : </span>' + totalErrors + '</td><td><span class="warnings">Warnings : </span>' + totalWarnings + '</td></tr></table>');
        
            $('.results-details').append('<table><tr><td><span>Details</span></td><td><span class="strong">Files : </span>' + nbFiles + '</td><td><a href="javascript:void(0)" class="link show-more">Show more</a></td></tr></table>');
            
            $('.results-full').append('<table><thead><tr><td><span class="strong">File</span></td><td><span class="strong">Line</td><td><span class="strong">Type</span></td><td><span class="strong">Message</span></td></tr></thead><tbody></tbody></table>');
        
            for (var loop in dataPath.files) {
                try {
                    if ((Object.keys(dataPath.files[loop].messages[0]).length) === '') {
                        return null;
                    } else {
                        for (var i = 0; i < (dataPath.files[loop].messages.length); i++) {
                        let errorFile = loop;
                        let errorLine = (dataPath.files[loop].messages[i].line);
                        let errorType = (dataPath.files[loop].messages[i].type);
                        let errorMessage = (dataPath.files[loop].messages[i].message);
                        $('.results-full table tbody').append('<tr><td><a target="_blank" class="link" href="' + data.content_url + '' + loop + '#L' + errorLine + '">' + loop + '</a></td><td>' + errorLine + '</td><td class="' + errorType + '">' + errorType + '</td><td>' + errorMessage + '</td></tr>');
                        }
                    }
                }
                catch(error) {
                    //console.log(error);
                }
            };
            // console log error's rows
            console.log($('.results-full tbody tr').length);
            
            // show the table
            $('.show-more').click(function() {
               $('.results-full').toggleClass('hidden visible'); 
            });
      }); 
    });
});