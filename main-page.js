const parse = require('csv-parse/lib/sync')
const fs = require('fs')
const functions = require('./functions.js')
const renderTable = functions['renderTable']

const getFoods = () => {
  const data = fs.readFileSync('foods_database - ABBREV.csv', 'utf8')
  const records = parse(data, {
    columns: true,
    skip_empty_lines: true
  })

  let foodsArray = []
  for (let i = 0; i < records.length; i = i + 1) {
    let element = records[i]
    foodsArray.push([element['Name'], element['Calories'], element['Proteins'], element['Carbs'], element['Fats']])

  }

  return foodsArray

}


const getmeals = () => {
  const data = fs.readFileSync('meals.csv', 'utf8')
  const records = parse(data, {
    // columns: true,
    skip_empty_lines: true
  })

  return records

}


const enrichingMeals = (foods) => {
  const arr = []
  for (let i = 0; i < meals.length; i = i + 1) {
    let meal = meals[i]
    for (let j = 0; j < foods.length; j = j + 1) {
      let food = foods[j]
      if (meal[0] === food[0]) {
        let resultCal = food[1] * (meal[1] / 100)
        let resultPro = food[2] * (meal[1] / 100)
        let resultCarbs = food[3] * (meal[1] / 100)
        let resultFat = food[4] * (meal[1] / 100)
        arr.push([meal[0], food[0], Math.round(resultCal), Math.round(resultPro), Math.round(resultCarbs), Math.round(resultFat)])

      }
    }
  }
  return arr
}

const enrichedMealsGroupedByDateWithoutNameOfTheFoods = (arrWithNames) => {
  let arrWithoutNames = []
  for (let i = 0; i < arrWithNames.length; i = i + 1) {
    let pushIndex = arrWithNames[i]
    arrWithoutNames.push([pushIndex[0], pushIndex[2], pushIndex[3], pushIndex[4], pushIndex[5]])
  }
  return arrWithoutNames
}


let findDuplicatesAndSum = (inputArr) => {
  let space = ", "
  let duplicateIndex = {};
  let outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    let item = inputArr[i];
    let collisionIndex = duplicateIndex[item[0]];
    if (collisionIndex > -1) {
      outputArr[collisionIndex][1] += space += item[1];
      outputArr[collisionIndex][2] += item[2];
      outputArr[collisionIndex][3] += item[3];
      outputArr[collisionIndex][4] += item[4];
      outputArr[collisionIndex][5] += item[5];
    }
    else {
      outputArr.push(item);
      duplicateIndex[item[0]] = outputArr.length - 1;
    }
  }
  return outputArr;
};


// move in the functions that needs it
let meals = getmeals()

// console.log(getFoods())
const mainPage = () => {
  const foods = getFoods()
  const enrichedMeals = enrichingMeals(foods)

  const enrichedMealsGroupedByDate = findDuplicatesAndSum(enrichedMeals)
  const theNewestArray = enrichedMealsGroupedByDateWithoutNameOfTheFoods(enrichedMealsGroupedByDate)
  renderTable(theNewestArray, ["Name", "Calories", "Proteins", "Carbs", "Fats"])
}

module.exports = {
  mainPage: mainPage
}