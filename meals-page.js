const obj = require("./functions.js")
const renderTable = obj['renderTable']
const tty = require('tty')
const readline = require('readline')
const addMealsObject = require("./add-meals.js")
const addMeal = addMealsObject['addMeal']
const fs = require('fs');
const parse = require('csv-parse/lib/sync')


const getmeals = () => {
  const data = fs.readFileSync('meals.csv', 'utf8')
  const records = parse(data, {
    // columns: true,
    skip_empty_lines: true
  })

  return records
}


const mealsPage = () => {
  let meals = getmeals()
  renderTable(meals, ["meal", "grams"])
}

module.exports = {
  mealsPage: mealsPage
}
