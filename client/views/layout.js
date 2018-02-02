Template.mainLayout.events({
    'mouseenter .logo': function(e){
		$(function() {
          $(".logo").mouseenter(function(event) {
              $(this).addClass("animated tada");
          });

          $(".logo").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
              $(this).removeClass("animated tada");
          });
      });
	}
});