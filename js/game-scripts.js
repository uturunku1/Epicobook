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
    for (var index = 1; index <= userInput; index ++) {
      $("#game-board").append("<div>Hello</div>");
    }



  });
});
