// we decided to not use this pattern anymore since for some reason it messes up the watcher functionality on linux
// const {given} = require('cypress-cucumber-preprocessor')

// you can have external state, and also require things!
const url = 'https://edge_qa.bookingbug.com'

given('I open rails', () => {
  cy.visit(url)
})