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

var alphabeticalSort = function(list) {
  list.sort(function(a, b) {
    var nameA = a.lastName.toUpperCase();
    var nameB = b.lastName.toUpperCase();
    if (nameA < nameB)
      return -1;
    if (nameA > nameB)
      return 1;
    else
      return 0;
  });
};

var experienceSort = function(list) {
  list.sort(function(a, b) {
    var experienceA = 0;
    var experienceB = 0;
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
        experienceA = keyValue[1];
      }
      if (keyValue[0] === b.codingExperience) {
        experienceB = keyValue[1];
      }
    });

    if (experienceA < experienceB)
      return -1;
    if (experienceA > experienceB)
      return 1;
    else
      return 0;
  });
};

var randomMatch = function(list) {
  return list[Math.floor(Math.random() * list.length)];
};

var search = function(searchTerm) {
  var found = accounts.filter(function(a) {
    return (a.firstName === searchTerm) || (a.lastName === searchTerm);
  });
  return found;
};


// Front-end logic
$(document).ready(function() {
  alphabeticalSort(accounts);
  displayList("#accounts", accounts);


  $("#searchbutton").click(function(event) {
    event.preventDefault();
    var searchFor = $("#find").val();;
    displayList("#accounts", search(searchFor));
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
    alphabeticalSort(accounts);
    displayList("#accounts", accounts);
  });

  $("#two").click(function() {
    $("#map-section").hide();
    $("#accounts-info").hide();
    $("#accounts-list").show();
    experienceSort(accounts);
    displayList("#accounts", accounts);
  });

  $("#randomly").click(function() {
    var match = randomMatch(accounts);
    $(".selected").hide();
    $("#tinder").show();
    // $(".chosen").text(match.firstName);
    populateInfo(".match-result", match);
  });

  $("#three").click(function() {
    $("#map-section").show();
    $("#accounts-list").hide();
    $("#accounts-info").hide();
  });

  // map buttons
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
          addStudent("#accounts", account);
        }
      });
    });
  });


  $("#form-panel").submit(function(event) {
    event.preventDefault();
    $("#form-panel").hide();
    $("#thanks").show();
    $("#list-column").show();

    var userFirstName = $("#first-name").val();
    var userLastName = $("#last-name").val();
    var email, gitHub, hobbies, favColor, favDestination, codingExp, job, whereFrom, location;

    email = $("#email").val();
    gitHub = $("#git-repo").val();
    hobbies = $("#hobbies").val().split(/\s*,\s*/);
    favColor = $("#fav-color").val();
    favDestination = $("#favorite-destination").val();
    codingExp = $("#experience").val();
    job = $("#job").val();
    whereFrom = $("#user-from").val();
    location = $("#location").val();
    userPic = "";

    var account = new Account(userFirstName, userLastName, email, gitHub, hobbies, favColor, favDestination, codingExp, job, whereFrom, location, userPic);
    accounts.push(account);

    displayList("#accounts", accounts);
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

var displayList = function(id, list) {
  $(id + "-list").empty();
  list.forEach(function(element) {
    addStudent(id, element);
  });
};

var addStudent = function(id, student) {
  $(id + "-list").append("<li><span class='students'>" + student.fullName() + "</span></li>");

  $(id + "-list li").last().click(function() {
    $("#match-choice").hide();
    populateInfo(".match-criteria", student);
    populateInfo(id + "-info", student);
  });
};

var populateInfo = function(id, account) {
  $(id + " .first-name").text(account.firstName);
  $(id + " .last-name").text(account.lastName);
  $(id + " .email").text(account.email);
  $(id + " .job").text(account.previousJob);
  $(id + " .favorite-destination").text(account.favoriteDestination);
  $(id + " .experience").text(account.codingExperience);
  $(id + " .from").text(account.whereFrom);
  $(id + " .location").text(account.location);
  $(id + " .hobbies").text(account.hobbies.join(", "));
  $(id + " img").attr("src", account.pictureURL);

  var userGitHubURL = 'https://github.com/' + account.gitHubHandle;

  $(id + " .repo-link").text(userGitHubURL);
  $(id + " .repo-link").attr("href", userGitHubURL);

  $(id).css("color", account.favoriteColor);
  $(id).show();
};

var mapByStudents = function() {
  $("#accounts-list").empty();
  accounts.forEach(function(element) {
    addStudent("#accounts", element);
  });
};
