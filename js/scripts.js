// Back-end logic



// Front-end logic

$(document).ready(function() {
  $("#initialForm").submit(function(event) {
    $(".submit-hide").hide();
    var userFirstName = $("#first-name").val();
    var userLastName = $("#last-name").val();

    $("#student-list").append("<li><span class='students'>" + userFirstName + " " + userLastName + "</span></li>");

    var fieldIds = ["first-name", "last-name", "git-repo", "hobbies", "experience", "job", "personal-website"];

    $("#student-list").last().click(function() {
      fieldIds.forEach(function(id) {
        var userInput = $("#" + id).val();
        $("." + id).text(userInput);
      });
    });

    event.preventDefault();
  });


});
