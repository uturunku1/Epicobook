// Business logic
function Account(firstName, lastName, email, githubPage, hobbies, favColor, favDestination, codingExp, previousJob, whereFrom) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.gitHubHandle = githubPage;
  this.hobbies = hobbies;
  this.favoriteColor = favColor;
  this.favoriteDestination = favDestination;
  this.codingExperience = codingExp;
  this.previousJob = previousJob;
  this.whereFrom = whereFrom;
}

Account.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};


// Front-end logic

$(document).ready(function() {
  $("#form-panel").submit(function(event) {
    event.preventDefault();

    $("#form-panel").hide();
    var userFirstName = $("#first-name").val();
    var userLastName = $("#last-name").val();
    var gitHub, hobbies, codingExp, job;

    gitHub = $("#git-repo").val();
    hobbies = $("#hobbies").val().split(/\s,\s/);
    codingExp = $("#experience").val();
    job = $("#job").val();

    var account = new Account(userFirstName, userLastName, "", gitHub, hobbies, "", "", codingExp, job, "");

    $("#student-list").append("<li><span class='students'>" + account.fullName() + "</span></li>");

    var fieldIds = ["first-name", "last-name", "email", "hobbies", "experience", "job", "favorite-destination", "user-from"];

    $("#student-list").last().click(function() {
      $("#student-info").show();
      fieldIds.forEach(function(id) {
        var userInput = $("#" + id).val();
        $("#student-info ." + id).text(userInput);
      });

      userGitHubURL = 'https://github.com/' + account.gitHubHandle;
      $("#repo-link").text(userGitHubURL);
      $("#repo-link").attr('href', userGitHubURL);

      var userColor = $("#fav-color").val();
      $("#student-info").css("color", userColor);

    });
  });
});
