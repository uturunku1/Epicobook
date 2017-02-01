// Business logic
var accounts = [ ];
var districtClickIds = ["N", "NE", "SE", "SW", "NW", "VW", "LO", "BV", "HB", "FG"];

function Account(firstName, lastName, email, githubPage, hobbies, favColor, favDestination, codingExp, previousJob, whereFrom, location) {
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
  this.location = location;
}

Account.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

var alphabeticalSort = function() {
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

var sortByExperience = function() {
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
      if (keyValue[0] === a.codingExperience) {
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
      return 1;
    }
  });
};


var mapByStudents = function() {
  $("#student-list").empty();
  $("#student-list").show();
  $("#accounts-list").empty();
  accounts.forEach(function(element) {

    addStudent(element);
  });
};


// Front-end logic
$(document).ready(function() {
  alphabeticalSort();
  displayStudents();

  $("#sort-tabs li").click(function(event) {
    event.preventDefault();
    $("li").removeClass("active");
    $(this).addClass("active");
  });

  $("#one").click(function() {
    $("#map-section").hide();
    alphabeticalSort();
    displayStudents();
  });
  $("#two").click(function() {
    $("#map-section").hide();
    sortByExperience();
    displayStudents();
  });
  $("#three").click(function() {
    $("#map-section").show();
    $("#accounts-list").hide();
  });

//map buttons
  districtClickIds.forEach(function(id) {
    $("#" + id).click(function() {
      $("#accounts-list").show();
      $("#accounts-list").empty();
      accounts.forEach(function(account) {
        if (account.location === id) {
          var sortedLocation = [];
          sortedLocation.push(account);
          addStudent(account);
        }
      });
    });
  });


  $("#form-panel").submit(function(event) {
    event.preventDefault();
    $("#form-panel").hide();

    $("#thanks").show();
    $("student-list").show();

    var userFirstName = $("#first-name").val();
    var userLastName = $("#last-name").val();
    var email, gitHub, hobbies, favColor, favDestination, codingExp, job, whereFrom, location;

    email = $("#email").val();
    gitHub = $("#git-repo").val();
    hobbies = $("#hobbies").val().split(/\s,\s/);
    favColor = $("#fav-color").val();
    favDestination = $("#favorite-destination").val();
    codingExp = $("#experience").val();
    job = $("#job").val();
    whereFrom = $("#user-from").val();
    location = $("#location").val();


    var account = new Account(userFirstName, userLastName, email, gitHub, hobbies, favColor, favDestination, codingExp, job, whereFrom, location);
    accounts.push(account);

    displayStudents();
  });

  document.getElementById("homelink").onclick = function() {
    location.href = "index.html";
  };
  document.getElementById("joinlink").onclick = function() {
    location.href = "join.html";
  };
  document.getElementById("matchlink").onclick = function() {
    location.href = "match.html";
  };
  document.getElementById("forumlink").onclick = function() {
    location.href = "http://forum.epicodus.com/login";
  };
});

var displayStudents = function() {
  $("#student-list").empty();
  $("#student-list").show();
  $("#accounts-list").empty();
  accounts.forEach(function(element) {
    addStudent(element);
  });
};

var addStudent = function(student) {
  $("#student-list").append("<li><span class='students'>" + student.fullName() + "</span></li>");
  $("#accounts-list").append("<li><span class='students'>" + student.fullName() + "</span></li>");

  $("#student-list li").last().click(function() {
    $("#student-info .first-name").text(student.firstName);
    $("#student-info .last-name").text(student.lastName);
    $("#student-info .email").text(student.email);
    $("#student-info .hobbies").text(student.hobbies.join(", "));
    $("#student-info .experience").text(student.codingExperience);
    $("#student-info .favorite-destination").text(student.favoriteDestination);
    $("#student-info .user-from").text(student.whereFrom);
    $("#student-info .job").text(student.previousJob);
    $("#student-info .location").text(student.location);
    var userGitHubURL = 'https://github.com/' + student.gitHubHandle;

    $("#repo-link").text(userGitHubURL);
    $("#repo-link").attr('href', userGitHubURL);

    $("#student-info").css("color", student.favoriteColor);
    $("#student-info").show();
  });

  $("#accounts-list li").last().click(function() {
    $("#accounts-info .first-name").text(student.firstName);
    $("#accounts-info .last-name").text(student.lastName);
    $("#accounts-info .email").text(student.email);
    $("#accounts-info .hobbies").text(student.hobbies.join(", "));
    $("#accounts-info .experience").text(student.codingExperience);
    $("#accounts-info .favorite-destination").text(student.favoriteDestination);
    $("#accounts-info .user-from").text(student.whereFrom);
    $("#accounts-info .job").text(student.previousJob);
    $("#accounts-info .location").text(student.location);
    var userGitHubURL = 'https://github.com/' + student.gitHubHandle;

    $("#repo-link").text(userGitHubURL);
    $("#repo-link").attr('href', userGitHubURL);

    $("#accounts-info").css("color", student.favoriteColor);
    $("#accounts-info").show();
  });
};
