// we decided to not use this pattern anymore since for some reason it messes up the watcher functionality on linux
// const {given} = require('cypress-cucumber-preprocessor')

const url = 'https://studio.bookingbug.com/index.html';

given('I open studio', () => {
  cy.visit(url)
})