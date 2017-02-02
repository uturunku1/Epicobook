//Back-end
function random(max) {
  return Math.floor(Math.random() * max);
}




//Front-end
var selectStudents = function() {
  var accountTotal = accounts.length;
  for (var index = 2; index <= accountTotal; index ++) {
    $(".student-number").append("<option>" + index + "</option>");
  }
};

$(document).ready(function() {
  selectStudents();
  var studentCards = [];

  $("#new-game").submit(function(event) {
    event.preventDefault();

    studentCards = [];
    var userInput = $(".student-number").val();
    for (var index = 1; index <= userInput; index ++) {
      var tempRandomNumber = random(accounts.length);
      studentCards.push(accounts[tempRandomNumber].pictureURL);
      studentCards.push(accounts[tempRandomNumber].firstName);
      alert(studentCards);
      // $("#game-board").append("<div>Hello</div>");
    }


  });
});
