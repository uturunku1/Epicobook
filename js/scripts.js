// Business logic
var accounts = [ ];
var districtClickIds = ["N", "NE", "SE", "SW", "NW", "VW", "LO", "BV", "HB", "FG"];

function Account(firstName, lastName, email, githubPage, hobbies, favColor, favDestination, codingExp, previousJob, whereFrom, location, pictureURL) {
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
  this.pictureURL = pictureURL;
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
      ["1-4 weeks", 1],
      ["1-4 months", 2],
      ["Under 1 year", 3],
      ["Under 5 years", 4],
      ["Over 5 years", 5]
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
var matchRandomly = function() {
  var randomAccount = accounts[Math.floor(Math.random()*accounts.length)];
  alert(randomAccount.firstName);
  return console.log(randomAccount);
};

var searching = function() {
  var find = $("#find").val();
  var found = accounts.filter(function(x) {
    return (x.firstName === find) || (x.lastName === find);
  });
  return found;
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
  displayStudents(accounts);

  $("#searchbutton").click(function(event) {
    event.preventDefault();
    displayStudents(searching());
  });

  $("#sort-tabs li").click(function(event) {
    event.preventDefault();
    $("li").removeClass("active");
    $(this).addClass("active");
  });

  $("#one").click(function() {
    $("#map-section").hide();
    $("#accounts-info").hide();
    $("#accounts-list").show();
    alphabeticalSort();
    displayStudents(accounts);
  });

  $("#two").click(function() {
    $("#map-section").hide();
    $("#accounts-info").hide();
    $("#accounts-list").show();
    sortByExperience();
    displayStudents(accounts);
  });

  $("#randomly").click(function() {
    matchRandomly();
    // displayStudents(accounts);
  });

  $("#three").click(function() {
    $("#map-section").show();
    $("#accounts-list").hide();
    $("#accounts-info").hide();
  });

//map buttons
  districtClickIds.forEach(function(id) {
    $("#" + id).click(function(event) {
      event.preventDefault();
      $("#accounts-info").hide();
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
    userPic = "";


    var account = new Account(userFirstName, userLastName, email, gitHub, hobbies, favColor, favDestination, codingExp, job, whereFrom, location, userPic);
    accounts.push(account);

    displayStudents(accounts);
    $("#student-list").show();
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

var displayStudents = function(list) {
  $("#student-list").empty();
  $("#accounts-list").empty();
  list.forEach(function(element) {
    addStudent(element);
  });
};

var addStudent = function(student) {
  $("#student-list").append("<li><span class='students'>" + student.fullName() + "</span></li>");
  $("#accounts-list").append("<li><span class='students'>" + student.fullName() + "</span></li>");

  $("#student-list li").last().click(function() {
    $("#student-info img").attr('src', student.pictureURL);
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
    $("#accounts-info img").attr('src', student.pictureURL);
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
