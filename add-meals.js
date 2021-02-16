// for inner arrays index 1 is calories for 100g
const exampleRows = [ 
  ['pork meat', 670],
  ['tomatos', 400],
  ['yogurt', 300],
  ['oats', 300],
  ['onion', 490],
  ['orange', 900],
  ['banana', 100],
  ['bread', 400],
  ['icecream', 300],
  ['lime', 300],
  ['potato',99],
  ['tuna fish', 350],
  ['grapes', 100],
]


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let searchAnswers = []
const findMeals = (mealSearch) => {
  for(i = 0; i < exampleRows.length; i = i + 1){
    if ( exampleRows[i][0].includes(mealSearch)) {
      searchAnswers.push(exampleRows[i][0])
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
      console.log(searchAnswers[i] + " " + "was saved")
      const fs = require('fs');
      let csvRoll = searchAnswers[i] + "," + quantitysave + "\n"
      fs.appendFileSync("text2.txt", csvRoll, "UTF-8",{'flags': 'a+'});

    }
  }
}


const searchMealCallback = (mealSearch) => {
  let foundMeals = findMeals(mealSearch)
  let productNumber = 0
  for(i = 0; i < foundMeals.length; i = i + 1) {
    productNumber = 1 + productNumber
    let result = foundMeals[i]
    console.log(productNumber.toString() + result)
  }
  rl.question("Choose number ", mealCallback)
}

rl.question("Enter quantity ", quantityCallback)


