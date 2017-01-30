// Business logic
function Account(firstName, lastName, email, githubPage, hobbies, favColor, favDestination, codingExp, previousJob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.githubPage = githubPage;
  this.hobbies = hobbies;
  this.favColor = favColor;
  this.favDestination = favDestination;
  this.codingExp = codingExp;
  this.previousJob = previousJob;
}

Account.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};


// Interface logic
$(document).ready(function() {
  
});
