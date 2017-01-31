var makeAccount = function(object) {
  var o = object;
  var account = new Account(o.firstName, o.lastName, o.email, o.gitHubHandle, o.hobbies, o.favoriteColor, o.favoriteDestination, o.codingExperience, o.previousJob, o.whereFrom);

  return account;
};

// var json = '[{"firstName":  "Patrick","lastName": "McGreevy","email": "patrick7490@icloud.com","gitHubHandle": "ptown-epicodus","hobbies": ["coding","biking"],"favoriteColor": "blue","codingExperience": "Over 5 years","previousJob": "Tech support","whereFrom": "Portland, OR", "favoriteDestination": "nowhere"}, {"firstName":  "Erica","lastName": "Wright","email": "ericaw21@gmail.com","gitHubHandle": "ericaw21","hobbies": ["SCUBA diving","drawing"],"favoriteColor": "turquoise","codingExperience": "Between 1-4 months","previousJob": "Scheduler","whereFrom": "Texas and England", "favoriteDestination": "ocean"}]';
//
// var data = JSON.parse(json);
// data.forEach(function(element) {
//   accounts.push(makeAccount(element));
// });

var sean = new Account("Sean", "Peterson","seanpeterson11@gmail.com", "Seanpeterson", ["doing fun stuff"], "blue", "Chiang Mai", "Between 1-4 weeks", "Doer of things", "United States");
accounts.push(sean);

var david = new Account("David", "Rolfs", "rolfs97@yahoo.com", "davidrolfs", ["golfing", "snowboarding", "hiking"], "yellow", "Whistler B.C.", "Between 1-4 weeks", "Amazon shipping warehouse", "Milwaukie WI");
accounts.push(david);

var matt = new Account("Matt", "Kelley", "m_kelley2@yahoo.com", "mkelley2", ["video games", "hockey", "movies"], "red", "Colorado River", "Between 1-4 months", "Amazon customer service", "San Diego");
accounts.push(matt);

var charles = new Account("Charles", "Peden", "ccbpeden@warpmail.net", "ccdpeden", ["gaming", "walking", "music"], "red", "Venice", "Between 1-4 weeks", "Costumer", "Klamath Falls, OR");
accounts.push(charles);

var azure = new Account("Azure", "Legacy", "rose.a.legacy@gmail.com", "AzureLegacy", ["dying"], "turquoise", "Hell", "Over 5 years", "CEO of google", "The Ukraine");
accounts.push(azure);

var maggie = new Account("Maggie", "Harrington", "maggie.harrington@gmail.com", "maggie-harrington", ["hiking", "running", "travel", "photography", "cooking", "gardening"], "purple", "Italy", "Between 1-4 weeks", "Catering chef", "Ashland, OR");
accounts.push(maggie);

var keith = new Account("Keith", "Evans", "kwlevans@gmail.com", "Kwlevans", ["filling out surveys", "surving out fillveys"], "gray", "Home", "Between 1-4 months", "College coaching", "Idaho");
accounts.push(keith);

var drew = new Account("Drew", "Devlin", "andrewkdevlin23@gmail.com", "AndrewDevlin", ["hiking"], "blue", "NYC", "Between 1-4 months", "Plumber", "New Jersey");
accounts.push(drew);

var benjamin = new Account("Benjamin T.", "Seaver", "BenjaminTSeaver", "bseaver", ["sailing", "hiking"], "blue", "Mountain Park Trails", "Over 5 years", "Cerner Corporation", "Philadelphia, PA");
accounts.push(benjamin);

var brendan = new Account("Brendan", "Grubb", "brendangrubb@gmail.com", "brendangrubb", ["listening to and playing music", "Star Trek", "reading science fiction"], "blue", "Oban, Scotland", "Between 1-4 weeks", "Manager of Everyday Music", "Miami, FL");
accounts.push(brendan);

var koji = new Account("Koji", "Nakagawa", "lightupthesky0627@gmail.com", "KNaka88", ["movie", "photography"], "red", "Sea", "Between 1-4 months", "Sales", "Japan");
accounts.push(koji);

var michaela = new Account("Michaela", "Davis", "michaela.delight@gmail.com", "Michaela-Davis", ["whitewater rafting", "visual art", "hiking", "camping"], "turquoise", "The River", "None", "Art4Life Abernethy, Littles Head Teacher", "Montana");
accounts.push(michaela);
