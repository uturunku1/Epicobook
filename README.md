# _Epicobook_

#### _A webpage listing classmates, 30 January 2017_

#### By _**Stella Huayhuaca, Erica Wright, Phil Putnam, Patrick McGreevy**_

## Description

_A webpage that allows a user to input their information as a contact, as well as look at the contacts list of classmate and search for individual contacts from the list. A user can also sort the contacts list by several criteria and pick a contact to be matched with another contact. A memory game can be played using classmate names and pictures to learn classmate names and faces._

## Setup/Installation Requirements

* _Clone repository from github: https://github.com/uturunku1/Epicobook_
* _Open up index.html in a web browser_
* _Browse contacts list and details_
* _Click match.html to select a classmate and match them with another_
* _Click join.html to submit contact information to classmate list_
* _Click memory-game.html to play the memory game!_

## Specifications

|Behavior|Input|Output|
|--------|-----|------|
|Enter contact information|"Bob Smith, Portland, OR, luces.huayhuaca@gmail.com, bob-smith, None, stripper, dancing, Cusco, Peru, green, NW"|Displays clickable name: "Bob Smith" along with rest of contacts list|
|Click on contact in list|Click "Bob Smith"|Displays all answers and picture if available|
|Click "Alphabetical"|Sorts current list of contacts alphabetically by last name and displays|"Jason Brown, Bob Smith"|
|Click "By Coding Experience"|Sorts current list of contacts by least to most experience and displays|"Bob Smith, Jason Brown"|
|Click "By Location"|Displays map of Portland with clickable locations|Map picture|
|Click on Portland district on Map picture|Sorts list of contacts and only displays contacts located in that area|"NW = Bob Smith"|
|Select student on Match page|Displays student details and match selection option|"Jason Brown" - Match By: Location or Randomly|
|Select match "By Location"|Displays random student from same area on right|Bob Smith, "It's a match!"|
|Select match "Randomly"|Displays random student on right|Jane Doe, "It's a match!"|

Memory Game Specifications

|Example Input|Output|
|Select number of students to play with|"4"|
|Select "Play!"|Displays twice as many empty boxes as students selected|
|Click on box|Reveals box content (either student image or student name)|
|Click on second box|Reveals box content (either student image or student name)|
|If two clicks belong to the same student|Player is awarded point, has another turn|
|If two clicks do not belong to same student|Player ends turn|
|All tiles are turned over|Game ends|
|Player with most points wins|"You win!"|

## Known Bugs

_None so far. Memory game not completed, work in progress._

## Support and contact details

_Please contact luces.huayhuaca@gmail.com for any issues or questions._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_

### License

*Licensed under MIT*

Copyright (c) 2017 **_Stella Huayhuaca, Erica Wright, Phil Putnam, Patrick McGreevy_**
