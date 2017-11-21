$(document).ready(() => {

    $(".loginSubmit, .registerSubmit").click(() => { //close login/register modals after submitting forms

        $('#loginModal').modal('hide');
        $('#registerModal').modal('hide');

    });

}); //END OF DOCUMENT.READY