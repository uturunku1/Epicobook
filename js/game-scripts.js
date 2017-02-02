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

// Fisher-yates shuffle, found on google
function shuffle(array) {
  var m = array.length, t, i;

  // while m is not negative
  while (m) {

    // grab random number subtract 1 from m
    i = Math.floor(Math.random() * m--);

    // make copy of the last element in the array
    t = array[m];
    // overwrite last array element with the element found at random i
    array[m] = array[i];
    // overwrite array[i] with copy of last element
    array[i] = t;
  }
  // return shuffled array
  return array;
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
      var pictureDisplay = "<img src='" + accounts[tempRandomNumber].pictureURL + "' alt='student image' class='hidden'>";
      namePicNumAssociation.push(pictureDisplay);
      namePicNumAssociation.push(tempRandomNumber);
      game.addCard(namePicNumAssociation);
      namePicNumAssociation = [];
      var nameDisplay = "<p class='hidden'>" + accounts[tempRandomNumber].firstName + "</p>";
      namePicNumAssociation.push(nameDisplay);
      namePicNumAssociation.push(tempRandomNumber);
      game.addCard(namePicNumAssociation);
    }
    // alert(game.studentCards);
    shuffle(game.studentCards);

    game.studentCards.forEach(function(cardItem) {
      var itemToDisplay = cardItem[0];
      var classNumber = cardItem[1].toString();
      $("#game-board").append("<div>" + itemToDisplay + "</div>");
      $("div#game-board").children("div").last().addClass(classNumber);


      // $("#game-board div").last().click(function() {
      //   $(this).children("img").removeClass("hidden");
      // });


    }); // end of forEach function



  }); // end of submit

  $("div#game-board div").each(function() {
    $(this).click(function() {
      $("img").toggleClass("hidden");
    });
  });

}); // end of $(document).ready
