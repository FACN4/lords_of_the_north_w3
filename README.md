# The Lords of the North - Suha, Yoosef, Noor, Rayan & Matt

Our link : https://FACN4.github.com/lords_of_the_north_w3

## Section 1. Why?

This web app is aimed at Game of Thrones fans who are seeking more information about their favourite character or house and funny GIFs based on the character/house.

This project gave us experience of working with APIs and practicing our HTML, CSS and JavaScript skills.

## Section 2. What?

The website contains a header, a choice of what to search (house or character), a description of the house / character and 3 GIFs related to the the user's search.

## Section 3. How?

We began by reading the the project brief together and creating a list of all user requirements.

Next we devised a basic HTML site structure and website architecture together (see below for more details).

Finally we broke into 2 teams, pair programming together, to solve clearly defined issues which we identified together in regular team catch-ups.

## Website Architecture

The website has 2 JavaScript files:

1.  DOM.js
2.  API.js

The DOM.JS files contains functions that manipulate the DOM. Either gaining information from the user e.g. the selector listeners or updating content in the case of the GIF generator. The DOM.js file also calls the API functions when the user clicks on a new option.

The API.JS file contains 3 functions - one for generic API requests, one for requests to the GoT API and one for requests to the GIPHY API. The functions for the GoT API and the GIPHY pass data to the DOM.JS file to update the client.

### Data Flow

The data flow is as follows:

1.  An event listener on the 'option box' passes the user's choice to the relevant API
2.  API call to relevant API with character/house name or ID
3.  GoT API returns fields which are used to populate the description text content
4.  GIPHY API returns 3 images which are used to populate the <div> for GIFs at the bottom of the page.

<img src="https://i.imgur.com/ADa1j6i.png" alt="drawing" height="400px"/>

## User journey

The user journey is as follows:

1.  User chooses to search for GIFs by character or house by pressing on the relevant image
2.  User picks a character or house from the dropdown list
3.  Website is updated with house/character description and 3 GIFs
4.  User can select another house/character by choosing another option from the dropdown or by clicking the image which takes the user back to step 2.

### Wireframe

We created the following wireframe in order to support this user journey:

<img src="https://image.ibb.co/cG1Lyd/1_Home.png" alt="drawing" height="400px"/>

## Reference - Requirements

We met the following user stories with our website:

- [x] Your app queries at least two APIs using the XMLHttpRequest method
- [x] Your app features some dynamic content
- [x] A clearly defined user journey, documented in your readme.
- [x] A well-considered architecture for your app - think back to the workshops from the beginning of this week. Try to modularise your code, or break it down into separate files. Document any key decisions about how you structure your code in your readme!
- [x] Code: break your JavaScript down into small functions with a clear input and output; this will make it easy to write tests
- [ ] Tests: you must write tests!
- [x] Design: aim for a responsive, mobile-first design
- [x] Accessibility: same as always, we'll be running your code through accessibility checkers
- [ ] Take appropriate measures when it comes to concealing private information (i.e. your API key!)
