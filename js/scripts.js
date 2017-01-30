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
  $("#initialForm").submit(function(event) {
    $(".submit-hide").hide();
    var userFirstName = $("#first-name").val();
    var userLastName = $("#last-name").val();

    $("#student-list").append("<li><span class='students'>" + userFirstName + " " + userLastName + "</span></li>");

    var fieldIds = ["first-name", "last-name", "hobbies", "experience", "job"];

    $("#student-list").last().click(function() {
      $("#student-info").show();
      fieldIds.forEach(function(id) {
        var userInput = $("#" + id).val();
        $("." + id).text(userInput);
      });

      var userGitHubUserName = $("#git-repo").val();
      userGitHubUserName = 'https://github.com/' + userGitHubUserName;
      var userPersonalWebsite= $("#personal-website").val();
      $("#repo-link").text(userGitHubUserName);
      $("#repo-link").attr('href', userGitHubUserName);
      $(".personal-website").attr('href', userPersonalWebsite);
    });

    event.preventDefault();
  });
