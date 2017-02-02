//Back-end
function Game(numberOfAccounts) {
  this.studentCards = [];
  this.numberOfAccounts = numberOfAccounts;
}

Game.prototype.clearCards = function() {
  this.studentCards = [];
}
Game.prototype.addCard = function(accountItems) {
  this.studentCards.push(accountItems);
}

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

  $("#new-game").submit(function(event) {
    event.preventDefault();
    var userInput = $(".student-number").val();
    var game = new Game(userInput);
    game.clearCards();

    for (var index = 1; index <= userInput; index ++) {
      var tempRandomNumber = random(accounts.length);
      var namePicNumAssociation = [];
      namePicNumAssociation.push(accounts[tempRandomNumber].pictureURL);
      namePicNumAssociation.push(tempRandomNumber);
      game.addCard(namePicNumAssociation);
      namePicNumAssociation = [];
      namePicNumAssociation.push(accounts[tempRandomNumber].firstName);
      namePicNumAssociation.push(tempRandomNumber);
      game.addCard(namePicNumAssociation);
    }
    alert(game.studentCards);


  });
});
