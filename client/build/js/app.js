$(document).ready(() => {

    $(".loginSubmit, .registerSubmit").click(() => { //close login/register modals after submitting forms

        $('#loginModal').modal('hide');
        $('#registerModal').modal('hide');

    });

  $("body").on("click", ".chordPanel", function() {
  		if (!$(this).hasClass('selected')) {
  			$(this).css('background-color', "#98FB98")
		  	$(this).addClass('selected');
		 } else {
		 	$(this).removeClass('selected');
		 	$(this).css('background-color', "white")
		 }
  })

}); //END OF DOCUMENT.READY