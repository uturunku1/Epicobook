//Back-end
function Game(numberOfAccounts) {
  this.studentCards = [];
  this.numberOfAccounts = numberOfAccounts;
  this.turn = 1;
  this.flip = 0;
}

Game.prototype.clearCards = function() {
  this.studentCards = [];
}
Game.prototype.addCard = function(accountItems) {
  this.studentCards.push(accountItems);
}
Game.prototype.calcFlip = function() {
  if (this.flip === 0) {
    this.flip = 1;
  } else {
    this.flip++;
  }
  return this.flip;
}

function comparison(flipClass1, flipClass2) {
  if (flipClass1 !== flipClass2) {
    this.turn = 1;
    this.flip = 0;
    return false;
  } else if (flipClass1 === flipClass2) {
    this.turn++;
    this.flip = 0;
    return true;
  }
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
    $("div#game-board").empty();
    var userInput = $(".student-number").val();
    var game = new Game(userInput);
    var comparFlip1 = "", comparFlip2 = "";
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


      $("div#game-board div").last().click(function() {
        $(this).children("img, p").toggle();
        if (!comparFlip1) {
          comparFlip1 = $(this).last().attr("class");
        } else if (!comparFlip2) {
          comparFlip2 = $(this).last().attr("class");
        }
        game.calcFlip(comparFlip1, comparFlip2);

        if (comparison(comparFlip1, comparFlip2)) {
          comparFlip1 = "";
          comparFlip2 = "";
          alert("NICE!");
        }
      });


    }); // end of forEach function

  }); // end of submit

}); // end of $(document).ready
