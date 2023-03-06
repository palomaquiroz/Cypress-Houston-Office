

# CYPRESS AUTOMATION SUITE FOR HOUSTON OFFICE WEBPAGE

This is the automation suite for the Houston Office webpage.  
Framework used was [Cypress](https://www.cypress.io/).  
In this suite, you will find tests for:
* Validating that the December Labs webpage displays correctly
* Validating that the Houston Office webpage displays correctly when navigating to it through the December Labs webpage
* Validating that the ‘Schedule free consultation’ form opens properly
* Validating that the ‘Schedule free consultation’ form closes properly

The environment where this tests are run is the [December Labs Staging Environment](https://inhouse.decemberlabs.com/).

## Pre-requisites

 - [Node.js](https://nodejs.org/en/) should be installed
 - A code editor as [Visual Studio Code](https://code.visualstudio.com/) is recommended

## Run Locally

First of all, clone the project into your local machine

```bash
  git clone https://github.com/palomaquiroz/Cypress-Houston-Office
```

Once that is done, go to the project directory

```bash
  cd Cypress-Houston-Office
```

Install dependencies running the following command

```bash
  npm install
```

Run the tests by using

```bash
  npm run test
```

A UI will open up.
If it's your first time using Cypress latest version, you will have to click on 'Continue' on the initial form that shows up.  
After that (or if you've already used cypress latest version before), you'll see a folder with the file HoustonOfficePage.cy.js  
Click on it to run the tests

If you want to see the code in your local machine, open it with the following command.

```bash
  code .
```

## Testing Feedback

After creating and running the suite I have a couple of suggestions to improve the quality of the app and the testing process, these are:
* The access to the Houston Office page from the December Labs webpage it is not intuitive. Maybe the access could be through the menu adding a new section named 'Locations' for ex. or, if we don't want that much visibility, a link to the page could be added under the address of the office. The link on the 'Houston' word gets lost if the user doesn't hover the cursor over it.
* Some validations could be added to the fields in order to check that the information given by the user is the one we are expecting to receive. I noticed that the 'Name' field, for example, takes names that contain numbers, special characters or that are just one character long. Even though it isn't a mandatory field, it would be nice to check that the user is providing their real name if they are going to fill that field.
* A message indicating the type of error would be helpful to the user (ex. "Please complete your name", or "Name should be more than 1 character long" if we take the first suggestion).
* I think it would be more specific and helpful to the user to add a date picker and a time field so the user can choose the date time that fits their best to the call. I feel like the sense of the form gets lost with only the 'Message' textarea as an option to leave their schedule. Or maybe a more simple change as changing the 'Message' title and/or placeholder to 'Leave here the dates and times that work best for you to schedule the call' can be done.
* The size of the form could improve as an unnecessary vertical scrolling bar is displayed at the right side of it.
* Regarding testing, it would be helpful to have test ids in the elements of the page to help the automation process be more smooth, clean and accurate.

## Authors

- [@palomaquiroz](https://github.com/palomaquiroz)

