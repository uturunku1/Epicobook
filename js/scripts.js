// Business logic
var accounts = [ ];

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
  displayStudents();

  $("#initial-form").submit(function(event) {
    event.preventDefault();

    $(".submit-hide").hide();
    var userFirstName = $("#first-name").val();
    var userLastName = $("#last-name").val();
    var gitHub, hobbies, codingExp, job;

    gitHub = $("#git-repo").val();
    hobbies = $("#hobbies").val().split(/\s,\s/);
    codingExp = $("#experience").val();
    job = $("#job").val();

    var account = new Account(userFirstName, userLastName, "", gitHub, hobbies, "", "", codingExp, job, "");
    accounts.push(account);

    $("#student-list").append("<li><span class='students'>" + account.fullName() + "</span></li>");

    var fieldIds = ["first-name", "last-name", "hobbies", "experience", "job"];

    $("#student-list").last().click(function() {
      $("#student-info").show();
      fieldIds.forEach(function(id) {
        var userInput = $("#" + id).val();
        $("#student-info ." + id).text(userInput);
      });

      userGitHubURL = 'https://github.com/' + account.gitHubHandle;
      var userPersonalWebsite = 'http://' + $("#personal-website").val();

      $("#repo-link").text(userGitHubURL);
      $("#repo-link").attr('href', userGitHubURL);

      $(".personal-website").attr('href', userPersonalWebsite);
    });
  });
});

var displayStudents = function() {
  $("#student-list").empty();
  accounts.forEach(function(element) {
    addStudent(element);
  });
};

var addStudent = function(student) {
  $("#student-list").append("<li><span class='students'>" + student.fullName() + "</span></li>");

  $("#student-list").last().click(function() {
    $("#student-info .first-name").text(student.firstName);
    $("#student-info .last-name").text(student.lastName);
    $("#student-info .hobbies").text(student.hobbies.join(", "));
    $("#student-info .experience").text(student.codingExperience);
    $("#student-info .job").text(student.previousJob);
    var userGitHubURL = 'https://github.com/' + student.gitHubHandle;

    $("#repo-link").text(userGitHubURL);
    $("#repo-link").attr('href', userGitHubURL);

    $("#student-info").show();
  });
};
