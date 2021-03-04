// for inner arrays index 1 is calories for 100g
const parse = require('csv-parse/lib/sync')
const fs = require('fs');
const { get } = require('http');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const renderTableObj = require('./functions.js')
const renderTable = renderTableObj['renderTable']



let searchAnswers = []
const findFoods = (foodSearch) => {
  for(i = 0; i < foods.length; i = i + 1){
    if ( foods[i][1].includes(foodSearch)) {
      searchAnswers.push(foods[i][1])
    }
  }
  return searchAnswers
}


let quantitysave
const quantityCallback = (quantitysearch) => {
  quantitysave = quantitysearch
  rl.question("Enter meal? ", searchMealCallback)
}


const mealCallback = (choice) => {
  let choiceNumber = Number(choice)
  for(i = 0; i < searchAnswers.length; i = i + 1) {
    if (choiceNumber === i + 1) {
      const fs = require('fs');
      let csvRoll ='"' + searchAnswers[i] + '"' + "," + quantitysave + "\n"
      fs.appendFileSync("meals.csv", csvRoll, "UTF-8",{'flags': 'a+'});
      renderTable(getmeals(), ["meal", "grams"])
    }
  }
}

const getFoods = () => {
  const data = fs.readFileSync('foods_database - ABBREV.csv', 'utf8')
  const records = parse(data, {
    skip_empty_lines: true
  })
return records
}

let foods = getFoods()

const getmeals = () => {
  const data = fs.readFileSync('meals.csv', 'utf8')
  const records = parse(data, {
    // columns: true,
    skip_empty_lines: true
  })

  return records
}


const searchMealCallback = (mealSearch) => {
  let foundFoods = findFoods(mealSearch)
  let productNumber = 0
  for(i = 0; i < foundFoods.length; i = i + 1) {
    productNumber = 1 + productNumber
    let result = foundFoods[i]
    console.log(productNumber.toString()+ "-" + result)
  }
  rl.question("Choose number ", mealCallback)
}

const addMeal = () => {
  rl.question("Enter quantity ", quantityCallback)
}


module.exports = {
  'addMeal': addMeal
}
