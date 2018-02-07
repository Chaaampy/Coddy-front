Template.header.events({    
    'click .trigger-wrapper': function(){
        $(function() {
              $('.nav-mobile').toggleClass('nav-mobile-active');
              $('.trigger-wrapper').toggleClass('is-active');
        });
	}
});

Template.header.events({    
    'click .nav-mobile a': function(){
        $(function() {
              $('.nav-mobile').toggleClass('nav-mobile-active');
              $('.trigger-wrapper').toggleClass('is-active');
        });
	}
});