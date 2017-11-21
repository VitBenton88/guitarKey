$(document).ready(() => {

    $(".loginSubmit, .registerSubmit").click(() => { //close login/register modals after submitting forms

        $('#loginModal').modal('hide');
        $('#registerModal').modal('hide');

    });

  $("body").on("click", ".keyAddBtn", function() {
  		if ($(this).attr('data-selected') == "false") {
  			$(this).attr('data-selected', "true")
		  	$(this).removeClass('btn-basic');
		  	$(this).addClass('btn-success');
		 } else {
		 	$(this).attr('data-selected', "false")
		 	$(this).removeClass('btn-success');
		 	$(this).addClass('btn-basic');
		 }
  })

}); //END OF DOCUMENT.READY