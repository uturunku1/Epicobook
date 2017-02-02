var selectStudents = function() {
  var a = accounts.length;
  for (var index = 2; index <= a; index ++) {
    $(".student-number").append("<option>" + index + "</option>");
  }
};




$(document).ready(function() {
  selectStudents();

  $("#new-game").submit(function(event) {
    event.preventDefault();

    

  });
});
