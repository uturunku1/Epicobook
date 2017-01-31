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

Account.prototype.sortByExperience = function() {
  accounts.sort(function(a, b) {
    var expA = 0;
    var expB = 0;
    var experienceLevels = [
      ["None", 0],
      ["Between 1-4 weeks", 1],
      ["Between 1-4 months", 2],
      ["More than a year", 3],
      ["Over 5 years", 4]
    ];

    experienceLevels.forEach(function(keyValue) {
      if (keyValue[0] === a.codingExperience){
        expA = keyValue[1];
      }
      if (keyValue[0] === b.codingExperience) {
        expB = keyValue[1];
      }
    });
    if (expA < expB) {
      return -1;
    }
    if (expA > expB) {
      return 1
    }
  });
};

Account.prototype.alphabeticalSort = function() {
  accounts.sort(function(a, b) {
    var nameA = a.lastName.toUpperCase();
    var nameB = b.lastName.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });
};


// Front-end logic

$(document).ready(function() {

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

    // account.alphabeticalSort(); // sort alphabetically
    // account.sortByExperience(); // sort by experience (lowest to highest)
    // accounts.reverse(); // reverse any array


    displayStudents();

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

  $("#student-list li").last().click(function() {
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
