Template.report.onRendered(function(){    
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